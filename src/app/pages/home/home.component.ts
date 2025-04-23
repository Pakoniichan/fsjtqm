import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  raining = false;
  showSurprise = false;
  heartInterval: any;

  startRain() {
    if (!this.raining) {
      this.raining = true;
      this.showSurprise = true;

      this.heartInterval = setInterval(() => this.createHeart(), 100);
    }
  }

  createHeart() {
    const container = document.querySelector('.heart-container');
    if (!container) return;

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💗';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 10 + 20) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 6) + 's';

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }
}