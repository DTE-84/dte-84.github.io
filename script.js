let isMainModalOpen = false;
let isProjectModalOpen = false;

function toggleModal() {
  const mainModal = document.querySelector(".main-modal");
  isMainModalOpen = !isMainModalOpen;

  if (isMainModalOpen) {
    document.body.classList.add("modal--open");
  } else {
    document.body.classList.remove("modal--open");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  const submitBtn = document.querySelector(".form__submit");
  const originalBtnText = submitBtn.innerHTML;

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.style.cursor = "not-allowed";
  submitBtn.disabled = true;

  loading.classList.add("modal__overlay--visible");

  emailjs
    .sendForm(
      "service_akgmg6r",
      "template_nx4fvkb",
      event.target,
      "zmPiRmxRkScwdiYFX",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");

      setTimeout(() => {
        success.classList.remove("modal__overlay--visible");

        submitBtn.innerHTML = originalBtnText;
        submitBtn.style.cursor = "pointer";
        submitBtn.disabled = false;
        toggleModal();
      }, 2000);

      event.target.reset();
    })
    .catch((err) => {
      loading.classList.remove("modal__overlay--visible");

      submitBtn.innerHTML = originalBtnText;
      submitBtn.style.cursor = "pointer";
      submitBtn.disabled = false;

      console.error(err);
      alert(
        "Problem sending message. Please contact me at drew.t.ernst@gmail.com",
      );
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const linkTexts = ["Home", "About", "Projects", "Contact"];

  navLinks.forEach((link, index) => {
    const text = linkTexts[index];
    if (text) {
      link.innerHTML = text
        .split("")
        .map(
          (letter, i) =>
            `<span class="letter" style="--sibling-index: ${i}">${letter}</span>`,
        )
        .join("");
    }
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".section-title, .about-content, .project-card")
    .forEach((el) => {
      observer.observe(el);
    });

  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isMainModalOpen) {
    toggleModal();
  }
});



/**
 * Initialize all futuristic buttons and apply styles and effects
 */
function initializeFuturisticButtons() {
  const buttons = document.querySelectorAll('.fui-btn');

  buttons.forEach(button => {
    // Add glowing effect
    addGlowEffect(button);

    // Set theme based on the `data-variant` attribute
    const variant = button.getAttribute('data-variant') || 'default';
    applyTheme(button, variant);

    // Add ripple effect if enabled
    const rippleEnabled = button.getAttribute('data-ripple') === 'true';
    if (rippleEnabled) {
      addRippleEffect(button);
    }
  });
}

/**
 * Add a glowing effect to the button
 * @param {HTMLElement} button - The button element
 */
function addGlowEffect(button) {
  const glowElement = document.createElement('span');
  glowElement.classList.add('fui-btn-glow');
  button.appendChild(glowElement);
}

/**
 * Add a ripple effect to the button
 * @param {HTMLElement} button - The button element
 */
function addRippleEffect(button) {
    const ripple = document.createElement('span');
    ripple.classList.add('fui-btn-ripple');
    button.appendChild(ripple);
}

/**
 * Apply the theme to the button based on the variant
 * @param {HTMLElement} button - The button element
 * @param {string} variant - The theme variant
 */
function applyTheme(button, variant) {
  const colors = buttonColors[variant] || buttonColors.default;

  // Apply CSS custom properties for theme
  button.style.setProperty('--fui-btn-bg', colors.background);
  button.style.setProperty('--fui-btn-color', colors.color);
  button.style.setProperty('--fui-btn-glow', colors.glow);
}

// Theme colors for different button variants
const buttonColors = {
  primary: { background: '179.53, 100%, 49.8%', color: '179.48, 99.13%, 54.71%', glow: '179.47, 100%, 44.71%' },
  secondary: { background: '338.02, 99.02%, 60%', color: '338.24, 98.91%, 63.92%', glow: '337.91, 77.12%, 53.73%' },
  success: { background: '110.55, 100%, 53.92%', color: '110.62, 100%, 58.63%', glow: '110.66, 85.48%, 48.63%' },
  error: { background: '0, 100%, 54.71%', color: '0, 100%, 59.22%', glow: '0, 82.54%, 49.41%' },
  neutral: { background: '0, 0%, 80%', color: '0, 0%, 81.96%', glow: '0, 0%, 71.76%' },
  default: { background: '180, 100%, 99.22%', color: '180, 100%, 99.41%', glow: '180, 7.41%, 89.41%' },
};