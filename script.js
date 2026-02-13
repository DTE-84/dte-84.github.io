document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("protocol-toggle");
  const loader = document.getElementById("protocol-loader");
  const path = window.location.pathname;

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 800); // Snappier entry
  }

  if (toggle) {
    toggle.checked = path.includes("indexyellow.html");

    toggle.addEventListener("change", () => {
      if (loader) {
        loader.style.display = "flex";
        void loader.offsetWidth; 
        loader.style.opacity = "1";
      }

      setTimeout(() => {
        if (toggle.checked) {
          window.location.href = "indexyellow.html";
        } else {
          window.location.href = "index.html";
        }
      }, 1500); // Keep deliberate reboot time
    });
  }
});

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

  const menuToggle = document.getElementById("menu-toggle");
  const navLinksList = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("change", () => {
      if (menuToggle.checked) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  }

  document.addEventListener("click", (event) => {
    if (!menuToggle || !menuToggle.checked) return;

    const isClickInsideMenu = navLinksList && navLinksList.contains(event.target);
    const isClickOnHamburger = event.target.closest(".hamburger");
    const isClickOnNavLink = event.target.closest(".nav-link");
    const isClickOnToggle = event.target === menuToggle;

    if (isClickOnNavLink || (!isClickInsideMenu && !isClickOnHamburger && !isClickOnToggle)) {
      menuToggle.checked = false;
      document.body.style.overflow = "";
    }
  });

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
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".about-reveal").forEach((el) => {
    const content = el.innerHTML;
    const newContent = content
      .split(/(\s+|<[^>]+>)/g)
      .map((part) => {
        if (part.trim() === "" || part.startsWith("<")) return part;
        return `<span class="reveal-word">${part}</span>`;
      })
      .join("");
    el.innerHTML = newContent;

    const words = el.querySelectorAll(".reveal-word");
    words.forEach((word, i) => {
      word.style.transitionDelay = `${i * 40}ms`;
    });
  });

  document
    .querySelectorAll(".section-title, .about-content, .project-card, .about-reveal")
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

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (mybutton) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.height = scrolled + "%";
  }
  scrollFunction();
};

const orbs = document.querySelectorAll(".orb-wrapper");

const orbObserverOptions = {
  root: null,
  rootMargin: "-40% 0px -40% 0px",
  threshold: 0,
};

const orbObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      const targetOrbWrapper = document.querySelector(
        `[data-section="${sectionId}"]`,
      );

      if (targetOrbWrapper) {
        orbs.forEach((orb) => orb.classList.remove("active"));
        targetOrbWrapper.classList.add("active");
      }
    }
  });
}, orbObserverOptions);

["home", "about", "projects", "contact__footer"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) orbObserver.observe(el);
});

orbs.forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    const sectionId = wrapper.getAttribute("data-section");
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
