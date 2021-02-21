import { Component, OnInit } from '@angular/core';
import { slideshow } from '../../assets/js/slideshow';

@Component({
  selector: 'app-full-image-slider',
  templateUrl: './full-image-slider.component.html',
  styleUrls: ['./full-image-slider.component.css']
})




export class FullImageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    slideshow();
  }


}
