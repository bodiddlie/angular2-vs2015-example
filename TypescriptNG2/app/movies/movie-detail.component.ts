import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Movie, MovieService} from './movie.service';

@Component({
    template: `
<form *ngIf="movie" (ngSubmit)="onSubmit()" #movieForm="ngForm">
    <div class="form-group">
        <label>ID</label>
        <p class="form-control-static">{{movie.ID}}</p>
    </div>
    <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" [(ngModel)]="movie.Title" />
    </div>
    <button type="submit" class="btn btn-primary" [disabled]="!movieForm.form.valid">Submit</button>
    <button type="button" class="btn btn-danger" (click)="onDelete()">Delete</button>
</form>
    `
})
export class MovieDetail implements OnInit {
    public movie: Movie;

    constructor(
        private svc: MovieService,
        private router: Router,
        private params: RouteParams
    ) { }

    ngOnInit() {
        let id = +this.params.get('id');
        if (id > 0) {
            this.svc.getMovie(id).subscribe(m => this.movie = m);
        } else {
            this.movie = new Movie(0, '');
        }
    }

    onSubmit() {
        this.svc.saveMovie(this.movie).subscribe(r => {
            this.router.navigate(['Movies']);
        });
    }

    onDelete() {
        this.svc.deleteMovie(this.movie).subscribe(r => {
            this.router.navigate(['Movies']);
        });
    }
}