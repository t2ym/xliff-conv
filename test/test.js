/*
@license https://github.com/t2ym/xliff-conv/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
*/
'use strict';

var chai = require('chai');

var XliffConv = require('../xliff-conv');
var XliffConvBasicTest = require('./basic-test.js');
var XliffConvCustomTest = require('./custom-test');
var basicTest = new XliffConvBasicTest();
var customTest = new XliffConvCustomTest();

basicTest.run(XliffConv, chai);
customTest.run(XliffConv, chai);
