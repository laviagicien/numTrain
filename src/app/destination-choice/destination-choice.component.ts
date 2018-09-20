import { Component, OnInit } from '@angular/core';
import { Destination } from './destination.model';
import { Train } from './train.model';

@Component({
  selector: 'app-destination-choice',
  templateUrl: './destination-choice.component.html',
  styleUrls: ['./destination-choice.component.css']
})

export class DestinationChoiceComponent implements OnInit {
  trainDep :Train = new Train();
  destList :Array<Destination> = [
    new Destination('Rambouillet', '4'),
    new Destination('Plaisir-Grignon', '5'),
    new Destination('Mantes-la-Jolie', '6'),
    new Destination('Dreux', '8')];
  hourTmp :String ="";
  visible :String = "hidden"

  constructor() { }

  ngOnInit() {
  }
  
  setActiveState(i){
    document.getElementById("option1").classList.remove("active");
    document.getElementById("option2").classList.remove("active");
    document.getElementById("option3").classList.remove("active");
    document.getElementById("option4").classList.remove("active");
    let id = 'option'+ (i+1)
    let element = <HTMLElement>document.getElementById(id);
    console.log (element.classList)
    element.classList.add("active");
  }

  changeVisible(){
    this.visible = "visible";
  }

  getVisible(){
    return this.visible;
  }

  
  setDestination(dest:String, terminus:String){
    this.trainDep.setDestination(dest);
    this.trainDep.setCodeTerminus(terminus);
  }

  setHourOfDep(){
    let time = this.hourTmp.split(":", 2);
    this.trainDep.setHour(Number(time[0]), Number(time[1]));
  }

  setNumTrain(){
    let periode = this.trainDep.hour.hours < 12 ? "4" : "5";
    let codeHour ;

    if(periode == "4"){
      if (this.trainDep.hour.minutes < 15){
        codeHour = this.trainDep.hour.hours * 8 + 1;
      }
      else if(this.trainDep.hour.minutes > 15 && this.trainDep.hour.minutes < 30){
        codeHour = this.trainDep.hour.hours * 8 + 3;
      }
      else if(this.trainDep.hour.minutes > 30 && this.trainDep.hour.minutes < 45){
        codeHour = this.trainDep.hour.hours * 8 + 5;
      }
      else if(this.trainDep.hour.minutes > 45){
        codeHour = this.trainDep.hour.hours * 8 + 7;
      }
    }
    else if (periode == "5"){
      if (this.trainDep.hour.minutes < 15){
        codeHour = (this.trainDep.hour.hours - 12) * 8 + 1;
      }
      else if(this.trainDep.hour.minutes > 15 && this.trainDep.hour.minutes < 30){
        codeHour = (this.trainDep.hour.hours - 12) *8 + 3;
      }
      else if(this.trainDep.hour.minutes > 30 && this.trainDep.hour.minutes < 45){
        codeHour = (this.trainDep.hour.hours - 12) * 8 + 5;
      }
      else if(this.trainDep.hour.minutes > 45){
        codeHour = (this.trainDep.hour.hours - 12) * 8  + 7;
      }
    }
    if(codeHour.toString().length == 1){
      codeHour = "0" + codeHour;
    }

    this.trainDep.numTrain = "16" + periode + this.trainDep.codeTerminus + codeHour;
  }

  getNumTrain(){
    return this.trainDep.numTrain;
  }
}
