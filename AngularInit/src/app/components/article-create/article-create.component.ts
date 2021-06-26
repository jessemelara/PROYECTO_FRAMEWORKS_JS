import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
  providers: [ArticleService]
})
export class ArticleCreateComponent implements OnInit {
  public article!: Article;
  public status!: string;

  constructor(
    private articleService: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.article = new Article('', '', '', '', null);
  }

  ngOnInit(): void {
  }

  createArticle(){
    console.log(this.article);

    this.articleService.createArticle(this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.article;
          console.log(response);
          this._router.navigate(['/blog']);
        }else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error'
      }
    )
  }

}
