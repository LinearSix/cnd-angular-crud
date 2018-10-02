import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolcanoEditComponent} from './volcano-edit.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('VolcanoEditComponent', () => {
  let component: VolcanoEditComponent;
  let fixture: ComponentFixture<VolcanoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolcanoEditComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolcanoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
