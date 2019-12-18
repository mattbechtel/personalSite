import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeReflectionComponent } from './cumulative-reflection.component';

describe('CummulativeReflectionComponent', () => {
  let component: CumulativeReflectionComponent;
  let fixture: ComponentFixture<CumulativeReflectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativeReflectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativeReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
