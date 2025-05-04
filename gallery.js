document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery-container");
  const slide = document.querySelector(".gallery-slide");
  const items = document.querySelectorAll(".gallery-item");
  const indicatorsContainer = document.createElement("div");
  indicatorsContainer.className = "gallery-indicators";

  // Crear indicadores
  items.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.className = "gallery-indicator";
    if (index === 0) indicator.classList.add("active");
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  gallery.appendChild(indicatorsContainer);

  // Crear navegación (opcional)
  const nav = document.createElement("div");
  nav.className = "gallery-nav";

  const prevButton = document.createElement("button");
  prevButton.innerHTML = "&lt;";
  prevButton.addEventListener("click", () => goToSlide(currentIndex - 1));

  const nextButton = document.createElement("button");
  nextButton.innerHTML = "&gt;";
  nextButton.addEventListener("click", () => goToSlide(currentIndex + 1));

  nav.appendChild(prevButton);
  nav.appendChild(nextButton);
  gallery.appendChild(nav);

  let currentIndex = 0;
  const totalItems = items.length;
  let interval;

  function goToSlide(index) {
    if (index >= totalItems) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalItems - 1;
    } else {
      currentIndex = index;
    }

    slide.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Actualizar indicadores
    document.querySelectorAll(".gallery-indicator").forEach((indicator, i) => {
      indicator.classList.toggle("active", i === currentIndex);
    });

    // Reiniciar el intervalo
    resetInterval();
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 4000); // 4 segundos
  }

  // Iniciar el carrusel automático
  resetInterval();

  // Pausar al pasar el mouse (opcional)
  gallery.addEventListener("mouseenter", () => clearInterval(interval));
  gallery.addEventListener("mouseleave", resetInterval);
});

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery-container");
  const navbarHeight = document.querySelector(".header").offsetHeight;

  window.addEventListener("scroll", function () {
    // Calcula qué tan lejos está la galería del top
    const galleryPosition = gallery.getBoundingClientRect().top;

    // Activa el efecto cuando la galería pasa debajo de la navbar
    if (galleryPosition < navbarHeight * 1.5) {
      gallery.classList.add("scroll-effect");
    } else {
      gallery.classList.remove("scroll-effect");
    }
  });
});
