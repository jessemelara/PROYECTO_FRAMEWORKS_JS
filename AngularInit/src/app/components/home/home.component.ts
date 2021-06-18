import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeText = "Bienvenido al Master en Angular JS";
  public title: string;

  constructor() { 
    this.title = "Últimos Artículos";
  }
  ngOnInit(): void {
  }

}
