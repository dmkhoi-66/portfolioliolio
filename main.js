const normalParticles = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#04c2c9"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#e31b6d"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

const akatsukiParticles = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#04c2c9"
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#e31b6d"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "images/akatsuki-2.webp",
        width: 100,
        height: 60
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 20,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

const shinyPokemonParticles = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#04c2c9"
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#e31b6d"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "pokemon",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 50,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

// PARTICLES
particlesJS("particles-js", normalParticles);

// CHECK IF USER IS MOBILE
const isMobile = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
};

// NAV
const activeBtn = document.querySelectorAll(".btns");
const nav = document.querySelector("#myTopnav");
const icon = document.querySelector("#nav-icon1");

activeBtn.forEach(function (btn) {
  btn.addEventListener("click", () => {
    openDropNav();
    icon.classList.toggle("open");
  });
});

const openDropNav = () => {
  if (nav.className === "topnav") {
    nav.className += " responsive";
    document.querySelector(".logo2.coffee-shake").style.display = "block";
  } else {
    nav.className = "topnav";
    document.querySelector(".logo2.coffee-shake").style.display = "none";
  }
};

document.querySelector(".hamburger").addEventListener("click", () => {
  icon.classList.toggle("open");
  openDropNav();
});

const home = document.querySelector("#home-nav");
const about = document.querySelector("#about-nav");
const skills = document.querySelector("#skills-nav");
const projects = document.querySelector("#projects-nav");
const contact = document.querySelector("#contact-nav");

const scrollNav = () => {
  const contactOffset = isMobile() ? 50 : 500;
  const position = document.querySelector(".scrollsticky").getBoundingClientRect().y + 10;
  const homeSection = document.querySelector("#home").getBoundingClientRect().y;
  const aboutSection = document.querySelector("#about").getBoundingClientRect().y;
  const skillsSection = document.querySelector("#skills").getBoundingClientRect().y;
  const projectsSection = document.querySelector("#projects").getBoundingClientRect().y;
  const contactSection = document.querySelector("#contact").getBoundingClientRect().y - contactOffset;

  if (position >= homeSection && position < aboutSection && !home.classList.contains("active")) {
    document.querySelector(".active").classList.remove("active");
    home.classList.add("active");
  } else if (position >= aboutSection && position < skillsSection && !about.classList.contains("active")) {
    document.querySelector(".active").classList.remove("active");
    about.classList.add("active");
  } else if (position >= skillsSection && position < projectsSection && !skills.classList.contains("active")) {
    document.querySelector(".active").classList.remove("active");
    skills.classList.add("active");
  } else if (position >= projectsSection && position < contactSection && !projects.classList.contains("active")) {
    document.querySelector(".active").classList.remove("active");
    projects.classList.add("active");
  } else if (position > contactSection && !contact.classList.contains("active")) {
    document.querySelector(".active").classList.remove("active");
    contact.classList.add("active");
  }
};

window.addEventListener(
  "scroll",
  (e) => {
    scrollNav();
  },
  { passive: true }
);

// MOBILE GALLERY
const galleryItems = document.querySelectorAll(".column");
const mobileActiveButton = document.querySelector("#buttonActive");
const mobileGalleryBtns = mobileActiveButton.querySelectorAll(".btn");

// Change mobile gallery column
document.querySelector("#galleryButtonOne").addEventListener("click", () => {
  galleryItems.forEach((image) => {
    image.style.msFlex = "50%"; // IE10
    image.style.flex = "50%";
  });
});

document.querySelector("#galleryButtonTwo").addEventListener("click", () => {
  galleryItems.forEach((image) => {
    image.style.msFlex = "100%"; // IE10
    image.style.flex = "100%";
  });
});

// Add active mobile gallery class
mobileGalleryBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const current = document.querySelectorAll(".active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
  });
});

