import { Component } from '@angular/core';
import { Train } from './train.model';
import { Time } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  train = new Train
  sthgBroken :boolean = false;
  trainNumber :String;
  visibility :String = 'hidden';
  
  setTrainDestination(trainDest: {term :String, code :String}){
    this.train.setDestination(trainDest.term);
    this.train.setCodeTerminus(trainDest.code);
  }

  setTrainDepartureTime(trainDepTime :Time){
    this.train.setHour(trainDepTime.hours, trainDepTime.minutes);
  }

  sthgWentWrong(foo){
    this.sthgBroken = foo;
  }

  trainDp(bar){
    this.trainNumber = bar;
  }

  chgVisible(vis){
    this.visibility = vis; 

  }
}
