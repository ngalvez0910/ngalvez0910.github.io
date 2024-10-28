let slideIndex = 1;

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.mySlides');
  let currentIndex = 0;

  function showSlides(index) {
      slides.forEach(slide => {
          slide.style.display = 'none';
      });
      slides[index].style.display = 'block';
  }

  showSlides(currentIndex);

  document.querySelector('.next').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlides(currentIndex);
  });

  document.querySelector('.prev').addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlides(currentIndex);
  });
});


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function toggleMenu() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
      x.className += " responsive";
  } else {
      x.className = "navbar";
  }
}