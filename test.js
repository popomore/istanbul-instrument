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

let t;

t = Date.now();
instrumenter1.instrumentSync(content);
console.log('istanbul-lib-instrument', Date.now() - t);

t = Date.now();
instrumenter2.instrumentSync(content);
console.log('istanbul@0.x', Date.now() - t);
