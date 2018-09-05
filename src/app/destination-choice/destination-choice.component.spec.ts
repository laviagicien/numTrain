import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationChoiceComponent } from './destination-choice.component';

describe('DestinationChoiceComponent', () => {
  let component: DestinationChoiceComponent;
  let fixture: ComponentFixture<DestinationChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
