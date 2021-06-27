import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {
  pg1Text = "Sección de párametros en la URL";
  public nombre!: string;
  public apellidos!: string;

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
    
  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;    
    })
  }
  
  redireccion(){
    this._router.navigate(['/pagina1', 'Jesse', 'Melara']);
  }
}
