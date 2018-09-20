import {Component, OnInit} from '@angular/core';
import {Volcano} from '../volcano';

@Component({
  selector: 'app-volcanoes',
  templateUrl: './volcanoes.component.html',
  styleUrls: ['./volcanoes.component.css']
})
export class VolcanoesComponent implements OnInit {
  volcano: Volcano = {
    id: 1,
    name: 'Arenal'
  };

  constructor() {
  }


  ngOnInit() {
  }

}
