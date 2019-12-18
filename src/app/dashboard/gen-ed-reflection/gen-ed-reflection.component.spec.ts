import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenEdReflectionComponent } from './gen-ed-reflection.component';

describe('GenEdReflectionComponent', () => {
  let component: GenEdReflectionComponent;
  let fixture: ComponentFixture<GenEdReflectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenEdReflectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenEdReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
