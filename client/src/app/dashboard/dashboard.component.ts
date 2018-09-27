import { Component, OnInit } from '@angular/core';
import { Volcano } from '../volcano';
import { VolcanoService } from '../volcano.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  volcanoes: Volcano[] = [];

  constructor(private volcanoService: VolcanoService) { }

  ngOnInit() {
    this.getVolcanoes();
  }

  getVolcanoes(): void {
    this.volcanoService.getVolcanoes()
      .subscribe(volcanoes => this.volcanoes = volcanoes.slice(1, 5));
  }
}
