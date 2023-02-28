// Select the form container element
const formContainer = document.querySelector('.form-container');

// Add an animation to the form container
formContainer.addEventListener('mouseenter', () => {
  formContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
});

formContainer.addEventListener('mouseleave', () => {
  formContainer.style.boxShadow = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    var formContainer = document.querySelector(".form-container");
    formContainer.classList.add("animated", "fadeInDown");
  });
  