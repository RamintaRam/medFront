import { Component, OnInit } from '@angular/core';
import {User} from "../../../user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];  /*lauztiniai skliaustai, kad is masyvo istruakinetu userius*/
  constructor() { }

  ngOnInit() {
  }

}