import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Header} from './common/header.component';
import {MovieComponent} from './movies/movie.component';

import './app.scss';

@Component({
    selector: 'my-app',
    template: `
        <cog-header></cog-header>
        <router-outlet></router-outlet>
    `,
    directives: [Header, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
            path: '/movies/...',
            name: 'Movies',
            component: MovieComponent,
            useAsDefault: true
    }
])
export class AppComponent { }