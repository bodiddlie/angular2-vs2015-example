import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'zone.js/lib/browser/zone-microtask';
import 'zone.js/lib/browser/long-stack-trace-zone';

import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import 'angular2/core';
import 'angular2/router';
import 'angular2/http';

import 'rxjs';

import 'bootstrap/dist/css/bootstrap.css';

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './app.component';

function main() {
    return bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
}

document.addEventListener('DOMContentLoaded', main);
