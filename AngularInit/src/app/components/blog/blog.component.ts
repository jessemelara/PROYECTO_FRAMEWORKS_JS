import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {
  blogText = "Blog";
  public articles!: Article[];
  public url!:string;

  constructor(
    private articleService: ArticleService
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(
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
