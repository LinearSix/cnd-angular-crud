import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Volcano} from '../volcano';
import {VolcanoService} from '../volcano.service';

@Component({
  selector: 'app-volcano-edit',
  templateUrl: './volcano-edit.component.html',
  styleUrls: ['./volcano-edit.component.css']
})
export class VolcanoEditComponent implements OnInit {
  @Input() volcano: Volcano;

  constructor(
    private route: ActivatedRoute,
    private volcanoService: VolcanoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getVolcano();
  }

  getVolcano(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.volcanoService.getVolcano(id)
      .subscribe(volcano => this.volcano = volcano);
  }

  goBack(): void {
    this.location.back();
  }

}
