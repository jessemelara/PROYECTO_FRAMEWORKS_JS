import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Article } from "../models/article";

@Injectable({
    providedIn: 'root'
})
export class ArticleService{
    constructor(
        private _http: HttpClient
    ){}
}
