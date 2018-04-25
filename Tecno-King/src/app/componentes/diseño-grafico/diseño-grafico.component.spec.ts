import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseñoGraficoComponent } from './diseño-grafico.component';

describe('DiseñoGraficoComponent', () => {
  let component: DiseñoGraficoComponent;
  let fixture: ComponentFixture<DiseñoGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseñoGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseñoGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
