import {beforeEachProviders, it, inject} from 'angular2/testing';
import {Header} from './header.component';
import {HeaderService} from './header.service';
import {Component, provide} from 'angular2/core';
import {Observable} from 'rxjs';

describe('Header Tests', () => {
    beforeEachProviders(() => [
        Header,
        HeaderService,
        provide(HeaderService, { useValue: { getUserName: () => { return Observable.of('Nick Klepinger') } } })
    ]);

    it('should have a name on load', inject([Header], (header) => {
        expect(header.username).toEqual('Kris Kringle');
    }));

    it('should load the name from the api after init', inject([Header], (header) => {
        header.ngOnInit();
        expect(header.username).toEqual('Nick Klepinger');
    }));
});