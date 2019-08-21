import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    for (let i: number = 1; i<5; i++){
      (<HTMLInputElement>document.getElementById("option" + i.toString())).checked = false
      document.getElementById("option" + i.toString()).parentElement.classList.remove("active");
    }
    (<HTMLInputElement>document.getElementById('hourOfDep')).value = "";
    // document.getElementById("h2Train").style.visibility = "hidden";
    this.changeVisible.emit("hidden");
    this.trainService.train.reset();

  }

  setNumTrain(){

    if (this.trainService.train.hour === {hours: null, minutes: null} || this.trainService.train.destination===""){
      return this.sthgMissing.emit(true);
    }

    this.trainService.train.setNumTrain();

    this.trainService.train.getNumTrain();

    this.changeVisible.emit("visible");
    this.sthgMissing.emit(false);
    
  }

}
