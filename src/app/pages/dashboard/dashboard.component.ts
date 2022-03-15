import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/models/page.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  pages: Page[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pages = [
      { name: "Bienvenidos", path: ["bienvenida"], icon: "home" },
      { name: "Ingredientes populares", path: ["ingredientes-populares"], icon: "hotel_class" },
      { name: "Platillos", path: ["platillos"], icon: "menu_book" }
    ]
  }

}
