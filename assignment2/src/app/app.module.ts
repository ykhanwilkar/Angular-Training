import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { Question7Component } from './question7/question7.component';
import { Question8Component } from './question8/question8.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const appRoutes: Routes = [
  {path:"question1" , component:Question1Component},
  {path:"question2" , component:Question2Component},
  {path:"question3" , component:Question3Component},
  {path:"question4" , component:Question4Component},
  {path:"question5" , component:Question5Component},
  {path:"question6" , component:Question6Component},
  {path:"question7" , component:Question7Component},
  {path:"question8" , component:Question8Component},
  {path:"adminDashboard" , component:AdminDashboardComponent},
  {path:"register" , component:UserRegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    Question6Component,
    Question7Component,
    Question8Component,
    AdminDashboardComponent,
    UserRegisterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
