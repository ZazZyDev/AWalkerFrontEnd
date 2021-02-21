import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatImageSliderComponent } from './mat-image-slider.component';

describe('MatImageSliderComponent', () => {
  let component: MatImageSliderComponent;
  let fixture: ComponentFixture<MatImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatImageSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
