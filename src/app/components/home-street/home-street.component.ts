import { Component, OnInit } from '@angular/core';
import {HomeStreetService} from "./home-street.service";

@Component({
  selector: 'app-home-street',
  templateUrl: './home-street.component.html'
})

export class HomeStreetComponent implements OnInit {

  constructor(private service: HomeStreetService) { }

  round;
  rounds = [
    {name: 'Recorrido 1'},
    {name: 'Recorrido 2'},
    {name: 'Recorrido 3'},
    {name: 'Recorrido 4'},
    {name: 'Recorrido 5'},
    {name: 'Recorrido 6'},
    {name: 'Recorrido 7'},
    {name: 'Recorrido 8'},
    {name: 'Recorrido 9'},
    {name: 'Recorrido 10'},
    {name: 'Recorrido 11'},
    {name: 'Recorrido 12'},
    {name: 'Recorrido 13'},
    {name: 'Recorrido 14'},
    {name: 'Recorrido 15'},
    {name: 'Recorrido 16'},
    {name: 'Recorrido 17'},
    {name: 'Recorrido 18'},
    {name: 'Recorrido 19'},
    {name: 'Recorrido 20'},
  ];

  nameClothesMan = [
    'Pantalón','Remera','Camisa','Sweater','Campera','Medias','Guantes',
    'Gorros','Calzoncillos','Canzoncillos largos','Bufanda','Zapatillas','Zapatos'
  ];

  nameClothesWoman = [
    'Pantalón','Calza','Remera','Camisa','Sweater','Campera','Medias','Guantes',
    'Gorros','Bombachas','Corpiño','Bufanda','Zapatillas','Zapatos'
  ];

  gender = [
    'Mujer', 'Hombre', 'Niña', 'Niño'
  ];

  request: Request;


  ngOnInit() {
    //this.getRounds()
  }

  getRounds(){
    this.service.getRounds().subscribe(res => {
      this.rounds = res.json();
      console.log(this.rounds);
    });
  }



}
