import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-street',
  templateUrl: './home-street.component.html'
})

export class HomeStreetComponent implements OnInit {

  round;
  rounds = [];
  constructor() { }

  states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];


  ngOnInit() {
    this.getRounds()
  }

  getRounds(){

  }



}
