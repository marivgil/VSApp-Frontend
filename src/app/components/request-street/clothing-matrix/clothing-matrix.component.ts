import {Component, Input, OnInit} from '@angular/core';
import {ClothingComponent} from "../clothing/clothing.component";

@Component({
  selector: 'app-clothing-matrix',
  templateUrl: './clothing-matrix.component.html'
})
export class ClothingMatrixComponent implements OnInit {

  clothes : any = ['Remera', 'Camisa', 'Pantalon'];

  @Input() clothingComponent: ClothingComponent;

  constructor() { }

  ngOnInit() {
  }

}
