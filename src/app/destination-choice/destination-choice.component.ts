import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-destination-choice',
  templateUrl: './destination-choice.component.html',
  styleUrls: ['./destination-choice.component.css']
})
export class DestinationChoiceComponent implements OnInit {
  destination: String = "";
  destList: String[] = ['Rambouillet','Plaisir-Grignon','Mantes-la-Jolie','Dreux'];
  hourOfDepTmp : String ="";
  hourOfDep: Time = {
    hours: null,
    minutes: null,
  } ;
  visible :String = "hidden"
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
    this.hourOfDep.hours = Number(time[0]);
    this.hourOfDep.minutes = Number(time[1]);
  }

  getHourOfDep(){
    return this.hourOfDep.hours + ":" +this.hourOfDep.minutes;
  }

  changeVisible(){
    this.visible = "visible";
  }

  getVisible(){
    return this.visible;
  }

  getNumTrain(){
    let periode = this.hourOfDep.hours < 12 ? "4" : "5";
    let terminus ;
    let codeHour ;

    switch (this.destination){
      case "Rambouillet":
        terminus = "4";
      break;
      case "Plaisir-Grignon":
        terminus = "5";
      break;
      case "Mantes-la-Jolie":
        terminus = "6";
      break;
      case "Dreux":
        terminus = "8";
      break;
    }

    if(periode == "4"){
      if (this.hourOfDep.minutes < 15){
        codeHour = this.hourOfDep.hours * 8 + 1;
      }
      else if(this.hourOfDep.minutes > 15 && this.hourOfDep.minutes < 30){
        codeHour = this.hourOfDep.hours * 8 + 3;
      }
      else if(this.hourOfDep.minutes > 30 && this.hourOfDep.minutes < 45){
        codeHour = this.hourOfDep.hours * 8 + 5;
      }
      else if(this.hourOfDep.minutes > 45){
        codeHour = this.hourOfDep.hours * 8 + 7;
      }
    }
    else if (periode == "5"){
      if (this.hourOfDep.minutes < 15){
        codeHour = (this.hourOfDep.hours - 12) * 8 + 1;
      }
      else if(this.hourOfDep.minutes > 15 && this.hourOfDep.minutes < 30){
        codeHour = (this.hourOfDep.hours - 12) *8 + 3;
      }
      else if(this.hourOfDep.minutes > 30 && this.hourOfDep.minutes < 45){
        codeHour = (this.hourOfDep.hours - 12) * 8 + 5;
      }
      else if(this.hourOfDep.minutes > 45){
        codeHour = (this.hourOfDep.hours - 12) * 8  + 7;
      }
    }

    return "16" + periode + terminus + codeHour; 

  }
}
