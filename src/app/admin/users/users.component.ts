import {Component, OnInit} from '@angular/core';
import {User} from './shared/user';
import {UsersService} from './shared/users.service';
import {Response} from '@angular/http';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    private users: User[] = [];

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {

        this.usersService.getUsers().subscribe(
            users => this.users = users,
            (error: Response) => console.log(error)
        );
    }


    onDelete(user) {
        if(confirm('Are you sure you want to delete ' + user.first_name + '?')){
            const index = this.users.indexOf(user);
            this.users.splice(index, 1);

            this.usersService.deleteUser(user.id)
                .subscribe(null,
                    error => {
                        alert('Could not delete.');
                        this.users.splice(index, 0, user);
                    });
        }

    }
}

