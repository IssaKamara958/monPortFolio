// Initialisation d'EmailJS avec votre API Key (Public Key)
(function() {
    emailjs.init("ZDT7ujoNjWIsVbpkx"); // Remplacez par votre Public Key EmailJS
})();

// Fonction d'envoi d'email
function sendEmail(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Paramètres pour EmailJS
    const templateParams = {
        to_name: "Myopi", 
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    // Envoyer l'email avec EmailJS
    emailjs.send("service_6via4r4", "template_0fruacc", templateParams)
        .then(response => {
            console.log('Email sent successfully:', response);
            // Afficher le message de succès
            document.getElementById("form-message-warning").style.display = 'none';
            document.getElementById("form-message-success").style.display = 'block';
            document.getElementById("contactForm").reset(); // Réinitialiser le formulaire
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("form-message").innerHTML = '<p class="alert alert-danger">Échec de l\'envoi du message. Veuillez réessayer.</p>';
        });
}

// Attachez l'événement au formulaire
document.getElementById('contactForm').addEventListener('submit', sendEmail);
