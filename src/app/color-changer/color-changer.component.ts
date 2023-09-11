import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.scss']
})
export class ColorChangerComponent {

  constructor(private renderer: Renderer2) { }

  changeBackgroundColor() {
    const randomColor = this.getRandomColor();
    this.renderer.setStyle(document.body, 'background-color', randomColor);
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}



