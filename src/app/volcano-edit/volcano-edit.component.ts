import {Component, OnInit, Input} from '@angular/core';
import {Volcano} from '../volcano';

@Component({
  selector: 'app-volcano-edit',
  templateUrl: './volcano-edit.component.html',
  styleUrls: ['./volcano-edit.component.css']
})
export class VolcanoEditComponent implements OnInit {
  @Input() volcano: Volcano;

  constructor() {
  }

  ngOnInit() {
  }

}
