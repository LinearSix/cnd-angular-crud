import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolcanoesComponent } from './volcanoes.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('VolcanoesComponent', () => {
  let component: VolcanoesComponent;
  let fixture: ComponentFixture<VolcanoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolcanoesComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolcanoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
