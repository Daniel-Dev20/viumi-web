import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelajeComponent } from './modelaje.component';

describe('ModelajeComponent', () => {
  let component: ModelajeComponent;
  let fixture: ComponentFixture<ModelajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
