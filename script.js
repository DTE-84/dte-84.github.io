document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("protocol-toggle");
  const loader = document.getElementById("protocol-loader");
  const html = document.documentElement;
  const progressBar = document.getElementById("progressBar");
  const orbs = document.querySelectorAll(".orb-wrapper");

  // Initial Loader
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 500);
    }, 1000);
  }

  // Theme Switcher
  if (toggle) {
    const savedTheme = localStorage.getItem("dte-theme") || "blue";
    html.setAttribute("data-theme", savedTheme);
    toggle.checked = savedTheme === "yellow";

    toggle.addEventListener("change", () => {
      loader.style.display = "flex";
      loader.style.opacity = "1";
      const newTheme = toggle.checked ? "yellow" : "blue";
      setTimeout(() => {
        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("dte-theme", newTheme);
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
      }, 800);
    });
  }

  // --- REFINED WORD-BY-WORD REVEAL ---
  let globalWordIndex = 0;
  document.querySelectorAll(".about-reveal").forEach((el) => {
    const content = el.innerHTML;
    const newContent = content
      .split(/(\s+|<[^>]+>)/g)
      .map((part) => {
        if (!part.trim() || part.startsWith("<")) return part;
        return `<span class="reveal-word">${part}</span>`;
      })
      .join("");
    el.innerHTML = newContent;

    const words = el.querySelectorAll(".reveal-word");
    words.forEach((word, i) => {
      // Each paragraph starts its own delay but we can offset it if needed
      word.style.transitionDelay = `${i * 35}ms`;
    });
  });

  // Smooth Section & Word Reveals
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".section-title, .project-card, .about-content, .about-reveal").forEach(el => {
    observer.observe(el);
  });

  // Scroll Progress and Orb Activity
  window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.height = scrolled + "%";

    const sections = ["home", "about", "projects", "footer"];
    let currentSection = "home";

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop;
        if (winScroll >= sectionTop - 300) {
          currentSection = id;
        }
      }
    });

    orbs.forEach(orb => {
      orb.classList.toggle("active", orb.getAttribute("data-section") === currentSection);
    });
  });

  // Orb Click Navigation
  orbs.forEach(orb => {
    orb.addEventListener("click", () => {
      const targetId = orb.getAttribute("data-section");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Modal Logic
let isModalOpen = false;
function toggleModal() {
  const body = document.body;
  isModalOpen = !isModalOpen;
  body.classList.toggle("modal--open", isModalOpen);
}

// Contact Form
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  
  if (loading) {
    loading.classList.remove("hidden");
    loading.style.display = "flex";
  }

  emailjs.sendForm("service_akgmg6r", "template_nx4fvkb", event.target, "zmPiRmxRkScwdiYFX")
    .then(() => {
      if (loading) loading.style.display = "none";
      if (success) {
        success.classList.remove("hidden");
        success.style.display = "flex";
      }
      setTimeout(() => {
        if (success) success.style.display = "none";
        if (isModalOpen) {
          toggleModal();
        }
        event.target.reset();
      }, 2000);
    })
    .catch(err => {
      if (loading) loading.style.display = "none";
      alert("Comms error. Direct uplink to: drew.t.ernst@gmail.com");
      console.error(err);
    });
}
