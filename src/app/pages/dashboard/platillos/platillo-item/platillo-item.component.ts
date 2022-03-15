import { Component, Input, OnInit } from '@angular/core';
import { Platillo } from 'src/app/models/platillo.mode';

@Component({
  selector: 'platillo-item',
  templateUrl: './platillo-item.component.html',
  styles: [
  ]
})
export class PlatilloItemComponent implements OnInit {

  @Input() platillo: Platillo = {};

  constructor() { }

  ngOnInit(): void {
  }

}
