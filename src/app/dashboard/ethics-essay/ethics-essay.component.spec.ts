import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicsEssayComponent } from './ethics-essay.component';

describe('EthicsEssayComponent', () => {
  let component: EthicsEssayComponent;
  let fixture: ComponentFixture<EthicsEssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthicsEssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthicsEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
