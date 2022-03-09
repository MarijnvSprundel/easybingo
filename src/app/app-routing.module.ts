import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BallsComponent} from "./balls/balls.component";
import {CardComponent} from "./card/card.component";

const routes: Routes = [
  {path: '', component: CardComponent},
  {path: 'master', component: BallsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
