import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {MovieList} from './movie-list.component';
import {MovieDetail} from './movie-detail.component';

import {MovieService} from './movie.service';

@Component({
    template: `
        <h2>Movie List</h2>
        <router-outlet></router-outlet>
    `,
    directives: [RouterOutlet],
    providers: [MovieService]
})
@RouteConfig([
        { path: '/', name: 'Movies', component: MovieList, useAsDefault: true },
        { path: '/:id', name: 'MovieDetail', component: MovieDetail },
        { path: '/new', name: 'AddMovie', component: MovieDetail }
])
export class MovieComponent { }