import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images = [
    '/assets/inv1.jpg',
    '/assets/inv2.jpg',
    '/assets/inv3.jpg',
  ];
  currentImage = 0;

  get currentImageUrl(): string {
    return this.images[this.currentImage];
  }

  nextImage(): void {
    this.currentImage = (this.currentImage + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
  }
}
