import {Component, OnInit} from '@angular/core';

import {Volcano} from '../volcano';
import {VolcanoService} from '../volcano.service';

@Component({
  selector: 'app-volcanoes',
  templateUrl: './volcanoes.component.html',
  styleUrls: ['./volcanoes.component.css']
})
export class VolcanoesComponent implements OnInit {
  volcanoes: Volcano[];
  selectedVolcano: Volcano;

  constructor(private volcanoService: VolcanoService) {
  }


  ngOnInit() {
    this.getVolcanoes();
  }

  getVolcanoes(): void {
    this.volcanoes = this.volcanoService.getVolcanoes();
  }

  onSelect(volcano: Volcano): void {
    this.selectedVolcano = volcano;
  }

}
