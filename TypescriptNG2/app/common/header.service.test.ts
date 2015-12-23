import {beforeEachProviders, it, inject} from 'angular2/testing';
import {MockBackend} from 'angular2/http/testing';
import {provide} from 'angular2/core';
import {BaseRequestOptions, Http, Response, ResponseOptions, RequestMethod} from 'angular2/http';

import {HeaderService} from './header.service';

describe('HeaderService', () => {
    beforeEachProviders(() => [
        MockBackend,
        BaseRequestOptions,
        provide(Http, {
            useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
            deps: [MockBackend, BaseRequestOptions]
        }),
        HeaderService
    ]);

    it('should return a observable of a name', inject([HeaderService, MockBackend], (svc, mock) => {
        let name = '"Nick Klepinger"';
        let response = new Response(new ResponseOptions({ body: name }));
        mock.connections.subscribe(c => {
            expect(c.request.method).toEqual(RequestMethod.Get);
            c.mockRespond(response)
        });

        svc.getUserName().subscribe(name => {
            expect(name).toEqual('Nick Klepinger');
        });
    }));
});