import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddlearnerComponent } from './addlearner/addlearner.component';
import { DeletelearnerComponent } from './deletelearner/deletelearner.component';
import { UpdatelearnerComponent } from './updatelearner/updatelearner.component';
import { LearnerlistComponent } from './learnerlist/learnerlist.component';
import { LeanrerbyidComponent } from './leanrerbyid/leanrerbyid.component';


const routes: Routes = [
  {path:"addLearner",component:AddlearnerComponent},
  {path:"deleteLearner",component:DeletelearnerComponent},
  {path:"updateLearner",component:UpdatelearnerComponent},
  {path:"learnerList",component:LearnerlistComponent},
  {path:"leanrerById",component:LeanrerbyidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
