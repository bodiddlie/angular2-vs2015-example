import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {HeaderService} from './header.service';

@Component({
    selector: 'cog-header',
    templateUrl: 'app/common/header.component.html',
    providers: [HeaderService],
    directives: [RouterLink]
})
export class Header {
    username = 'Kris Kringle';

    constructor(private svc: HeaderService) { }

    ngOnInit() {
        this.svc.getUserName()
            .subscribe(name => this.username = name);
    }
}