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
  selectedVolcano: Volcano;

  constructor() {
  }


  ngOnInit() {
  }

  onSelect(volcano: Volcano): void {
    this.selectedVolcano = volcano;
  }

}
