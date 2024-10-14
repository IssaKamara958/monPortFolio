document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const width = bar.style.width; // Récupérer la largeur définie dans le style inline
        bar.style.width = '0'; // Commence à 0 pour l'animation
        setTimeout(() => {
            bar.style.width = width; // Animer vers la valeur définie
        }, 100); // Délai pour commencer l'animation
    });
});
