import { Component, OnInit } from '@angular/core';

// Create an increment counter with reset button When I click on the Counter Button it should be incremented by 1 and when we click on reset it will print 0.
@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {
  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  increaseBy1():void {
     ++this.count;
  }
  reset():void {
    this.count=0;
  }
}
