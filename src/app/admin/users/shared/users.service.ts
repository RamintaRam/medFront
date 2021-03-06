import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/Rx';
import {AuthService} from '../../auth.service';
import {User} from './user';


@Injectable()
export class UsersService {
    constructor(private http: Http, private authService: AuthService) {

    }

    getUsers(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medcare/api/users?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().users;
                }
            );
    }


    getUser(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medcare/api/users/' + id + '?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().user;
                }
            );
    }

    createUser(user) {
        const token = this.authService.getToken();
        return this.http.post('http://medcare/api/users?token=' + token,
            user,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
                (response: Response) => response.json()
            );
    }

    updateUser(user) {
        const token = this.authService.getToken();
        return this.http.put('http://medcare/api/users/' + user.id + '?token=' + token,
            user, {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}).map(
            (response: Response) => response.json()
        );
    }


    deleteUser(id: any) {
        const token = this.authService.getToken();
        return this.http.delete('http://medcare/api/users/' + id + '?token=' + token);
    }
}

