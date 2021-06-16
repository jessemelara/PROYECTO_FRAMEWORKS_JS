import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  public frutas!: Array<any>;

  constructor() {
    this.frutas = [
      {title: "Apples", image: "https://www.osfhealthcare.org/blog/wp-content/uploads/2019/08/apples-OG.jpg"},
      {title: "Strawberries", image: "https://www.besthealthmag.ca/wp-content/uploads/2020/08/mushy-strawberries.jpg"},
      {title: "Watermelon", image: "https://d.newsweek.com/en/full/1812007/watermelon-slices.jpg"},
      {title: "Cherries", image: "https://extension.usu.edu/preserve-the-harvest/images/cherries.jpg"}
    ]
  }
  ngOnInit(): void {
    console.log(this.frutas);
  }

}
