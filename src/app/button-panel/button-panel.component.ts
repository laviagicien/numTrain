import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Train } from '../train.model';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css']
})
export class ButtonPanelComponent implements OnInit {

  @Output() sthgMissing = new EventEmitter<boolean>();
  @Output() changeVisible = new EventEmitter<String>()
  
  constructor(private trainService :TrainService) { }

  ngOnInit() {
  }
  reset(){
    document.getElementById("option1").classList.remove("active");
    document.getElementById("option2").classList.remove("active");
    document.getElementById("option3").classList.remove("active");
    document.getElementById("option4").classList.remove("active");
    (<HTMLInputElement>document.getElementById('hourOfDep')).value = "";
    document.getElementById("h2Train").style.visibility = "hidden";

  }
  setNumTrain(){;
    let periode = this.trainService.train.hour.hours < 12 ? "4" : "5";

    let codeHour ;
    
    if (this.trainService.train.hour === {hours: null, minutes: null} || this.trainService.train.destination===""){
      return this.sthgMissing.emit(true);
    }

    if(periode == "4"){
      codeHour = (this.trainService.train.hour.hours * 4 + Math.floor(this.trainService.train.hour.minutes/15) + 1) * 2 - 1
    }
    
    if(periode == '5'){
      codeHour = ((this.trainService.train.hour.hours - 12) * 4 + Math.floor(this.trainService.train.hour.minutes/15) + 1) * 2 - 1
    }

    if(codeHour.toString().length == 1){
        codeHour = "0" + codeHour;
    }

    this.trainService.train.numTrain = "16" + periode + this.trainService.train.codeTerminus + codeHour;

    this.changeVisible.emit("visible");
    this.sthgMissing.emit(false);
    
  }

}
