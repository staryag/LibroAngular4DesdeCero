import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2waybindingComponent } from './ej2waybinding.component';

describe('Ej2waybindingComponent', () => {
  let component: Ej2waybindingComponent;
  let fixture: ComponentFixture<Ej2waybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej2waybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej2waybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
