import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AdminModule} from './admin/admin.module';
import {adminRouting} from './admin/admin.routing';
import {usersRouting} from './admin/users/users.routing';
import {UsersModule} from './admin/users/users.module';
import {PostsModule} from './admin/posts/posts.module';
import {SharedComponent} from './posts/shared/shared.component';
import {postsRouting} from './admin/posts/posts.routing';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        SharedComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ReactiveFormsModule,
        AdminModule,
        adminRouting,
        UsersModule,
        usersRouting,
        PostsModule,
        postsRouting


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
