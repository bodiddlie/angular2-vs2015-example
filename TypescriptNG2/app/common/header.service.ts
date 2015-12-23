import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class HeaderService {

    constructor(private http: Http) { }

    getUserName() {
        return this.http.get('/api/user/name').map(res => res.json());
    }
}