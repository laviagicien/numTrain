import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-train',
  templateUrl: './show-train.component.html',
  styleUrls: ['./show-train.component.css']
})
export class ShowTrainComponent implements OnInit {
  @Input() sthgMissing :Boolean;
  @Input() visible :String; 

  constructor() { }

  ngOnInit() {
  }

  getVisible(){
    return this.visible;
  }

  getNumTrain(){
    return '';
  }
}
