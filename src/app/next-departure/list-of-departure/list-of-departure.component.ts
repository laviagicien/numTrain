import { Component, OnInit } from '@angular/core';
import { Train } from '../../train.model';

@Component({
  selector: 'app-list-of-departure',
  templateUrl: './list-of-departure.component.html',
  styleUrls: ['./list-of-departure.component.css']
})
export class ListOfDepartureComponent implements OnInit {
  now: Date = new Date();
  hours: number = this.now.getHours();
  minutes: number = this.now.getMinutes();
  listOfNext: Array<Train> = [
    new Train('Dreux', '8')
  ];
  time: String;
  constructor() { }

  ngOnInit() {
    this.nextMinutesDep();
    if (this.time.length === 4) {
      this.time = '0' + this.time;
    }
    console.log(this.listOfNext);
    console.log(this.listOfNext[0].getHour());
  }
  
  nextMinutesDep() {
    this.listOfNext.forEach(element => {
      if (element.codeTerminus === '8') {
        if ((this.hours <= 14 && this.hours >= 6) || (this.hours >= 21 && this.hours <= 23)) {
          if (this.minutes < 58) {
            element.setHour(this.hours, 58);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            if (this.hours !== 23) {
              element.setHour(this.hours + 1, 58);
              const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            } else {
              element.setHour(6 , 58);
              const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            }
          }
          return;
        }
        if (this.hours === 15) {
          if (this.minutes < 58) {
            element.setHour(15, 58);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(16, 28);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }
        if (this.hours >= 16 && this.hours <= 20) {
          if (this.hours === 17) {
            if (this.minutes < 28) {
              element.setHour(this.hours, 28);
              const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            } else if (this.minutes >= 28 && this. minutes < 43) {
              element.setHour(this.hours, 43);
              const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            } else if (this.minutes >= 43 && this.minutes <58) {
              element.setHour(this.hours, 58);
              const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            } else if (this.minutes >= 58) {
              element.setHour(18, 28);
              const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            }
          } else {
            if (this.minutes < 28) {
              element.setHour(this.hours, 28);
              const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            } else if (this.minutes >= 28 && this.minutes <58) {
              element.setHour(this.hours, 58);
              const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            } else if (this.minutes >= 58) {
              element.setHour(18, 28);
              const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            }
          }
          return;
        }
        if (this.hours === 0 || (this.hours >= 23 && this.minutes >= 58)) {
          element.setHour(6, 58);
          const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
          this.listOfNext.splice(index, 1, element);
          return;
        }
        return;
      }
    });
    this.time = this.listOfNext[0].getHour();
    this.listOfNext[0].setNumTrain()
  }

}
