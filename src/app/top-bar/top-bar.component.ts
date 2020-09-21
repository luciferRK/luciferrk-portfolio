import { OptionsMenuComponent } from './../options-menu/options-menu.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  host:{
    "(window:resize)":"onWindowResize($event)"
  }
})
export class TopBarComponent implements OnInit {

  constructor() { 
  }

  
  ngOnInit(): void {
  }

  width:Number=window.innerWidth;
  height:Number=window.innerHeight;
  isMobile:Boolean=false;

  onWindowResize(event){
    this.width=window.innerWidth;
    this.height=window.innerHeight;
    this.isMobile=this.width<this.height;
  }

}
