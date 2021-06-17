import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/models/fruta';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  public frutas!: Fruta[];

  constructor() {
    this.frutas = [
      new Fruta("Apples", "https://www.osfhealthcare.org/blog/wp-content/uploads/2019/08/apples-OG.jpg"),
      new Fruta("Strawberries", "https://www.besthealthmag.ca/wp-content/uploads/2020/08/mushy-strawberries.jpg"),
      new Fruta("Watermelon", "https://d.newsweek.com/en/full/1812007/watermelon-slices.jpg"),
      new Fruta("Cherries", "https://extension.usu.edu/preserve-the-harvest/images/cherries.jpg")
    ]
  }
  ngOnInit(): void {
    console.log(this.frutas);
  }

}
