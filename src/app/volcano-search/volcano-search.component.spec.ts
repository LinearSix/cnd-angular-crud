import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolcanoSearchComponent } from './volcano-search.component';

describe('VolcanoSearchComponent', () => {
  let component: VolcanoSearchComponent;
  let fixture: ComponentFixture<VolcanoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolcanoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolcanoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
