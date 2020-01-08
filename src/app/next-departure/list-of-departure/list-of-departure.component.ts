import { Component, OnInit } from '@angular/core';
import { Train } from '../../train.model';
import Dreux from '../json-data/dreux.json';
import PlGr from '../json-data/plaisir-grignon.json';
import Mlj from '../json-data/mantes-la-jolie.json';
import Rbt from '../json-data/rambouillet.json';

@Component({
  selector: 'app-list-of-departure',
  templateUrl: './list-of-departure.component.html',
  styleUrls: ['./list-of-departure.component.css']
})
export class ListOfDepartureComponent implements OnInit {
  now: Date = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  UTCDate = this.now.getUTCDate();
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
    console.log('Date Actuel : ' + this.now);
    this.nextMinutesDepNew();
  }

  nextMinutesDepNew () {
    this.listOfNext.forEach(element => {
      if (element.codeTerminus === '8') {
        const closestDep = this.getClosestDep(this.getApprArray(Dreux));
        const h = closestDep.getHours();
        const m = closestDep.getMinutes();
        element.setHour(h, m);
        element.setNumTrain();
      } else if (element.codeTerminus ==='5') {
        const closestDep = this.getClosestDep(this.getApprArray(PlGr));
        const h = closestDep.getHours();
        const m = closestDep.getMinutes();
        element.setHour(h, m);
        element.setNumTrain();
      } else if (element.codeTerminus === '6') {
        const closestDep = this.getClosestDep(this.getApprArray(Mlj));
        const h = closestDep.getHours();
        const m = closestDep.getMinutes();
        element.setHour(h, m);
        element.setNumTrain();
      } else if (element.codeTerminus === '4') {
        const closestDep = this.getClosestDep(this.getApprArray(Rbt));
        const h = closestDep.getHours();
        const m = closestDep.getMinutes();
        element.setHour(h, m);
        element.setNumTrain();
      }
    });
  }

  getClosestDep (schDep: String[]): Date {
    let possList: Date[] = [];
    schDep.forEach(element => {
      const tmp = element.split(':');
      const h = parseInt(tmp[0], 10);
      const m = parseInt(tmp[1], 10);
      possList.push(new Date(this.year, this.month, this.UTCDate, h, m));
    });
    possList = possList.filter(element => element > this.now);
    possList = possList.sort();
    return possList[0];
  }
  
  getApprArray (jsonArray: {monFrService: String[],
                            satService: String[],
                            sunService: String[]}): String[] {
    const nDay = this.now.getDay();
    let result: String[] = [];

    if (nDay === 6) {
      result = jsonArray.satService;
    } else if (nDay === 0) {
      result = jsonArray.sunService;
    } else {
      result = jsonArray.monFrService;
    }

    return result;
  }

}
