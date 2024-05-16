
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

