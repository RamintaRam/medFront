import {Routes, RouterModule} from '@angular/router';
import {AllUsersComponent} from './admin/users/all-users/all-users.component';
import {ModuleWithProviders} from '@angular/core';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {SigninComponent} from './admin/auth/signin/signin.component';
import {SignoutComponent} from './admin/auth/signout/signout.component';
import {AllPostsComponent} from './admin/posts/all-posts/all-posts.component';
import {AuthGuardService} from './auth.guard.service';
import {AddUserComponent} from './admin/users/add-user/add-user.component';


const APP_ROUTES: Routes = [
    {path: 'admin/login', component: SigninComponent},
    {path: 'admin', component: DashboardComponent, canActivate: [AuthGuardService]},
    {path: 'admin/users', component: AllUsersComponent, canActivate: [AuthGuardService]},
    {path: 'admin/add-user', component: AddUserComponent, canActivate: [AuthGuardService]},
    {path: 'admin/posts', component: AllPostsComponent, canActivate: [AuthGuardService]},
    {path: 'admin/logout', component: SignoutComponent, canActivate: [AuthGuardService]}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);