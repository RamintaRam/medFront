import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Role} from '../shared/roles';

@Component({
    selector: 'app-role-form',
    templateUrl: './role-form.component.html',
    styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {
    form: FormGroup;
    title: string;
    role: Role = new Role();


    constructor() {
    }

    ngOnInit() {
    }

}
