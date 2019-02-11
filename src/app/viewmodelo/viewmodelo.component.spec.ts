import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmodeloComponent } from './viewmodelo.component';

describe('ViewmodeloComponent', () => {
  let component: ViewmodeloComponent;
  let fixture: ComponentFixture<ViewmodeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmodeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmodeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
