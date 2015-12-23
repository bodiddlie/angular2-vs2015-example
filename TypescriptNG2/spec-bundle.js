Error.stackTraceLimit = Infinity;
require('phantomjs-polyfill');
require('es6-promise');
require('es6-shim');
require('reflect-metadata');
require('zone.js/lib/browser/zone-microtask.js');
require('zone.js/lib/browser/long-stack-trace-zone.js');
globalPolyfills();

require('angular2/testing.js');

var testContext = require.context('./app', true, /\.test\.ts/);

testContext.keys().forEach(testContext);

var domAdapter = require('angular2/src/platform/browser/browser_adapter');
domAdapter.BrowserDomAdapter.makeCurrent();

function globalPolyfills() {
    global.__extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        var __ = function () { this.constructor = d; };
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    global.__decorate = global.Reflect.decorate;
    global.__metadata = global.Reflect.metadata;

    global.__param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    };

    global.__awaiter = (this && this.__awaiter) ||
      function (thisArg, _arguments, Promise, generator) {
          return new Promise(function (resolve, reject) {
              generator = generator.call(thisArg, _arguments);
              function cast(value) {
                  return value instanceof Promise && value.constructor === Promise ?
                      value : new Promise(function (resolve) { resolve(value); });
              }
              function onfulfill(value) { try { step('next', value); } catch (e) { reject(e); } }
              function onreject(value) { try { step('throw', value); } catch (e) { reject(e); } }
              function step(verb, value) {
                  var result = generator[verb](value);
                  result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
              }
              step('next', void 0);
          });
      };
}