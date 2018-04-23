import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruouselComponent } from './caruousel.component';

describe('CaruouselComponent', () => {
  let component: CaruouselComponent;
  let fixture: ComponentFixture<CaruouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaruouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
