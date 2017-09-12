import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AllUsersComponent} from './admin/users/all-users/all-users.component';
import {UserComponent} from './admin/users/user/user.component';
import {UserService} from './user.services';
import { SigninComponent } from './admin/auth/signin/signin.component';
import { SignoutComponent } from './admin/auth/signout/signout.component';
import { AllPostsComponent } from './admin/posts/all-posts/all-posts.component';
import {PostComponent} from './admin/posts/post/post.component';
import {PostService} from './post.services';
import {AuthService} from './auth.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {AuthGuardService} from './auth.guard.service';

@NgModule({
    declarations: [
        AppComponent,
        AllUsersComponent,
        UserComponent,
        SigninComponent,
        SignoutComponent,
        AllPostsComponent,
        PostComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [UserService, PostService, AuthService, AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
