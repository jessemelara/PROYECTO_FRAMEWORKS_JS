import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  homeText = "Bienvenido al Master en Angular JS";
  public title: string;
  public articles!: Article[];
  public url!:string;

  constructor(
    private articleService: ArticleService
  ) { 
    this.title = "Últimos Artículos";
    this.url = Global.url;
  }
  ngOnInit(): void {
    this.articleService.getArticles(true).subscribe(
      response => {
        if(response.articles){
          this.articles = response.articles;
        };
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
