import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']

})
export class SigninComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        if (this.authService.getToken()) {
            this.router.navigate(['admin/dashboard']);
        }
    }

    onSignin(form: NgForm) {
        this.authService.signin(form.value.email, form.value.password).subscribe(
            response => this.router.navigate(['admin/dashboard']),
            error => console.log(error)
        );

    }

}