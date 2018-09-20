import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolcanoesComponent } from './volcanoes.component';

describe('VolcanoesComponent', () => {
  let component: VolcanoesComponent;
  let fixture: ComponentFixture<VolcanoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolcanoesComponent ]
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
