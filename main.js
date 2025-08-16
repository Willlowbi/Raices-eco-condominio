// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate form submission
  const btn = this.querySelector(".submit-btn");
  const originalText = btn.textContent;
  btn.textContent = "Enviando...";
  btn.disabled = true;

  setTimeout(() => {
    alert(
      "¡Gracias por tu interés en Raíces Eco Condominio! \n\nNos pondremos en contacto contigo en las próximas 24 horas."
    );
    this.reset();
    btn.textContent = originalText;
    btn.disabled = false;
  }, 1500);
});

// WhatsApp integration
function openWhatsApp() {
  const message = encodeURIComponent(
    "Hola, me interesa obtener información sobre Raíces Eco Condominio. ¿Podrían enviarme más detalles sobre los terrenos disponibles?"
  );
  window.open(`https://wa.me/+573027524071?text=${message}`, "_blank");
}

// Download brochure
function downloadBrochure() {
  alert(
    "El brochure se está descargando..."
  );

  const pdfPath = "assets/brochure/brochure_raices_eco_condominio.pdf";
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = "brochure_raices_eco_condominio.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Don't unobserve to allow for re-animation if needed
    }
  });
}, observerOptions);

document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});

// Smooth parallax effect
let ticking = false;
function updateParallax() {
  const scrolled = window.pageYOffset;
  const shapes = document.querySelectorAll(".organic-shape");

  shapes.forEach((shape, index) => {
    const speed = 0.5 + index * 0.2;
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

lottie.loadAnimation({
  container: document.getElementById('stars1'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/animations/Five-Stars.json'
});

lottie.loadAnimation({
  container: document.getElementById('stars2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/animations/Five-Stars.json'
});

lottie.loadAnimation({
  container: document.getElementById('stars3'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/animations/Five-Stars.json'
});

// Utilidad para inicializar animaciones con scroll
function initLottieOnScroll(id, path) {
  const container = document.getElementById(id);
  if (!container) return;

  const anim = lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: false,     // solo una vez
    autoplay: false, // no iniciar aún
    path
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anim.goToAndPlay(0, true); // reproduce desde el inicio
        observer.unobserve(container); // solo una vez
      }
    });
  }, { threshold: 0.6 }); // cuando 60% sea visible

  observer.observe(container);
}

// Inicializar cada feature
initLottieOnScroll('lottie-plant', 'assets/animations/Plant.json');
initLottieOnScroll('lottie-hands', 'assets/animations/Handshake.json');
initLottieOnScroll('lottie-chart', 'assets/animations/Bar-Chart.json');
initLottieOnScroll('lottie-tree', 'assets/animations/Tree.json');

// Animación de descarga
lottie.loadAnimation({
  container: document.getElementById('lottie-download'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/animations/Download.json' // la ruta de tu JSON
});
