import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelearnerComponent } from './updatelearner.component';

describe('UpdatelearnerComponent', () => {
  let component: UpdatelearnerComponent;
  let fixture: ComponentFixture<UpdatelearnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatelearnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
