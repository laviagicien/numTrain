import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Destination } from './destination.model';
import { Train } from '../train.model';

@Component({
  selector: 'app-destination-choice',
  templateUrl: './destination-choice.component.html',
  styleUrls: ['./destination-choice.component.css']
})

export class DestinationChoiceComponent implements OnInit {
  destList :Array<Destination> = [
    new Destination('Rambouillet', '4'),
    new Destination('Plaisir-Grignon', '5'),
    new Destination('Mantes-la-Jolie', '6'),
    new Destination('Dreux', '8')];

  @Output() terminus = new EventEmitter<{term :String, code :String}>();

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
    element.classList.add("active");
  }

  setDestination(dest:String, codeNb:String){
    this.terminus.emit({term : dest, code : codeNb})
  }

  

}