import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/models/fruta';
import { FrutaService } from 'src/app/services/fruta.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css'],
  providers: [FrutaService]
})
export class Pagina2Component implements OnInit {
  pg2Text = "Sección de Frutas";
  public frutas!: Fruta[];
  public favorite!: Fruta;

  constructor( 
    private frutaService: FrutaService
  ) {
    this.frutas = this.frutaService.getFrutas();
  }
  ngOnInit(): void {
    console.log(this.frutas);
  }

  showFavorite(event:any){
    this.favorite = event.fruta;
  }
}
