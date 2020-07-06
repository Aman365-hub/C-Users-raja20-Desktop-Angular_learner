import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelearnerComponent } from './deletelearner.component';

describe('DeletelearnerComponent', () => {
  let component: DeletelearnerComponent;
  let fixture: ComponentFixture<DeletelearnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletelearnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
