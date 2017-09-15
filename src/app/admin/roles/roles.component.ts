import {Component, OnInit} from '@angular/core';
import {Role} from './shared/roles';
import {RolesService} from './shared/roles.service';
import {Response} from '@angular/http';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

    private roles: Role[] = [];

    constructor(private rolesService: RolesService) {
    }

    ngOnInit() {
        this.rolesService.getRoles().subscribe(
            (roles: Role[]) => this.roles = roles,
            (error: Response) => console.log(error)
        );
    }

}
