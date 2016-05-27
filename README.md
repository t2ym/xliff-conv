[![Build Status](https://travis-ci.org/t2ym/xliff-conv.svg?branch=master)](https://travis-ci.org/t2ym/xliff-conv)
[![Coverage Status](https://coveralls.io/repos/github/t2ym/xliff-conv/badge.svg?branch=master)](https://coveralls.io/github/t2ym/xliff-conv?branch=master)
[![npm](https://img.shields.io/npm/v/xliff-conv.svg)](https://www.npmjs.com/package/xliff-conv)
[![Bower](https://img.shields.io/bower/v/xliff-conv.svg)](https://customelements.io/t2ym/xliff-conv/)
# xliff-conv

XLIFF to/from JSON converter for Polymer [i18n-behavior](https://github.com/t2ym/i18n-behavior) (work in progress)

## Features

- Update bundle.*.json values with those from XLIFF
- Generate XLIFF from bundles
- Map todo operations in bundles onto XLIFF states
- Update todo operations in bundles with XLIFF states
- Handy migration from [xliff2bundlejson](https://github.com/t2ym/xliff2bundlejson)
- [UMD](https://github.com/ruyadorno/generator-umd) support

## TODOs

- Test suites on browsers

## Install

### For Node.js

```javascript
    npm install --save-dev xliff-conv
```

[Quick Tour](https://github.com/t2ym/polymer-starter-kit-i18n#quick-tour) with polymer-starter-kit-i18n

### For Browsers

```javascript
	bower install --save xliff-conv
```

## Import

### On Node.js

```javascript
	var XliffConv = require('xliff-conv');
```

### On Browsers

```html
	<script src="path/to/bower_components/xliff-conv/xliff-conv.js"></script>
```

## Examples

### Import XLIFF task on gulp

#### Note: This task has to be processed before [Leverage task with unbundle](https://github.com/t2ym/gulp-i18n-leverage#leverage-task-with-unbundle) to pick up outputs of this task.

#### Input:
  - Next XLIFF files in source
  - Current bundle JSON files in source (as output templates)

#### Output:
  - Overwritten bundle JSON files in source

```javascript
    var gulp = require('gulp');
    var JSONstringify = require('json-stringify-safe');
    var stripBom = require('strip-bom');
    var through = require('through2');
    var XliffConv = require('xliff-conv');

    // Import bundles.{lang}.xlf
    gulp.task('import-xliff', function () {
      var xliffPath = path.join('app', 'xliff');
      var xliffConv = new XliffConv();
      return gulp.src([
          'app/**/xliff/bundle.*.xlf'
        ])
        .pipe(through.obj(function (file, enc, callback) {
          var bundle, bundlePath;
          var base = path.basename(file.path, '.xlf').match(/^(.*)[.]([^.]*)$/);
          var xliff = String(file.contents);
          if (base) {
            try {
              bundlePath = path.join(file.base, 'locales', 'bundle.' + base[2] + '.json');
              bundle = JSON.parse(stripBom(fs.readFileSync(bundlePath, 'utf8')));
              xliffConv.parseXliff(xliff, { bundle: bundle }, function (output) {
                file.contents = new Buffer(JSONstringify(output, null, 2));
                file.path = bundlePath;
                callback(null, file);
              });
            }
            catch (ex) {
              callback(null, file);
            }
          }
          else {
            callback(null, file);
          }
        }))
        .pipe(gulp.dest('app'))
        .pipe($.size({
          title: 'import-xliff'
        }));
    });
```

### Export XLIFF task on gulp

#### Note: If the `todo` items in JSON files are removed, the corresponding `trans-unit`s are treated as `approved="yes"` and `state="translated"`.

#### Input:
  - Next bundles object in gulpfile.js

#### Output:
  - bundle.{lang}.xlf XLIFF in DEST_DIR/xliff

```javascript
    var gulp = require('gulp');
    var through = require('through2');
    var XliffConv = require('xliff-conv');

    var bundles; // bundles object generated by preprocess and leverage tasks

    // Generate bundles.{lang}.xlf
    gulp.task('export-xliff', function (callback) {
      var DEST_DIR = 'dist';
      var srcLanguage = 'en';
      var xliffPath = path.join(DEST_DIR, 'xliff');
      var xliffConv = new XliffConv();
      var promises = [];
      try {
        fs.mkdirSync(xliffPath);
      }
      catch (e) {
      }
      for (var lang in bundles) {
        if (lang) {
          (function (destLanguage) {
            promises.push(new Promise(function (resolve, reject) {
              xliffConv.parseJSON(bundles, {
                srcLanguage: srcLanguage,
                destLanguage: destLanguage
              }, function (output) {
                fs.writeFile(path.join(xliffPath, 'bundle.' + destLanguage + '.xlf'), output, resolve);
              });
            }));
          })(lang);
        }
      }
      Promise.all(promises).then(function (outputs) {
        callback();
      });
    });
```

## API

### Constructor

`var xliffConv = new XliffConv(options)`

#### `options` object

- date: Date, default: new Date() - date attribute value for XLIFF
- xliffStates: Object, default: XliffConv.xliffStates.default - todo.op to XLIFF state mapping table
- patterns: Object, default: XliffConv.patterns - A set of named regular expressions for pattern matching
- logger: Function, default: console.log - information logger
- warnLogger: Function, default: console.warn - warning logger
- errorLogger: Function, default: console.error - error logger

#### `XliffConv.xliffStates` object - predefined mapping tables for `options.xliffStates`

```javascript
  XliffConv.xliffStates = {
    // All state-less unapproved strings are regarded as needs-translation
    'default': {
      'add'    : [ 'new' ],
      'replace': [ 'needs-translation', 'needs-adaptation', 'needs-l10n', '' ],
      'review' : [ 'needs-review-translation', 'needs-review-adaptation', 'needs-review-l10n' ],
      'default': [ 'translated', 'signed-off', 'final', '[approved]' ]
    },
    // Aannotations {{name}} and tags <tag-name> are regarded as translated
    'annotationsAsTranslated': {
      'add'    : [ 'new' ],
      'replace': [ 'needs-translation', 'needs-adaptation', 'needs-l10n', '' ],
      'review' : [ 'needs-review-translation', 'needs-review-adaptation', 'needs-review-l10n' ],
      'default': [ 'translated', 'signed-off', 'final', '[approved]', '[source~=annotationsAndTags]' ]
    },
    // Newly added annotations {{name}} and tags <tag-name> are regarded as translated
    'newAnnotationsAsTranslated': {
      'add'    : [ 'new' ],
      'replace': [ 'needs-translation', 'needs-adaptation', 'needs-l10n', '' ],
      'review' : [ 'needs-review-translation', 'needs-review-adaptation', 'needs-review-l10n' ],
      'default': [ 'translated', 'signed-off', 'final', '[approved]', '[state==new&&source~=annotationsAndTags]' ]
    },
    // Newly added annotations {{name}} and tags <tag-name> are regarded as translated only at export
    'newAnnotationsAsTranslatedAtExport': {
      'add'    : [ 'new' ],
      'replace': [ 'needs-translation', 'needs-adaptation', 'needs-l10n', '' ],
      'review' : [ 'needs-review-translation', 'needs-review-adaptation', 'needs-review-l10n' ],
      'default': [ 'translated', 'signed-off', 'final', '[approved]', '[export&&state==new&&source~=annotationsAndTags]' ]
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
    /*
      Expression format:
        [condition1&&condition2&&...]
          - expression is true when all the conditions are true

      Operators for conditions:
        parameter
          - true if parameter is non-null
        !parameter
          - true if parameter is undefined, null, or ''
        parameter1==parameter2
          - true if parameter1 is equal to parameter2
        parameter1!=parameter2
          - true if parameter1 is not equal to parameter2
        parameter~=pattern
          - true if parameter matches the regular expression options.patterns.pattern
          - if options.patterns.pattern is undefined, pattern is treated as the matching string

      Predefined parameters: Undefined parameters are treated as strings for matching
        state
          - state attribute of trans-unit
        id
          - id attribute of trans-unit
        component
          - component name in id
        restype
          - restype attribute of trans-unit. 'x-json-string' for strings
        source
          - text content of source tag
        target
          - text content of target tag
        approved
          - true if approved attribute of trans-unit is 'yes'
        import
          - true on XLIFF import (parseXliff); false on XLIFF export (parseJSON)
        export
          - true on XLIFF export (parseJSON); false on XLIFF import (parseXliff)
     */
  }
```

#### `XliffConv.patterns` object - predefined named regular expressions for `options.patterns`

```javascript
  XliffConv.patterns = {
    'annotationsAndTags': /^({{[^{} ]*}}|\[\[[^\[\] ]*\]\]|<[-a-zA-Z]{1,}>)$/,
    'annotations': /^({{[^{} ]*}}|\[\[[^\[\] ]*\]\])$/,
    'numbers': /^[0-9.]{1,}$/,
    'tags': /^<[-a-zA-Z]{1,}>$/
  };
```

### `xliffConv.parseXliff(xliff, options, callback)` method

- xliff: String, XLIFF as a string
- options: Object, options.bundle as target bundle JSON object
- callback: Function, callback(output) with output JSON object

### `xliffConv.parseJSON(bundles, options, callback)` method

- bundles: Object, bundles object
- options.srcLanguage: String, default: 'en' - source language
- options.destLanguage: String, default: 'fr' - target language
- options.xmlSpace: String, default: 'default' - `<file xml:space>` attribute
- options.dataType: String, default: 'plaintext' - `<file datatype>` attribute
- options.original: String, default: 'messages' - `<file original>` attribute
- options.productName: String, default: 'messages' - `<file product-name>` attribute
- callback: Function, callback(output) with output XLIFF as a string

### Custom XLIFF restype attributes

| restype          | JSON type | Note                       |
|:-----------------|:----------|:---------------------------|
| x-json-string    | string    | Omitted                    |
| x-json-boolean   | boolean   | "true" or "false" in value |
| x-json-number    | number    |                            |
| x-json-object    | object    | Unused for now             |
| x-json-undefined | undefined | Empty string in value      |

### Default Mapping of todo.op and XLIFF states

#### JSON -> XLIFF

| todo.op | XLIFF state              |
|:--------|:-------------------------|
| add     | new                      |
| replace | needs-translation        |
| review  | needs-review-translation |
| N/A     | translated               |

#### XLIFF -> JSON

| XLIFF state              | approved  | todo.op | Note        |
|:-------------------------|:----------|:--------|:------------|
| new                      | no or N/A | add     |             |
| needs-translation        | no or N/A | replace |             |
| needs-adaptation         | no or N/A | replace |             |
| needs-l10n               | no or N/A | replace |             |
| N/A                      | no or N/A | replace |             |
| needs-review-translation | no or N/A | review  |             |
| needs-review-adaptation  | no or N/A | review  |             |
| needs-review-l10n        | no or N/A | review  |             |
| translated               | yes       | N/A     | Remove todo |
| signed-off               | yes       | N/A     | Remove todo |
| final                    | yes       | N/A     | Remove todo |
| N/A                      | yes       | N/A     | Remove todo |

## License

[BSD-2-Clause](https://github.com/t2ym/xliff-conv/blob/master/LICENSE.md)
