import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';


const APP_ROUTES: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'not-found', component: NotFoundComponent},
    // {path: 'admin/login', component: SigninComponent},
    // {path: 'admin', component: DashboardComponent, canActivate: [AuthGuardService]},
    // {path: 'admin/users', component: AllUsersComponent, canActivate: [AuthGuardService]},
    // {path: 'admin/add-user', component: AddUserComponent, canActivate: [AuthGuardService]},
    // {path: 'admin/edit-user', component: EditUserComponent, canActivate: [AuthGuardService]},
    // {path: 'admin/posts', component: AllPostsComponent, canActivate: [AuthGuardService]},
    // {path: 'admin/logout', component: SignoutComponent, canActivate: [AuthGuardService]},
    // {path: 'admin/add-post', component: AddPostComponent, canActivate: [AuthGuardService]},
    // {path: 'admin/edit-post', component: EditPostComponent, canActivate: [AuthGuardService]},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);