import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mailMe:String = "mailto:likhithraj10@gmail.com";
  github:String="https://www.github.com/luciferRK";    
  twitter:String="https://www.twitter.com/lucifer_rk";  
  insta:String="https://www.instagram.com/lucifer_rk_";
  linkedin:String="https://www.linkedin.com/in/likhith-rk";
  constructor() { }

  ngOnInit(): void {
  }

}
