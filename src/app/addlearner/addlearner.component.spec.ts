import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlearnerComponent } from './addlearner.component';

describe('AddlearnerComponent', () => {
  let component: AddlearnerComponent;
  let fixture: ComponentFixture<AddlearnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlearnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
