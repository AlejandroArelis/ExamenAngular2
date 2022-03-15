import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Platillo } from 'src/app/models/platillo.mode';

@Component({
  selector: 'platillo',
  templateUrl: './platillo.component.html',
  styles: [
  ]
})
export class PlatilloComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PlatilloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Platillo,
  ) {

  }

  ngOnInit(): void {
  }

}
