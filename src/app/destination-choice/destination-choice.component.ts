import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { Destination } from './destination.model';

@Component({
  selector: 'app-destination-choice',
  templateUrl: './destination-choice.component.html',
  styleUrls: ['./destination-choice.component.css']
})
export class DestinationChoiceComponent implements OnInit {
  numTrain: String ="";
  destination: String = "";
  destList: Array<Destination> = [
    new Destination('Rambouillet', '4'),
    new Destination('Plaisir-Grignon', ''),
    new Destination('Mantes-la-Jolie', '6'),
    new Destination('Dreux', '8')];
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

  setNumTrain(){
    let periode = this.hourOfDep.hours < 12 ? "4" : "5";
    let terminus = this.destination ;
    let codeHour ;

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

    this.numTrain = "16" + periode + terminus + codeHour;
  }

  getNumTrain(){
    return this.numTrain;
  }
}
