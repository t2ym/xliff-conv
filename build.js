const fs = require('fs');
const path = require('path');

const srcPath = path.join('src', 'xliff-conv.js');
const factorySrc = fs.readFileSync(srcPath);
const distUMDPath = 'xliff-conv.js';
const distESMDirectory = 'esm';
const distESMPath = path.join(distESMDirectory, 'xliff-conv.js');
const distESMPath2 = 'xliff-conv.mjs';

const genUMD = (factory) => 
`/*
@license https://github.com/t2ym/xliff-conv/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
*/
(function (root, factory) {

  'use strict';

  /* istanbul ignore if: AMD is not tested */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.XliffConv = factory());
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

}(this, ${factory}));
`;

const genESM = (factory) => 
`/*
@license https://github.com/t2ym/xliff-conv/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
*/
export default (${factory})();
`;

fs.writeFileSync(distUMDPath, genUMD(factorySrc));
try { fs.mkdirSync(distESMDirectory); } catch (e) {}
fs.writeFileSync(distESMPath, genESM(factorySrc));
fs.writeFileSync(distESMPath2, genESM(factorySrc));
