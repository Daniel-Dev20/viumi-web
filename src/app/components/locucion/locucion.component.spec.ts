import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocucionComponent } from './locucion.component';

describe('LocucionComponent', () => {
  let component: LocucionComponent;
  let fixture: ComponentFixture<LocucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
