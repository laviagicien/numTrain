import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-departure',
  templateUrl: './next-departure.component.html',
  styleUrls: ['./next-departure.component.css']
})
export class NextDepartureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('next-dep').style.display = 'block';

  }

  closeModal () {
    document.getElementById('next-dep').style.display = 'none';
  }

}
