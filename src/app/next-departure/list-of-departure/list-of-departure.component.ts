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
    new Train('Dreux', '8'),
    new Train('Plaisir-Grignon', '5'),
    new Train('Mantes-la-Jolie', '6'),
    new Train('Rambouillet', '4')
  ];
  constructor() { }

  ngOnInit() {
    this.nextMinutesDep();
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
            } else if (this.minutes >= 43 && this.minutes < 58) {
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
            } else if (this.minutes >= 28 && this.minutes < 58) {
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
      } else if (element.codeTerminus === '5') {
        if (this.hours <= 6 || this.hours === 23) {
          if (this.minutes < 5) {
            element.setHour(this.hours, 5);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            if (this.hours === 23) {
              element.setHour(0, 5);
              const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            } else if (this.hours < 6) {
              element.setHour(6, 5);
              const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            } else {
              element.setHour(this.hours + 1, 9);
              const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
              this.listOfNext.splice(index, 1, element);
            }
          }
          return;
        }

        if (this.hours === 7) {
          if (this.minutes < 9) {
            element.setHour(7, 9);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(8, 9);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 8) {
          if (this.minutes < 9) {
            element.setHour(8, 9);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(9, 20);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours >= 9 && this.hours < 15) {
          if (this.minutes < 20) {
            element.setHour(this.hours, 20);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1 , 20);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 15) {
          if (this.minutes < 20) {
            element.setHour(this.hours, 20);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1 , 24);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours >= 16 && this.hours < 19) {
          if (this.minutes < 24) {
            element.setHour(this.hours, 24);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 24 && this.minutes < 54) {
            element.setHour(this.hours, 54);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 24);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 19) {
          if (this.minutes < 24) {
            element.setHour(this.hours, 24);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 24 && this.minutes < 54) {
            element.setHour(this.hours, 54);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 20);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours >= 20 && this.hours < 22) {
          if (this.minutes < 20) {
            element.setHour(this.hours, 20);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1 , 20);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 22) {
          if (this.minutes < 20) {
            element.setHour(this.hours, 20);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(23 , 5);
            const index = this.listOfNext.findIndex( item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }
      } else if (element.codeTerminus === '6') {
        if (this.hours < 5 || this.hours >= 22) {
          element.setHour(5 , 35);
          const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
          this.listOfNext.splice(index, 1, element);
          return;
        }

        if (this.hours === 5) {
          if (this.minutes < 35) {
            element.setHour(5 , 35);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(6 , 39);
          const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
          this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours >= 6 && this.hours < 8) {
          if (this.minutes < 39) {
            element.setHour(this.hours , 39);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1 , 39);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 8) {
          if (this.minutes < 39) {
            element.setHour(this.hours , 39);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(9 , 50);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours <= 9 && this.hours < 15) {
          if (this.minutes < 50) {
            element.setHour(this.hours , 50);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1 , 50);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 15) {
          if (this.minutes < 50) {
            element.setHour(15 , 50);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(16 , 9);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours <= 16 && this.hours < 19) {
          if (this.minutes < 9) {
            element.setHour(this.hours , 9);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes <= 9 && this.minutes < 39) {
            element.setHour(this.hours , 39);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1 , 9);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 19) {
          if (this.minutes < 9) {
            element.setHour(this.hours , 9);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes <= 9 && this.minutes < 39) {
            element.setHour(this.hours , 39);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1 , 50);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 20) {
          if (this.minutes < 50) {
            element.setHour(this.hours , 50);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(21 , 50);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 21) {
          if (this.minutes < 50) {
            element.setHour(this.hours , 50);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(5 , 35);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }
      } else if (element.codeTerminus === '4') {
        if (this.hours === 0) {
          if (this.minutes < 35) {
            element.setHour(0, 35);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(5, 20);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours > 0 && this.hours < 5) {
            element.setHour(5, 20);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          return;
        }

        if (this.hours === 5) {
          if (this.minutes < 20) {
            element.setHour(5, 20);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(5, 50);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 5) {
          if (this.minutes < 20) {
            element.setHour(5, 20);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(5, 50);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 6) {
          if (this.minutes < 20) {
            element.setHour(6, 20);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(6, 54);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 7) {
          if (this.minutes < 24) {
            element.setHour(this.hours, 24);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 24 && this.minutes < 54) {
            element.setHour(this.hours, 54);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 24);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 8) {
          if (this.minutes < 24) {
            element.setHour(this.hours, 24);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 24 && this.minutes < 54) {
            element.setHour(this.hours, 54);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 35);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 9) {
          if (this.minutes < 35) {
            element.setHour(this.hours, 20);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 5);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours >= 10 && this.hours < 15) {
          if (this.minutes < 5) {
            element.setHour(this.hours, 5);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 5 && this.minutes < 35) {
            element.setHour(this.hours, 35);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 5);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 15) {
          if (this.minutes < 24) {
            element.setHour(this.hours, 24);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 24 && this.minutes < 54) {
            element.setHour(this.hours, 54);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 31);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 16) {
          if (this.minutes < 24) {
            element.setHour(this.hours, 31);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 31 && this.minutes < 46) {
            element.setHour(this.hours, 46);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 1);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours >= 17 && this.hours < 19) {
          if (this.minutes < 1) {
            element.setHour(this.hours, 1);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 1 && this.minutes < 16) {
            element.setHour(this.hours, 16);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 16 && this.minutes < 31) {
            element.setHour(this.hours, 31);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 31 && this.minutes < 46) {
            element.setHour(this.hours, 46);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 1);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 19) {
          if (this.minutes < 1) {
            element.setHour(this.hours, 1);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 1 && this.minutes < 16) {
            element.setHour(this.hours, 16);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 16 && this.minutes < 31) {
            element.setHour(this.hours, 31);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 31 && this.minutes < 46) {
            element.setHour(this.hours, 46);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 5);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours >= 20 && this.hours < 22) {
          if (this.minutes < 5) {
            element.setHour(this.hours, 5);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 5 && this.minutes < 35) {
            element.setHour(this.hours, 35);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 5);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 22) {
          if (this.minutes < 5) {
            element.setHour(this.hours, 5);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else if (this.minutes >= 5 && this.minutes < 35) {
            element.setHour(this.hours, 35);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(this.hours + 1, 35);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

        if (this.hours === 23) {
          if (this.minutes < 35) {
            element.setHour(23, 35);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          } else {
            element.setHour(0, 35);
            const index = this.listOfNext.findIndex(item => item.getDestination() === element.getDestination());
            this.listOfNext.splice(index, 1, element);
          }
          return;
        }

      }
    });
    for (let i = 0; i < this.listOfNext.length; i++) {
      this.listOfNext[i].setNumTrain();
    }
  }

}
