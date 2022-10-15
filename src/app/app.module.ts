import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewalltrainComponent } from './viewalltrain/viewalltrain.component';
import { HttpClientModule } from  '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:ViewalltrainComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewalltrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
