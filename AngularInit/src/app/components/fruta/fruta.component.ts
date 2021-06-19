import { Component, Input, OnInit } from '@angular/core';
import { Fruta } from 'src/app/models/fruta';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {
  @Input() fruta!: Fruta;
  
  constructor() { }

  ngOnInit(): void {
  }

}
