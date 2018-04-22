import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloSistemasComponent } from './desarrollo-sistemas.component';

describe('DesarrolloSistemasComponent', () => {
  let component: DesarrolloSistemasComponent;
  let fixture: ComponentFixture<DesarrolloSistemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolloSistemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