// LAZY LOAD IFRAMES
const deferVideo = () => {
  const vidDefer = document.querySelectorAll("iframe");
  if ("IntersectionObserver" in window) {
    let lazyYoutube = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyVid = entry.target;
          lazyVid.src = lazyVid.dataset.src;
          lazyVid.classList.remove("lazyVid");
          lazyYoutube.unobserve(lazyVid);
        }
      });
    });
    vidDefer.forEach((lazyVid) => {
      lazyYoutube.observe(lazyVid);
    });
  }
};

deferVideo();

// LAZY LOAD IMAGES
document.addEventListener("DOMContentLoaded", () => {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage);
    });
  }
});

// SLIDE UP ANIMATION ON SCROLL
const slideUpAnimation = function () {
  const images = document.querySelectorAll(".item");

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animate");
      }
    });
  });

  images.forEach((image) => {
    observer.observe(image);
  });
};

slideUpAnimation();

// FLIP CARD
const card = document.querySelectorAll(".card1");

const flipCard = function () {
  card.forEach(function (cards) {
    cards.addEventListener("click", function () {
      if (cards.classList.contains("is-flipped")) {
        cards.classList.remove("is-flipped");
      } else {
        cards.classList.add("is-flipped");
      }
    });
  });
};

flipCard();

// COFFEE SHAKES
const shake = document.querySelector("#myTopnav");
const coffeeShakes = function () {
  document.querySelector(".coffee-shake").addEventListener("click", function () {
    shake.classList.toggle("shake");
    document.querySelector(".coffee-shake").style.imageRendering = "auto";
    document.querySelector(".coffee-shake").src = "images/TB-90w.png";
    document.querySelector(".coffee-shake").srcset = "images/TB-90w.png 1x, images/TB-90w-retina.png 2x";
  });
};

coffeeShakes();

// REMOVE SLIDE IN ANIMATION IF USER LANDS ON FORM
const removeSlideIn = function () {
  if (location.hash.includes("#contact")) {
    const slideUpItems = document.querySelectorAll(".item");
    slideUpItems.forEach(function (item) {
      item.classList.remove("item");
    });
  }
};

removeSlideIn();


// HANDLE FORM
let submitForm = async (e) => {
  e.preventDefault();

  document.querySelector('input[type="submit"]').value = "Loading...";

  document.querySelector(".error").style.display = "none";

  const myForm = e.target;
  const formData = new FormData(myForm);

  const result = await fetch("https://formspree.io", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
    .then((data) => {
      if (data.status !== 200) {
        throw new Error("submission failed");
      }
      return true;
    })
    .catch((error) => {
      console.log(error);
      document.querySelector(".error").style.display = "block";
      document.querySelector('input[type="submit"]').value = "Error";
    });

  if (result) {
    document.querySelector('input[type="submit"]').value = "Success";
    myForm.reset();

    document.querySelectorAll(".success").forEach((el) => {
      el.style.display = "block";
    });

    document.querySelectorAll(".form-input").forEach((input) => {
      input.setAttribute("disabled", "");
    });

    document.querySelectorAll(".requirements").forEach((el) => {
      el.style.display = "none";
    });

    if (isMobile()) {
      showDan(true);
    }
  }
};

window.addEventListener("load", () => {
  document.querySelector(".fill-form").addEventListener("submit", submitForm);
});

document.querySelector(".fill-form").addEventListener("focusin", (event) => {
  if (event.target.type !== "submit") {
    event.target.style.border = "0px solid #e31b6d";
  }
});

document.querySelector(".fill-form").addEventListener("focusout", (event) => {
  // removes white space in form values
  if (event.target.value.length > 0) {
    event.target.value = event.target.value.trim();
  }

  // adds red border if required feild is empty
  if (event.target.value.length < 1 && event.target.hasAttribute("required")) {
    event.target.style.border = "1px solid #e31b6d";
  }

  if (event.target.value.length < 1 && event.target.hasAttribute("required")) {
    event.target.parentElement.nextElementSibling.style.display = "block";
  } else if (event.target.value.length > 0 && event.target.hasAttribute("required")) {
    event.target.parentElement.nextElementSibling.style.display = "none";
    event.target.style.border = "0px solid #e31b6d";
  }
});
