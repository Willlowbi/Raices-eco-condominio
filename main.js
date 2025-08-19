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

const floatBtn = document.querySelector(".whatsapp-float");
  const bubble = document.querySelector(".whatsapp-bubble");

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    // 🔹 Al cargar, dale la animación automática SOLO 1 vez
    bubble.classList.add("auto-show");

    // 🔹 Cuando el usuario toca el botón
    floatBtn.addEventListener("touchstart", () => {
      // Cancelamos la auto animación si aún estaba activa
      bubble.classList.remove("auto-show");

      // Mostramos manualmente
      bubble.classList.add("manual-show");

      // Ocultamos después de 3s
      setTimeout(() => {
        bubble.classList.remove("manual-show");
      }, 3000);
    });
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

// Animación de descarga
lottie.loadAnimation({
  container: document.getElementById('lottie-download'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/animations/Download.json'
});
