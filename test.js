'use strict';

const fs = require('fs');
const content = fs.readFileSync('node_modules/readable-stream/lib/_stream_readable.js', 'utf8');

const instrumenter1 = require('istanbul-lib-instrument').createInstrumenter({
  coverageVariable: '$$cov_1494243834008$$',
  compact: true,
  preserveComments: false,
  esModules: false,
  autoWrap: true,
});

const Instrumenter = require('istanbul/lib/instrumenter');
const instrumenter2 = new Instrumenter({
  coverageVariable: '$$cov_1494243834008$$',
  preserveComments: false,
  // compact: true,
  // esModules: false,
  // autoWrap: false,
});

console.time('istanbul-lib-instrument');
instrumenter1.instrumentSync(content);
console.timeEnd('istanbul-lib-instrument');

console.time('istanbul@0.x');
instrumenter2.instrumentSync(content);
console.timeEnd('istanbul@0.x');
