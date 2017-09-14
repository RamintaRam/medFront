import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';


import {AuthService} from '../auth.service';
import {PostsComponent} from './posts.component';
import {PostsService} from './shared/posts.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],

    declarations: [
        PostsComponent,
        // UserFormComponent,
    ],
    exports: [
        PostsComponent
    ],
    providers: [
        PostsService, AuthService
    ]
})


export class PostsModule {
}