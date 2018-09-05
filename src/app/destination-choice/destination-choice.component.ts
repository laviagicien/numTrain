import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-choice',
  templateUrl: './destination-choice.component.html',
  styleUrls: ['./destination-choice.component.css']
})
export class DestinationChoiceComponent implements OnInit {
  destination:String = "";
  destList:String[] = ['Rambouillet','Plaisir','Mantes-la-Jolie','Dreux'];
 
  constructor() { }

  ngOnInit() {
  }
  
  setDestination(dest:String){
    this.destination = dest;
  }
  
  getDestination(){
    return this.destination;
  }
}
