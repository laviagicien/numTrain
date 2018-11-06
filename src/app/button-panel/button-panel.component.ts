import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Train } from '../train.model';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css']
})
export class ButtonPanelComponent implements OnInit {
  @Input('tchoutchou') train :Train;
  @Output() sthgMissing = new EventEmitter<boolean>();
  @Output() trainNb = new EventEmitter<String>(); 
  @Output() changeVisible = new EventEmitter<String>()
  constructor() { }

  ngOnInit() {
  }
  reset(){
    document.getElementById("option1").classList.remove("active");
    document.getElementById("option2").classList.remove("active");
    document.getElementById("option3").classList.remove("active");
    document.getElementById("option4").classList.remove("active");
    (<HTMLInputElement>document.getElementById('hourOfDep')).value = "";

  }
  setNumTrain(){;
    let periode = this.train.hour.hours < 12 ? "4" : "5";
    let codeHour ;
    if (this.train.hour === {hours: null, minutes: null} || this.train.destination===""){
      return this.sthgMissing.emit(true);
    }

    if(periode == "4"){
      codeHour = (this.train.hour.hours * 4 + Math.floor(this.train.hour.minutes/15) + 1) * 2 - 1
      console.log(codeHour);
    }
    
    if(periode == '5'){
      codeHour = ((this.train.hour.hours - 12) * 4 + Math.floor(this.train.hour.minutes/15) + 1) * 2 - 1
    }

    if(codeHour.toString().length == 1){
        codeHour = "0" + codeHour;
    }

    this.train.numTrain = "16" + periode + this.train.codeTerminus + codeHour;
    this.trainNb.emit(this.train.numTrain);

    this.changeVisible.emit("visible");
    this.sthgMissing.emit(false);
    
  }

}
