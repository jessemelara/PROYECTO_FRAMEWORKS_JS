import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Article } from "../models/article";
import { Global } from "./global";

@Injectable({
    providedIn: 'root'
})
export class ArticleService{
    public url!: string;
    public articles:any;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    getArticles(last:any = null):Observable<any>{
        if(last!=null){
            this.articles = 'articles/true';
        }else{
            this.articles = 'articles';
        }

        return this._http.get(this.url+this.articles);
    }

    getArticle(articleId:any):Observable<any>{
        return this._http.get(this.url+'article/'+articleId);
    }

    search(search:string):Observable<any>{
        return this._http.get(this.url+'search/'+search);
    }
}