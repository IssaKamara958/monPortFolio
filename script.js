
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


function handleFormSubmit(event) {
    event.preventDefault(); // Empêche la soumission du formulaire
    
    const name = document.getElementById('name').value;
    alert(`Bonne réception, ${name} !`); // Affiche une alerte de bonne réception avec le nom saisi
    
    document.getElementById('myForm').reset(); // Réinitialise le formulaire
}

document.getElementById('myForm').addEventListener('submit', handleFormSubmit);

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

document.addEventListener("DOMContentLoaded", function() {
    let carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        let scrollNext = document.createElement('button');
        scrollNext.innerText = 'Next';
        scrollNext.addEventListener('click', function() {
            carousel.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
        });
        let scrollPrev = document.createElement('button');
        scrollPrev.innerText = 'Previous';
        scrollPrev.addEventListener('click', function() {
            carousel.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
        });
        carousel.parentElement.appendChild(scrollNext);
        carousel.parentElement.appendChild(scrollPrev);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Apparition animée des éléments lors du chargement de la page
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach(el => {
        el.classList.add('visible');
    });

    // Défilement fluide pour les ancres
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Effet de survol pour les liens de contact
    const contactLinks = document.querySelectorAll('.contact-info a');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        link.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // Validation du formulaire et soumission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Validation des cases à cocher
        const checkboxes = document.querySelectorAll('input[name="quartier"]');
        const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        if (checkedCheckboxes.length !== 1) {
            alert('Veuillez cocher une seule case correspondant à votre quartier.');
            return;
        }

        // Validation du numéro de téléphone
        const telephone = document.getElementById('telephone').value;
        const phonePattern = /^\+221\d{9}$/;

        if (!phonePattern.test(telephone)) {
            alert('Veuillez entrer un numéro de téléphone valide avec l\'indicatif du Sénégal (+221) suivi de neuf chiffres.');
            return;
        }

        // Sanitize and validate input
        const nom = sanitizeInput(document.getElementById('nom').value);
        const prenom = sanitizeInput(document.getElementById('prenom').value);
        const vouloir = sanitizeInput(document.getElementById('vouloir').value);
        const quartier = checkedCheckboxes[0].value;

        if (!nom || !prenom || !vouloir) {
            alert('Tous les champs doivent être remplis.');
            return;
        }

        alert('Bien reçu!');

        const message = `
            Nom: ${nom}
            Prénom: ${prenom}
            Téléphone: ${telephone}
            Quartier: ${quartier}
            Demande: ${vouloir}
        `;

        const whatsappUrl = `https://wa.me/221773465237?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    function sanitizeInput(input) {
        const element = document.createElement('div');
        element.innerText = input;
        return element.innerHTML.trim();
    }
});
