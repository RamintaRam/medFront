import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts.component';
import {PostFormComponent} from './post-form/post-form.component';
import {AuthGuardService} from '../auth.guard.service';
//
const postsRoutes: Routes = [
    {path: 'admin/posts', component: PostsComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
    {path: 'admin/posts/new', component: PostFormComponent, canActivate: [AuthGuardService]},
    {path: 'admin/posts/:id', component: PostFormComponent, canActivate: [AuthGuardService]},
];


export const postsRouting = RouterModule.forChild(postsRoutes);