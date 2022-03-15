import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Platillo } from 'src/app/models/platillo.mode';
import { PlatillosService } from 'src/app/services/platillos.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styles: [
  ]
})
export class PlatillosComponent implements OnInit, OnDestroy {

  @ViewChild("next") nextImage?: ElementRef;

  platillos: Platillo[] = [];
  random: Platillo[] = [];

  $areas?: Observable<any>;
  $categorias?: Observable<any>;
  $ingredientes?: Observable<any>;

  selectedArea = "";
  selectedCategoria = "";
  selectedIngrediente = "";

  platillosSubs: Subscription = new Subscription();

  constructor(
    private _platillosService: PlatillosService,
    private _route: ActivatedRoute
  ) {
    this._route.params.subscribe((params: Params) => {
      let filter;
      if (params['id']) {
        filter = params['id'];
      } else {
        filter = 'Chicken';
      }

      this._platillosService.getByIngrediente(filter).subscribe((response: Platillo[]) => {
        console.log(response);
        this.platillos = response;

        for (let i = 0; i < 6; i++) {
          this.platillosSubs = this._platillosService.getRandom().subscribe((response: Platillo) => {
            this.random.push(response);
          });
        }

        this.platillosSubs.unsubscribe();

        console.log(this.random);
      });
    });
  }

  ngOnDestroy(): void {
    clearInterval();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.nextImage?.nativeElement.click();
    }, 50000);

    this.$areas = this._platillosService.getAreas();
    this.$ingredientes = this._platillosService.getIngredientes();
    this.$categorias = this._platillosService.getCategorias();
  }

  getByArea() {
    this._platillosService.getByArea(this.selectedArea).subscribe((response: Platillo[]) => {
      this.platillos = response;
    });
  }

  getByIngrediente() {
    this._platillosService.getByIngrediente(this.selectedIngrediente).subscribe((response: Platillo[]) => {
      this.platillos = response;
    });
  }

  getByCategoria() {
    this._platillosService.getByCategoria(this.selectedCategoria).subscribe((response: Platillo[]) => {
      this.platillos = response;
    });
  }
}
