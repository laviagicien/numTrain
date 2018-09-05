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
  hourOfDepTmp : String ="";
  hourOfDep: Time = {
    hours: 0,
    minutes: 0,
  } ;
  constructor() { }

  ngOnInit() {
  }
  
  setDestination(dest:String){
    this.destination = dest;
  }
  
  getDestination(){
    return this.destination;
  }

  setHourOfDep(){
    let time = this.hourOfDepTmp.split(":", 2);
    console.log(time);
    this.hourOfDep.hours = Number(time[0]);
    this.hourOfDep.minutes = Number(time[1]);
  }

  getHourOfDep(){
    return this.hourOfDep.hours + ":" +this.hourOfDep.minutes;
  }
}
