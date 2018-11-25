import { Component } from '@angular/core';
import { Train } from './train.model';
import { Time } from '@angular/common';
import { TrainService } from './train.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TrainService]
})
export class AppComponent {

  sthgBroken :boolean = false;
  visibility :String = 'hidden';

  constructor(private trainService :TrainService) {}

  sthgWentWrong(broke){
    this.sthgBroken = broke;
  }

  getTrainDp(){
    return this.trainService.train.numTrain
  }

  chgVisible(visible){
    this.visibility = visible; 

  }
}
