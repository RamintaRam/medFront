import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {RolesComponent} from './roles.component';
import {AuthService} from '../auth.service';
import {RolesService} from './shared/roles.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],

    declarations: [
        RolesComponent,
    ],
    exports: [
        RolesComponent
    ],
    providers: [
       RolesService, AuthService
    ]
})


export class RolesModule {
}