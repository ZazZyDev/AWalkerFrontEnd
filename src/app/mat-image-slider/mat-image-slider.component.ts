import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  MatCarouselSlideComponent,
  Orientation
} from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-mat-image-slider',
  templateUrl: './mat-image-slider.component.html',
  styleUrls: ['./mat-image-slider.component.css']
})
export class MatImageSliderComponent implements OnInit {

  ngOnInit(): void {
  }
  
  // Slider Images
  slides = [{'image': 'assets/temp1.jpg'},
   {'image': 'assets/temp2.jpg'},
   {'image': 'assets/temp3.jpg'},
    {'image': 'assets/temp4.jpg'},
     {'image': 'assets/temp1.jpg'}];
  

}
