# istanbul-instrument

This is a comparison between istanbul-lib-instrument and istanbul@0.x

istanbul@0.x uses esprima and istanbul-lib-instrument uses babylon.

## How to compare

```bash
$ npm i
$ node test.js
```

The result

```
istanbul-lib-instrument parse: 100.553ms
istanbul-lib-instrument traverse: 479.304ms
istanbul-lib-instrument gen: 197.976ms
istanbul-lib-instrument: 780.625ms
istanbul@0.x parse: 60.204ms
istanbul@0.x traverse: 46.080ms
istanbul@0.x gen: 48.241ms
istanbul@0.x: 156.004ms
```
