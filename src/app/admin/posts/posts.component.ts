import {Component, OnInit} from '@angular/core';
import {Post} from './shared/post';
import {PostsService} from './shared/posts.service';
import {Response} from '@angular/http';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    private posts: Post[] = [];

    constructor(private postsService: PostsService) {

    }

    ngOnInit() {
        this.postsService.getPosts().subscribe(
            posts => this.posts = posts,
            (error: Response) => console.log(error)
        );
    }
}