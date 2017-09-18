import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private location: Location) {
    }

    isAdminNavbar(): boolean {
        return this.location.path().indexOf('/admin') > -1;
    }
}
