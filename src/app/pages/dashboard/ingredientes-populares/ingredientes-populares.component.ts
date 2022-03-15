import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/models/ingrediente.model';
import { PlatillosService } from 'src/app/services/platillos.service';

@Component({
  selector: 'app-ingredientes-populares',
  templateUrl: './ingredientes-populares.component.html',
  styles: [
  ]
})
export class IngredientesPopularesComponent implements OnInit {

  ingredientes: Ingrediente[] = [];

  constructor(
    private _platillosService: PlatillosService
  ) { }

  ngOnInit(): void {
    this._platillosService.getIngredientes().subscribe((response: Ingrediente[]) => {
      this.ingredientes = response;
    });
  }

}
