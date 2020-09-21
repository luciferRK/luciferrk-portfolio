import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import $ from '../../assets/js/jquery.min.js';

@Component({
  selector: 'app-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.css']
})
export class OptionsMenuComponent implements OnInit {

  constructor(private router:Router){
  }

  closeMenu(event:any):void{
    let d=document.getElementById('close_menu') as HTMLElement;
    d.click();
  }

  goResume(){
    this.router.navigate(['/resume']);
  }

  ngOnInit(): void {}

}
