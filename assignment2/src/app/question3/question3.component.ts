import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as users from '../users.json';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {
  errorMsg: string = '';
  userarray: any = (users as any).default;
  constructor(public route: Router) { }
  
  ngOnInit(): void {
    //console.log(users);
  }
  login(username,pwd){
    // users.forEach(user=>{
    //   if(user["username"] === username) {
    //     if(user["password"] === pwd) {
    //       this.route.navigate(['/adminDashboard']);
    //     }
    //   }
    // });
    for(var i=0; i<this.userarray.length; i++) {
      if(this.userarray[i].username === username) {
        if(this.userarray[i].password === pwd) {
          this.route.navigate(['/adminDashboard']);
        }
      }
    }
    this.errorMsg = 'User not found';
  }
}
