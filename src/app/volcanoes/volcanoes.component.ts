import {Component, OnInit} from '@angular/core';
import {Volcano} from '../volcano';
import {VOLCANOES} from '../mock-volcanoes';

@Component({
  selector: 'app-volcanoes',
  templateUrl: './volcanoes.component.html',
  styleUrls: ['./volcanoes.component.css']
})
export class VolcanoesComponent implements OnInit {
  volcanoes = VOLCANOES;
  volcano: Volcano = {
    id: 1,
    name: 'Arenal'
  };

  constructor() {
  }


  ngOnInit() {
  }

}
