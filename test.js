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

document.getElementById('download-btn').addEventListener('click', function () {
    const element = document.body; // L'élément que vous voulez convertir en PDF
    html2pdf()
        .set({
            filename: 'CV_Issa_Kamara.pdf',
            margin: 0,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        })
        .from(element)
        .save();
});

