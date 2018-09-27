import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolcanoEditComponent } from './volcano-edit.component';

describe('VolcanoEditComponent', () => {
  let component: VolcanoEditComponent;
  let fixture: ComponentFixture<VolcanoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolcanoEditComponent ]
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
