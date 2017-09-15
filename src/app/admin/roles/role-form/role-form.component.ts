import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role} from '../shared/roles';
import {ActivatedRoute, Router} from '@angular/router';
import {RolesService} from '../shared/roles.service';

@Component({
    selector: 'app-role-form',
    templateUrl: './role-form.component.html',
    styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {
    form: FormGroup;
    title: string;
    role: Role = new Role();


    constructor(formBuilder: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private rolesService: RolesService) {
        this.form = formBuilder.group({
            name: ['', [
                Validators.required,
                Validators.required
            ]]
        });
    }

    ngOnInit() {
        var id = this.activatedRoute.params.subscribe(params => {
            id = params['id'];

            this.title = id ? 'Edit role' : 'New role';

            if (!id)
                return;

            this.rolesService.getRole(id)
                .subscribe(
                    role => this.role = role,
                    response => {
                        if (response.status === 404) {
                            this.router.navigate(['Not found']);
                        }
                    });
        });
    }

    onSave() {
        var result, role = this.form.value;
        if (this.role.id) {
            role.id = this.role.id;
            result = this.rolesService.updateRole(Role);
        } else {
            result = this.rolesService.createRole(role);
        }

        result.subscribe(
            role => this.router.navigate(['admin/roles']),
            error => console.log(error)
        );
    }

}
