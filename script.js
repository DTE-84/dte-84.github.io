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

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// 1. Handle the Progress Line Fill
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.height = scrolled + "%";
};

// --- SCROLL NAV LOGIC ---
const orbs = document.querySelectorAll('.orb-wrapper');
const progressBar = document.getElementById("progressBar");

const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -40% 0px', 
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const targetOrbWrapper = document.querySelector(`[data-section="${sectionId}"]`);
            
            if (targetOrbWrapper) {
                orbs.forEach(orb => orb.classList.remove('active'));
                targetOrbWrapper.classList.add('active');
                
                // This snaps the bar exactly to the 'top' style we set in HTML
                progressBar.style.height = targetOrbWrapper.style.top;
            }
        }
    });
}, observerOptions);

// Observe your main sections
['home', 'about', 'projects', 'contact__footer'].forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
});

// Click to scroll logic
orbs.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        const sectionId = wrapper.getAttribute('data-section');
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});