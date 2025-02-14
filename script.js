const allSections = document.querySelectorAll(
    ".main-body p, .main-body h2, .main-body h1,.main-body h3"
  );
  window.addEventListener("scroll", animate);
  function animate() {
    const triggerBottom = window.innerHeight - 100;
    allSections.forEach((each) => {
      const pTop = each.getBoundingClientRect().top;
      if (pTop < triggerBottom) {
        each.classList.add("addAnima");
      } else {
        each.classList.remove("addAnima");
      }
    });
  }
//   -------------------------owl-----------
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });