import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-heart-rain',
  standalone:false,
  templateUrl: './heart-rain.component.html',
  styleUrls: ['./heart-rain.component.css'],
})
export class HeartRainComponent {
  intervalId: any;

  constructor(private el: ElementRef) {}

  startRain() {
    const container = this.el.nativeElement.querySelector('.heart-container');
    if (!container) return;

    this.intervalId = setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerText = '💗';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = (Math.random() * 10 + 20) + 'px';
      heart.style.animationDuration = (Math.random() * 2 + 6) + 's';

      container.appendChild(heart);

      setTimeout(() => heart.remove(), 10000);
    }, 100);
  }

  stopRain() {
    clearInterval(this.intervalId);
  }
}
