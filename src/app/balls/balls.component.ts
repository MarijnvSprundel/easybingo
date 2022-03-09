import { Component, OnInit} from '@angular/core';
import {trigger, transition, style, animate} from "@angular/animations";

@Component({
  selector: 'app-balls',
  templateUrl: './balls.component.html',
  styleUrls: ['./balls.component.css'],
  animations: [
    trigger('comeIn', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('500ms', style({
          opacity: 1,
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1,
        }),
        animate('500ms', style({
          opacity: 0,
        }))
      ])
    ])
  ]
})
export class BallsComponent implements OnInit {
  test: boolean = true;
  balls: any[] = [];
  slots: number[] = Array.from({length: 75}, (v, k) => k+1);
  constructor() { }
  generateBall(): void{
    if(this.balls.length >= 75){
      return;
    }
    let ball: any;
    do{
      ball = Math.ceil(Math.random() * 75);
    }
    while (this.balls.find(element => element == ball) != undefined);
    this.balls.push(ball);
  }
  findBall(slot: number): string{
    if(this.balls.find(element => element == slot) != undefined){
      return 'rgb(171, 255, 159)';
    }
    else{
      return '';
    }
  }
  clearBalls(): void{
    this.balls = [];
  }
  ngOnInit(): void {
  }

}
