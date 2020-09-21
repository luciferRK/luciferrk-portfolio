import { ContactComponent } from './contact/contact.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"resume",component:ResumeComponent
  },
  {
    path:"hobbies",component:HobbiesComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:'**', redirectTo:'/home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
