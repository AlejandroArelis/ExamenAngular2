import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Platillo } from 'src/app/models/platillo.mode';
import { PlatillosService } from 'src/app/services/platillos.service';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styles: [
  ]
})
export class PlatilloComponent implements OnInit {

  platillo: Platillo = {};

  constructor(
    private _route: ActivatedRoute,
    private _platillosService: PlatillosService
  ) {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this._platillosService.getById(params['id']).subscribe((response:Platillo) => {
        this.platillo = response;
        console.log(this.platillo);
      });
    });
  }

  ngOnInit(): void {
  }

}
