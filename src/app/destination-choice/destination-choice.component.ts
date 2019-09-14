import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Destination } from './destination.model';
import { TrainService } from '../train.service';

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

  constructor(private trainService :TrainService) { }

  ngOnInit() {
  }
  
  setDestination(dest: String, codeNb:String){
    this.trainService.train.setDestination(dest);
    this.trainService.train.setCodeTerminus(codeNb);
    for(let i: Number = 1; i < 5; i++){
      let id: String = 'option';
      id = id + i.toString();
      if ((<HTMLInputElement>document.getElementById(id)).checked === true){
        document.getElementById(id).parentElement.classList.add('active');
      } else {
        document.getElementById(id).parentElement.classList.remove('active');
      }
    }
  }
}