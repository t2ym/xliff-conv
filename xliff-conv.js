/*
@license https://github.com/t2ym/xliff-conv/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
*/
(function (root, factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.XliffConv = factory();
  }

}(this, function () {
// UMD Definition above, do not remove this line
  'use strict';

  var XliffConv = function XliffConv(options) {
    options = options || {};
    this.useSources = options.useSources || false;
    this.date = options.date || new Date();
    this.xmldom = typeof window === 'object' ? window : require('xmldom');
    this.DOMParser = this.xmldom.DOMParser;
    this.XMLSerializer = this.xmldom.XMLSerializer;
    this.xliffStates = options.xliffStates || XliffConv.xliffStates.default;
    this.todoOps = this._todoOps(this.xliffStates);
    this.logger = options.logger || console.log;
    this.warnLogger = options.warnLogger || console.warn;
    this.errorLogger = options.errorLogger || console.error;
    this.toolVersion = '0.0.5';
  };

  XliffConv.xliffStates = {
    // All state-less unapproved strings are regarded as needs-translation
    'default': {
      'add'    : [ 'new' ],
      'replace': [ 'needs-translation', 'needs-adaptation', 'needs-l10n', '' ],
      'review' : [ 'needs-review-translation', 'needs-review-adaptation', 'needs-review-l10n' ],
      'default': [ 'translated', 'signed-off', 'final', '[approved]' ]
    },
    /* === State Mapping Tables for migration from xliff2bundlejson === */
    // All state-less strings are regarded as approved=yes
    'approveAll': {
      'add'    : [ 'new' ],
      'replace': [ 'needs-translation', 'needs-adaptation', 'needs-l10n' ],
      'review' : [ 'needs-review-translation', 'needs-review-adaptation', 'needs-review-l10n' ],
      'default': [ 'translated', 'signed-off', 'final', '' ]
    },
    // State-less translated strings need review
    'reviewTranslated': {
      'add'    : [ 'new' ],
      'replace': [ 'needs-translation', 'needs-adaptation', 'needs-l10n', '[!state&&!approved&&source==target]', '' ],
      'review' : [ 'needs-review-translation', 'needs-review-adaptation', 'needs-review-l10n', '[!state&&!approved&&source!=target]' ],
      'default': [ 'translated', 'signed-off', 'final', '[approved]' ]
    },
    // State-less translated strings are regarded as approved=yes
    'approveTranslated': {
      'add'    : [ 'new' ],
      'replace': [ 'needs-translation', 'needs-adaptation', 'needs-l10n', '[!state&&!approved&&source==target]', '' ],
      'review' : [ 'needs-review-translation', 'needs-review-adaptation', 'needs-review-l10n' ],
      'default': [ 'translated', 'signed-off', 'final', '[!state&&!approved&&source!=target]', '[approved]' ]
    }
  };

  XliffConv.prototype._todoOps = function (xliffStates) {
    var output = {};
    for (var op in xliffStates) {
      for (var i in xliffStates[op]) {
        output[xliffStates[op][i]] = output[xliffStates[op][i]] || [];
        output[xliffStates[op][i]].push(op);
      }
    }
    return output;
  };

  XliffConv.prototype._resolveTodoOps = function (parameters) {
    var result = this.todoOps[''][0];
    var match;
    if (parameters.state &&
        this.todoOps[parameters.state] &&
        this.todoOps[parameters.state][0]) {
      result = this.todoOps[parameters.state][0];
    }
    else {
      for (var prop in this.todoOps) {
        match = prop.match(/^\[(.*)\]$/);
        if (match) {
          if (match[1].split(/&&/).map(function (expression) {
            match = expression.match(/^([\-\w]*)$/);
            if (match) {
              // non-null
              return !!parameters[match[1]];
            }
            match = expression.match(/^!([\-\w]*)$/);
            if (match) {
              // negation
              return !parameters[match[1]];
            }
            match = expression.match(/^([\-\w]*)==([\-\w]*)$/);
            if (match) {
              // equality
              return (parameters.hasOwnProperty(match[1]) ? parameters[match[1]] : match[1]) ===
                     (parameters.hasOwnProperty(match[2]) ? parameters[match[2]] : match[2]);
            }
            match = expression.match(/^([\-\w]*)!=([\-\w]*)$/);
            if (match) {
              // unequality
              return (parameters.hasOwnProperty(match[1]) ? parameters[match[1]] : match[1]) !==
                     (parameters.hasOwnProperty(match[2]) ? parameters[match[2]] : match[2]);
            }
            return false;
          }).reduce(function (previous, current) {
            return previous && current;
          }, true)) { // Expression matched
            result = this.todoOps[prop][0];
            break;
          }
        }
      }
    }
    return result;
  };

  XliffConv.prototype.parseXliff = function (xliff, options, callback) {
    var args = arguments;
    [ 'string', 'object', 'function' ].forEach(function (type, index) {
      if (!args[index] || typeof args[index] !== type) {
        throw new Error('invalid argument');
      }
    });
    if (typeof options.bundle !== 'object') {
      throw new Error('invalid options.bundle');
    }
    var parser = new (this.DOMParser)();
    var dom = parser.parseFromString(xliff, 'application/xml');
    //var fileTag = dom.getElementsByTagName('file')[0];
    var transUnits = dom.getElementsByTagName('trans-unit');
    var output = options.bundle;
    var todoMap = {};
    var component;
    var i;
    for (component in output) {
      if (output[component].meta && output[component].meta.todo) {
        for (i in output[component].meta.todo) {
          todoMap[component + output[component].meta.todo[i].path.replace(/[.]/g, '_$DOT$_').replace(/\//g, '.')] =
            output[component].meta.todo[i];
        }
      }
    }
    //console.log('todoMap = ', todoMap);
    Array.prototype.forEach.call(transUnits, function (transUnit) {
      var sourceTag = transUnit.getElementsByTagName('source')[0];
      var targetTag = transUnit.getElementsByTagName('target')[0];
      var id = transUnit.getAttribute('id');
      var restype = transUnit.getAttribute('restype') || 'x-json-string';
      var source = sourceTag.textContent;
      var target = targetTag.textContent;
      var approved = transUnit.getAttribute('approved') === 'yes';
      var state = targetTag.getAttribute('state');
      var cursor = output;
      var paths = id.split('.').map(function (p) { return p.replace(/_\$DOT\$_/g, '.'); });
      var component = paths[0];
      var parsed;
      var value;
      var todo;
      var op;
      //console.log({ id: id, restype: restype, source: source, target: target, state: state, approved: approved });
      parsed = source.match(/^_\$([a-zA-Z]*)\$_(.*)$/);
      if (parsed) {
        // process _$type$_value format for compatibility with xliff2bundlejson
        source = parsed[2];
      }
      while (paths.length > 0) {
        if (paths.length === 1) {
          if (cursor[paths[0]]) {
            parsed = target.match(/^_\$([a-zA-Z]*)\$_(.*)$/);
            if (parsed) {
              // process _$type$_value format for compatibility with xliff2bundlejson 
              switch (parsed[1]) {
              case 'number':
                value = Number(parsed[2]);
                break;
              case 'boolean':
                value = Boolean(parsed[2] === 'true');
                break;
              case 'object':
                value = JSON.parse(parsed[2]);
                break;
              case 'undefined':
                value = undefined;
                break;
              case 'string':
              default:
                value = parsed[2];
                break;
              }
            }
            else {
              // process <trans-unit restype="x-json-*">
              switch (restype) {
              case 'x-json-number':
                value = Number(target);
                break;
              case 'x-json-boolean':
                value = Boolean(target === 'true');
                break;
              case 'x-json-object':
                value = JSON.parse(target);
                break;
              case 'x-json-undefined':
                value = undefined;
                break;
              case 'x-json-string':
              default:
                value = target;
                break;                
              }
            }
            todo = todoMap[id];
            if (!todo ||
                todo.value.replace(/\s\s*/g, ' ') === source.replace(/\s\s*/g, ' ')) {
              // no todo or source is matching with todo.value
              // update value
              cursor[paths[0]] = value;
              // map to todo.op
              op = this._resolveTodoOps({
                'state'    : state,
                'id'       : id,
                'component': component,
                'restype'  : restype,
                'source'   : source,
                'target'   : target,
                'approved' : approved // Boolean
              });
              if (op === 'default') {
                // no todo for approved item
                if (todo) {
                  // mark the todo for removal
                  todo.op = 'noop';
                }
              }
              else {
                if (todo) {
                  todo.op = op;
                }
                else {
                  // Fix #1. Populate missing todo item.
                  todo = {
                    'op': op,
                    'path': '/' + id.split('.').splice(1).join('/').replace(/_\$DOT\$_/g, '.'),
                    'value': source
                  };
                  output[component].meta = output[component].meta || {};
                  output[component].meta.todo = output[component].meta.todo || [];
                  output[component].meta.todo.push(todo);
                }
              }
            }
            else {
              // discard value
              this.warnLogger('XliffConv: id = ' + id + ' discarding value "' + value + '"' + 
                ' as source \"' + source + '\" does not match with todo.value "' + todo.value + '"');
            }
            paths.shift();
          }
          else {
            // missing resource
            this.warnLogger('XliffConv: id = ' + id + ' is missing');
          }
          break;
        }
        else {
          if (!cursor[paths[0]]) {
            // missing resource
            this.warnLogger('XliffConv: id = ' + id + ' is missing');
            break;
          }
          cursor = cursor[paths.shift()];
        }
      }
    }.bind(this));
    for (component in output) {
      if (output[component].meta && output[component].meta.todo) {
        for (i = output[component].meta.todo.length - 1; i >= 0; i--) {
          if (output[component].meta.todo[i].op === 'noop') {
            // remove the noop todo item
            output[component].meta.todo.splice(i, 1);
          }
        }
      }
    }

    callback(output);
  };

  XliffConv.prototype.parseJSON = function (bundles, options, callback) {
    var args = arguments;
    [ 'object', 'object', 'function' ].forEach(function (type, index) {
      if (!args[index] || typeof args[index] !== type) {
        throw new Error('invalid argument');
      }
    });
    var parser = new (this.DOMParser)();
    var serializer = new (this.XMLSerializer)();
    var xmlHeader =
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<!DOCTYPE xliff PUBLIC "-//XLIFF//DTD XLIFF//EN" "http://www.oasis-open.org/committees/xliff/documents/xliff.dtd">\n';
    var xliffTemplate = 
      '<xliff version="1.0">\n' +
      '  <file xml:space="' + (options.xmlSpace || 'default') + '" ' +
              'source-language="' + (options.srcLanguage || 'en') + '" ' +
              'target-language="' + (options.destLanguage || 'fr') + '" ' +
              'datatype="' + (options.dataType || 'plaintext') + '" ' +
              'original="' + (options.original || 'messages') + '" ' +
              'date="' + this.date.toISOString().replace(/[.][0-9]*Z$/, 'Z') + '" ' +
              'product-name="' + (options.productName || 'messages') + '">\n' +
      '    <header>\n' +
      '      <tool tool-id="xliff-conv" tool-name="xliff-conv" tool-version="' + this.toolVersion + '"/>\n' +
      '    </header>\n' +
      '    <body>\n' +
          '</body>\n' +
      '  </file>\n' +
      '</xliff>';
    var transUnitTemplate =
      '<wrapper>' +
      '      <trans-unit>\n' +
      '        <source></source>\n' +
      '        <target></target>\n' +
      '      </trans-unit>\n' +
      '</wrapper>';
    var spacer = '<wrapper>    </wrapper>';
    var xliff = parser.parseFromString(xliffTemplate, 'application/xml');
    var bodyTag = xliff.getElementsByTagName('body')[0];
    var sourceBundle = bundles[''];
    var targetBundle = bundles[options.destLanguage];
    var component;
    var todos;
    var todoMap;
    var index;

    for (component in targetBundle) {
      if (component !== 'bundle') {
        todos = targetBundle[component].meta.todo;
        todoMap = {};
        for (index = 0; index < todos.length; index++) {
          todoMap[todos[index].path.replace(/[.]/g, '_$DOT$_').replace(/\//g, '.').substring(1)] = todos[index];
        }
        this._traverseBundle('', sourceBundle[component], targetBundle[component], function (id, source, target) {
          //console.log('_traverseBundle callback id = ' + component + '.' + id + ' source = ' + source + ' target = ' + target);
          var transUnitWrapper = parser.parseFromString(transUnitTemplate, 'application/xml');
          var transUnit = transUnitWrapper.getElementsByTagName('trans-unit')[0];
          var sourceTag = transUnit.getElementsByTagName('source')[0];
          var targetTag = transUnit.getElementsByTagName('target')[0];
          var todo = todoMap[id];
          var state;
          transUnit.setAttribute('id', component + '.' + id);
          if (typeof source !== 'string') {
            transUnit.setAttribute('restype', 'x-json-' + typeof source);
          }
          if (todo) {
            if (this.xliffStates[todo.op]) {
              state = this.xliffStates[todo.op][0];
            }
            else {
              state = this.xliffStates.default[0];
            }
          }
          else {
            transUnit.setAttribute('approved', 'yes');
            state = this.xliffStates.default[0];
          }
          sourceTag.textContent = this._stringify(source);
          targetTag.textContent = this._stringify(target);
          targetTag.setAttribute('state', state);
          var nodes = Array.prototype.map.call(transUnitWrapper.getElementsByTagName('wrapper')[0].childNodes, function (node) {
            return node;
          });
          while (nodes.length > 0) {
            bodyTag.appendChild(nodes.shift());
          }
        }.bind(this));
      }
    }
    bodyTag.appendChild(parser.parseFromString(spacer, 'application/xml').getElementsByTagName('wrapper')[0].firstChild);
    callback(xmlHeader + serializer.serializeToString(xliff));
  };

  XliffConv.prototype._stringify = function (value) {
    switch (typeof value) {
    case 'string':
      return value;
    case 'boolean':
      return value ? 'true' : 'false';
    case 'number':
      return '' + value;
    case 'object':
      return JSON.stringify(value);
    case 'undefined':
    default:
      return '';
    }
  };

  XliffConv.prototype._traverseBundle = function (id, source, target, callback) {
    if (typeof target === 'object') {
      for (var prop in target) {
        if (id === '' && prop === 'meta') {
          continue;
        }
        this._traverseBundle(id + (id ? '.' : '') + prop.replace(/[.]/g, '_$DOT$_'),
          (source && source.hasOwnProperty(prop)
            ? source[prop]
            : (typeof source === 'object' && source.other ? source.other : '')),
          target[prop], callback);
      }
    }
    else {
      callback(id, source, target);
    }
  };

  return XliffConv;
}));
