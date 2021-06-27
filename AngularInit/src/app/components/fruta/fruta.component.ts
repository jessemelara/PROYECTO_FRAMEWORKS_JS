import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Fruta } from 'src/app/models/fruta';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {
  @Input() fruta!: Fruta;
  @Output() onFavorite = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toSelect(event:any, fruta:any){
    this.onFavorite.emit({
      fruta: fruta
    })
  }
}
