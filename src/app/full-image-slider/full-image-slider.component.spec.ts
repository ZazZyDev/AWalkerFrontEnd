import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullImageSliderComponent } from './full-image-slider.component';

describe('FullImageSliderComponent', () => {
  let component: FullImageSliderComponent;
  let fixture: ComponentFixture<FullImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullImageSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
