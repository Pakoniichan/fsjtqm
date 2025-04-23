import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

// Código para lluvia de corazones
function createHeart() {
  const container = document.querySelector('.heart-container');
  if (!container) return;

  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '💗';

  heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
  heart.style.fontSize = Math.random() * 10 + 20 + 'px'; // Tamaño aleatorio
  heart.style.animationDuration = (Math.random() * 2 + 6) + 's'; // Duración de la animación

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove(); // Eliminar corazón después de 10 segundos
  }, 10000);
}

// Función para iniciar la lluvia de corazones
(window as any).startHeartRain = () => {
  setInterval(createHeart, 100);

  // Mostrar imagen
  const img = document.getElementById('love-image');
  if (img) img.style.display = 'block';
};

// Función para ocultar el botón
function hideButton() {
  const button = document.getElementById('start-button');
  if (button) {
    button.style.display = 'none'; // Ocultar el botón
  }
}

// Añadir evento al botón para iniciar la lluvia y ocultar el botón
const startButton = document.getElementById('start-button');
if (startButton) {
  startButton.addEventListener('click', () => {
    (window as any).startHeartRain(); // Inicia la lluvia de corazones
    hideButton(); // Oculta el botón
  });
}
