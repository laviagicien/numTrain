import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-destination-choice',
  templateUrl: './destination-choice.component.html',
  styleUrls: ['./destination-choice.component.css']
})
export class DestinationChoiceComponent implements OnInit {
  destination: String = "";
  destList: String[] = ['Rambouillet','Plaisir','Mantes-la-Jolie','Dreux'];
  hourOfDep: Time ;
  constructor() { }

  ngOnInit() {
  }
  
  setDestination(dest:String){
    this.destination = dest;
  }
  
  getDestination(){
    return this.destination;
  }

  getHourOfDep(){
    return this.hourOfDep;
  }
}
