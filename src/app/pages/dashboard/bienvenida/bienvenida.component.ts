import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlatilloComponent } from 'src/app/components/platillo/platillo.component';
import { Platillo } from 'src/app/models/platillo.mode';
import { PlatillosService } from 'src/app/services/platillos.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styles: [
  ]
})
export class BienvenidaComponent implements OnInit, OnDestroy {

  platillo: Platillo = {};

  constructor(
    private _platillosService: PlatillosService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._platillosService.getRandom().subscribe((response: Platillo) => {
      this.platillo = response;

      this.openDialog();
    });
  }

  ngOnDestroy(): void {
    this.dialog.closeAll();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PlatilloComponent, {
      width: '25%',
      data: this.platillo,
    });
  }
}
