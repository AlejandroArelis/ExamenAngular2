import { Component, Input, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/models/ingrediente.model';

@Component({
  selector: 'ingrediente',
  templateUrl: './ingrediente.component.html',
  styles: [
  ]
})
export class IngredienteComponent implements OnInit {

  @Input() ingrediente:Ingrediente = {};

  constructor() { }

  ngOnInit(): void {
  }

}
