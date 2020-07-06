import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddlearnerComponent } from './addlearner/addlearner.component';
import { LearnerlistComponent } from './learnerlist/learnerlist.component';
import { DeletelearnerComponent } from './deletelearner/deletelearner.component';
import { UpdatelearnerComponent } from './updatelearner/updatelearner.component';
import { LeanrerbyidComponent } from './leanrerbyid/leanrerbyid.component';
import { FormStyle } from '@angular/common';
import {LearnerService} from './learner.service',
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AddlearnerComponent,
    LearnerlistComponent,
    DeletelearnerComponent,
    UpdatelearnerComponent,
    LeanrerbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [LearnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
