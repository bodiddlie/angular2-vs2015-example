import {Component} from 'angular2/core'
import {Header} from './common/header.component';

import './app.scss';

@Component({
    selector: 'my-app',
    template: `
        <cog-header></cog-header>
    `,
    directives: [Header]
})
export class AppComponent { }