import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html'
})
export class ClothingComponent implements OnInit {


  round = '';
  clothes : any = ['Remera', 'Camisa', 'Pantalon'];
  rounds : any = [];
  clothesRequest;
  quantity = 0;
  sizes = ['XS', 'S', 'M', 'L'];
  gender;



  constructor() { }

  ngOnInit() {
  }


  addQuantity(){
    this.quantity ++;
  }

  subQuantity(){
    if (this.quantity > 0)
      this.quantity --;
  }

  setGender(gender){
    this.gender = gender;
    console.log(this.gender);
  }
}
