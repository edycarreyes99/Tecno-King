import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasPcComponent } from './programas-pc.component';

describe('ProgramasPcComponent', () => {
  let component: ProgramasPcComponent;
  let fixture: ComponentFixture<ProgramasPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramasPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramasPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
