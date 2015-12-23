import {Component, OnInit} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';

import {MovieService, Movie} from './movie.service';

@Component({
    template: `
        <a [routerLink]="['AddMovie']" class="btn btn-primary"><span class="glyphicon glyphicon-plus"></span></a>
        <ul>
            <li *ngFor="#movie of movies" class="pointer" (click)="onSelect(movie)">{{movie.Title}}</li>
        </ul>
    `,
    directives: [RouterLink]
})
export class MovieList implements OnInit {
    public movies: Movie[];

    constructor(private svc: MovieService, private router: Router) { }

    ngOnInit() {
        this.svc.getMovies().subscribe(m => this.movies = m);
    }

    onSelect(movie: Movie) {
        this.router.navigate(['MovieDetail', { id: movie.ID }]);
    }
}