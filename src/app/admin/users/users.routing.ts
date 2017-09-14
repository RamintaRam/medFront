import {Router, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../auth.guard.service';
import {UserFormComponent} from './user-form/user-form.component';
import {UsersComponent} from './users.component';

const userRoutes: Routes = [
    {path: 'admin/users', component: UsersComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
    {path: 'admin/users/new', component: UserFormComponent, canActivate: [AuthGuardService]},
    {path: 'admin/users/:id', component: UserFormComponent, canActivate: [AuthGuardService]},
];

export const usersRouting = RouterModule.forChild(userRoutes);