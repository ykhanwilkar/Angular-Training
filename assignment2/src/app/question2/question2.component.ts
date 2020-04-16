import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '@angular/compiler';

//You are given a Textbox .To put your hobby in the textbox.Suppose you have entered two of your hobbies like Cricket and Tennis print the previous hobby and next hobby on the console.
@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  hobbies =[];
  constructor() { }

  ngOnInit(): void {
  }
  displayOnConsole(values:string) {
    this.hobbies.push(values.split(","));
    this.hobbies.forEach(hobby=> console.log(hobby));
  }

}
