import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {SigninComponent} from './auth/signin/signin.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth.guard.service';
import {UserFormComponent} from './users/user-form/user-form.component';
import {PostFormComponent} from './posts/post-form/post-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RoleFormComponent} from './roles/role-form/role-form.component';
import {RolesComponent} from './roles/roles.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        NavBarComponent,
        SigninComponent,
        NavBarComponent,
        UserFormComponent,
        PostFormComponent,
        DashboardComponent,
        RoleFormComponent
    ],
    exports: [
        NavBarComponent, SigninComponent
    ],
    providers: [
        AuthService, AuthGuardService
    ]
})


export class AdminModule {
}