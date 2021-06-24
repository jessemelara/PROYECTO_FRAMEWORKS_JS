import { Injectable } from "@angular/core";
import { Fruta } from "../models/fruta";

@Injectable({
    providedIn: 'root'
})
export class FrutaService{
    public frutas!: Fruta[];

    constructor(){
        this.frutas = [
            new Fruta("Apples", "https://www.osfhealthcare.org/blog/wp-content/uploads/2019/08/apples-OG.jpg"),
            new Fruta("Strawberries", "https://www.besthealthmag.ca/wp-content/uploads/2020/08/mushy-strawberries.jpg"),
            new Fruta("Watermelon", "https://d.newsweek.com/en/full/1812007/watermelon-slices.jpg"),
            new Fruta("Cherries", "https://extension.usu.edu/preserve-the-harvest/images/cherries.jpg")
        ];
    }
    
    getFrutas() {
        return this.frutas;
    }
}