document.getElementById('goBackBtn').addEventListener('click', function() {
    history.back();
});
// --------------------------------------------------------------------------
$(document).ready(function () {
    $('.hero-slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
    autoplay:true,
      arrows: false
    });
  });
// --------------------------------------------------------------------------
function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "175px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "175px";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const educationSection = document.getElementById('education');
    const gridItems = document.querySelectorAll('.grid-item');


    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

   
    function handleScroll() {
      if (isElementInViewport(educationSection)) {
        gridItems.forEach((item) => {
          item.classList.add('visible');
        });
        
        window.removeEventListener('scroll', handleScroll);
      }
    }


    handleScroll();
    

    window.addEventListener('scroll', handleScroll);
  });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Contact Info visibility
const contactSection = document.getElementById('contact');
const toggleContactBtn = document.getElementById('toggle-contact');

toggleContactBtn.addEventListener('click', function() {
    if (contactSection.style.display === "none") {
        contactSection.style.display = "block";
        toggleContactBtn.textContent = "Hide Contact Info";
    } else {
        contactSection.style.display = "none";
        toggleContactBtn.textContent = "Show Contact Info";
    }
});


const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 1.2;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});
