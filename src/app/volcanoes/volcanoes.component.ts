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

  constructor(private volcanoService: VolcanoService) {
  }

  ngOnInit() {
    this.getVolcanoes();
  }

  getVolcanoes(): void {
    this.volcanoService.getVolcanoes()
      .subscribe(volcanoes => this.volcanoes = volcanoes);
  }

}
