import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

export class Movie {
    constructor(public ID: number, public Title: string) { }
}

@Injectable()
export class MovieService {
    constructor(private http: Http) { }

    getMovies() {
        return this.http.get('/api/movies').map(res => {
            var js: Movie[] = res.json();
            return js;
        });
    }

    getMovie(id: number) {
        return this.http.get('/api/movies/' + id).map(res => {
            var js: Movie = res.json();
            return js;
        });
    }

    saveMovie(movie: Movie) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        if (movie.ID > 0) {
            return this.http.put('/api/movies/' + movie.ID, JSON.stringify(movie), { headers }).map(res => res.json());
        } else {
            return this.http.post('/api/movies', JSON.stringify(movie), { headers }).map(res => res.json());
        }
    }

    deleteMovie(movie: Movie) {
        return this.http.delete('/api/movies/' + movie.ID);
    }
}