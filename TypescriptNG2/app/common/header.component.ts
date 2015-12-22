import {Component} from 'angular2/core';

@Component({
    selector: 'cog-header',
    templateUrl: 'app/common/header.component.html'
})
export class Header {
    username = 'Kris Kringle';
}