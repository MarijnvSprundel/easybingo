import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  numbers: any[] = [];
  constructor() {

  }

  changeColor(event: any): void{
    let target: any = event.target;
    if(target.style.backgroundColor != "rgb(171, 255, 159)"){
      target.style.backgroundColor = "rgb(171, 255, 159)";
    }
    else{
      target.style.backgroundColor = "azure";
    }
  }

  generateNumbers(): any[]{
    let nums: any[] = [];
    for (let i = 0; i < 25; i++){
      if(i == 12){
        nums.push("X");
        continue;
      }
      let num: any;
      do {
        num = Math.ceil(Math.random() * 15) + Math.floor(i / 5) * 15;
      }
      while(nums.find(element => element == num) != undefined);
      nums.push(num);
    }
    return nums;
  }

  regenerateCard(): void{
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.numbers = this.generateNumbers();
  }

}
