import {Injectable} from '@angular/core';
import {AuthService} from '../../auth.service';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers} from '@angular/http';


@Injectable()
export class RolesService {
    constructor(private http: Http, private authService: AuthService) {

    }

    getRoles(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medcare/api/roles?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().roles;
                }
            );
    }


    getRole(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medcare/api/roles/' + id + '?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().role;
                }
            );
    }

    createRole(role) {
        const token = this.authService.getToken();
        return this.http.post('http://medcare/api/roles?token=' + token,
            role,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
                (response: Response) => response.json()
            );
    }


    updateRole(role) {
        const token = this.authService.getToken();
        return this.http.put('http://medcare/api/roles/' + role.id + '?token=' + token,
            role, {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}).map(
            (response: Response) => response.json()
        );
    }


    deleteRole(id: any) {
        const token = this.authService.getToken();
        return this.http.delete('http://medcare/api/roles/' + id + '?token=' + token);
    }

}