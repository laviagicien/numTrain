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

  listOfNext: Array<any> = [
    {t: new Train('Dreux', '8'), j: Dreux},
    {t: new Train('Plaisir-Grignon', '5'), j: PlGr},
    {t: new Train('Mantes-la-Jolie', '6'), j: Mlj},
    {t: new Train('Rambouillet', '4'), j: Rbt}
  ];

  constructor() { }

  ngOnInit() {
    this.now.setHours(23, 58);
    console.log('Date Actuel : ' + this.now);
    this.nextMinutesDep();
  }

  nextMinutesDep () {
    this.listOfNext.forEach (element => {
      const closestDep = this.getClosestDep(this.getApprArray(element.j));
      const h = closestDep.getHours();
      const m = closestDep.getMinutes();
      element.t.setHour(h, m);
      element.t.setNumTrain();
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

    if (this.now < possList[(possList.length - 1)]) {
      possList = possList.filter(element => element > this.now);
      possList = possList.sort();
    }
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
