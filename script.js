
    // Validation du formulaire
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var isValid = true;

        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var message = document.getElementById('message');

        var nameError = document.getElementById('nameError');
        var emailError = document.getElementById('emailError');
        var messageError = document.getElementById('messageError');

        // Reset error messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        // Validate name
        if (name.value.trim() === '') {
            nameError.textContent = 'Le nom est requis.';
            isValid = false;
        }

        // Validate email
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Email invalide.';
            isValid = false;
        }

        // Validate message
        if (message.value.trim() === '') {
            messageError.textContent = 'Le message est requis.';
            isValid = false;
        }

        if (isValid) {
            alert('Formulaire soumis avec succès!');
            // Vous pouvez également envoyer les données du formulaire à un serveur ici
            // Par exemple, en utilisant fetch() ou XMLHttpRequest()
        }
    });

    // Gestion du carrousel d'images
    var currentSlide = 0;
    var slides = document.getElementsByClassName('carousel-img');
    var indicators = document.getElementsByClassName('carousel-indicators')[0].children;

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
            indicators[i].classList.remove('active');
        }

        slides[currentSlide].classList.remove('hidden');
        indicators[currentSlide].classList.add('active');
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }

    showSlide(currentSlide);


// script.js

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-img');
const indicators = document.querySelectorAll('.carousel-indicators span');

function showSlide(index) {
    slides[currentSlide].classList.add('hidden');
    indicators[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.remove('hidden');
    indicators[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
});

// Form validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

form.addEventListener('submit', (event) => {
    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    if (!nameInput.value) {
        nameError.textContent = 'Veuillez entrer votre nom.';
        valid = false;
    }
    if (!emailInput.value || !emailInput.value.includes('@')) {
        emailError.textContent = 'Veuillez entrer une adresse email valide.';
        valid = false;
    }
    if (!messageInput.value) {
        messageError.textContent = 'Veuillez entrer votre message.';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive menu (optional)
const menuToggle = document.createElement('button');
menuToggle.innerHTML = '☰';
menuToggle.classList.add('menu-toggle');
document.querySelector('header').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


