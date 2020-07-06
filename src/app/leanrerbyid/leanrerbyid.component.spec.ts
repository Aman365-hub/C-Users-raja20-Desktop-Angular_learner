import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanrerbyidComponent } from './leanrerbyid.component';
import { LearnerlistComponent } from '../learnerlist/learnerlist.component';

describe('LearnerbyidComponent', () => {
  let component: LeanrerbyidComponent;
  let fixture: ComponentFixture<LeanrerbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeanrerbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanrerbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
