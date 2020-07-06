import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerlistComponent } from './learnerlist.component';

describe('LearnerlistComponent', () => {
  let component: LearnerlistComponent;
  let fixture: ComponentFixture<LearnerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
