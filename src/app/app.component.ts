import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Easy Bingo';
  currentScreen: string = 'card';
  isMaster: boolean = false;
  changeScreen(screen: string): void{
    this.currentScreen = screen;
    if(this.currentScreen == "master"){
      this.isMaster = true;
    }
    console.log(this);
  }

  checkEven(x: any){return x % 2 == 0;}

}
