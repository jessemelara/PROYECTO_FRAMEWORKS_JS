import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  public article!: Article;

  constructor() {
    this.article = new Article('', '', '', '', null);
  }

  ngOnInit(): void {
  }

  createArticle(){
    console.log(this.article);
  }

}
