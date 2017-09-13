import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';


@Injectable()
export class PostService {
    constructor(private http: Http, private authService: AuthService) {

    }

    getPosts(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medcare/api/posts?token=' + token)
            .map((response: Response) => {
                    return response.json().posts;
                }
            );
    }

    createPost(text: string,
               title: string,
          ) {
        const token = this.authService.getToken();
        return this.http.post('http://medcare/api/posts?token=' + token,
            {
                title: title,
                text: text,
            },
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => {
                return true;
            }
        );
    }
}
