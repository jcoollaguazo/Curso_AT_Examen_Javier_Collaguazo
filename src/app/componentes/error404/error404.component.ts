import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  url: string;

  constructor() { }

  ngOnInit(): void {
    this.url = "https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-Animated.png";
  }  
}
