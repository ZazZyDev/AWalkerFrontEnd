import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatImageSliderComponent } from './mat-image-slider/mat-image-slider.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ImageSliderComponent,
    CarouselComponent,
    MatImageSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCarouselModule.forRoot(),

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
