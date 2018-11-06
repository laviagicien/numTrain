import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-time-choice',
  templateUrl: './time-choice.component.html',
  styleUrls: ['./time-choice.component.css']
})
export class TimeChoiceComponent implements OnInit {
  hourTmp :String ="";
  @Output() hourOfDep = new EventEmitter<Time>();

  constructor() { }

  ngOnInit() {
  }

  setHourOfDep(){
    let time = this.hourTmp.split(":", 2);
    let depTime :Time= {
      hours : parseInt(time[0]),
      minutes : parseInt(time[1])
    };
    this.hourOfDep.emit(depTime);
  }

}
