import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],

})

export class ImageSliderComponent  {

    slides: string [] = ['./assets/temp1.jpg', './assets/temp2.jpg', './assets/temp3.jpg' ]
    i=0;

    getSlide() {
        return this.slides[this.i];
    }

    getPrev() {
        this.i = this.i===0 ? 0 : this.i - 1;
    }
//edit here    
    getNext() {
        this.i = this.i===this.slides.length ? this.i : this.i + 1;
    }


}