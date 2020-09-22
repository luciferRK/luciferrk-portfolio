import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    constructor(private router:Router){
      let path = localStorage.getItem('path');
      if(path) {
        localStorage.removeItem('path');
        this.router.navigate([path]);
      }
    }
}
