// Mostrar contenido al hacer clic en título
const toggles = document.querySelectorAll('.toggle');
toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Animación al hacer scroll
function revealSections() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      section.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Información de rutas sin mapa
const rutas = [
  {
    nombre: 'Malecón del Río',
    descripcion: 'Ruta plana ideal para principiantes, con hermosa vista al río. Recomendado para tardes y fines de semana.'
  },
  {
    nombre: 'Vía al Mar',
    descripcion: 'Ruta larga ideal para entrenamiento de fondo. Menor tráfico entre 5 a 7 a.m.'
  },
  {
    nombre: 'Villa Campestre',
    descripcion: 'Zona residencial segura y con buena iluminación. Perfecta para entrenamientos nocturnos.'
  },
  {
    nombre: 'Juan Mina',
    descripcion: 'Rural, poco tráfico y naturaleza. Excelente para salidas en grupo los fines de semana.'
  },
  {
    nombre: 'Circunvalar de la Prosperidad',
    descripcion: 'Extensa autopista periférica. Perfecta para pruebas de resistencia. Úsala temprano con grupo.'
  }
];

const rutasInfo = document.getElementById('rutas-info');
rutas.forEach(ruta => {
  const item = document.createElement('p');
  item.innerHTML = `<strong>${ruta.nombre}:</strong> ${ruta.descripcion}`;
  rutasInfo.appendChild(item);
});

// Animación del ícono de bicicleta alrededor de la imagen
const biciIcon = document.querySelector('.bici-icono-animada');
if (biciIcon) {
  let angle = 0;
  const radius = 150; // distancia desde el centro
  const centerX = 300;
  const centerY = 300;

  function animarBici() {
    angle += 0.01;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    biciIcon.style.left = `${x}px`;
    biciIcon.style.top = `${y}px`;
    requestAnimationFrame(animarBici);
  }

  animarBici();
}







