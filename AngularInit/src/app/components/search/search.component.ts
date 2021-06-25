import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
  public searchText:string = "Búsqueda";
  public articles!: Article[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let search = params['search'];

      this.articleService.search(search).subscribe(
        response => {
          if(response.articles){
            this.articles = response.articles;
            console.log(this.articles);
          }
        },
        error => {
          console.log(error);
          this.articles = [];
                }
      )
    })
  }

}
