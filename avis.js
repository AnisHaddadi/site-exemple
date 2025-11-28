// Données des avis (à remplacer par {{avis_data}})
const avisData = [
    {
        note: 5,
        texte: "Service exceptionnel ! L'équipe est très professionnelle et à l'écoute. Je recommande vivement.",
        auteur: "Marie D.",
        source: "Avis Google"
    },
    {
        note: 5,
        texte: "Très satisfait de mon expérience. Tout était parfait, de l'accueil au service. Merci !",
        auteur: "Jean P.",
        source: "Avis Google"
    },
    {
        note: 5,
        texte: "Un service de qualité avec une attention aux détails remarquable. Je reviendrai sans hésitation.",
        auteur: "Sophie L.",
        source: "Avis Google"
    },
    {
        note: 5,
        texte: "Excellent rapport qualité-prix. L'équipe est compétente et très sympathique. À recommander !",
        auteur: "Pierre M.",
        source: "Avis Google"
    },
    {
        note: 5,
        texte: "Une expérience formidable ! Tout était parfaitement organisé. Merci pour ce moment inoubliable.",
        auteur: "Claire B.",
        source: "Avis Google"
    }
];

// Fonction pour générer les étoiles
function generateStars(rating) {
    return '★'.repeat(rating);
}

// Générer les cartes d'avis
function renderAvis() {
    const container = document.getElementById('slider-container');
    if (!container) return;

    container.innerHTML = '';

    avisData.forEach(avis => {
        const card = document.createElement('article');
        card.className = 'avis-card slide';
        
        card.innerHTML = `
            <p class="note">${generateStars(avis.note)}</p>
            <p class="texte">"${avis.texte}"</p>
            <span class="auteur">- ${avis.auteur} · ${avis.source}</span>
        `;
        
        container.appendChild(card);
    });
}

// Auto-scroll du carrousel
let autoScrollInterval;
let isPaused = false;

function startAutoScroll() {
    const container = document.getElementById('slider-container');
    if (!container) return;

    autoScrollInterval = setInterval(() => {
        if (!isPaused) {
            const scrollAmount = container.scrollLeft + 340; // 320px (largeur carte) + 20px (gap)
            const maxScroll = container.scrollWidth - container.clientWidth;
            
            if (scrollAmount >= maxScroll) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: 340, behavior: 'smooth' });
            }
        }
    }, 4000); // Change toutes les 4 secondes
}

function pauseAutoScroll() {
    isPaused = true;
}

function resumeAutoScroll() {
    isPaused = false;
}

// Module étoiles interactif
const stars = document.querySelectorAll(".star");
const sendButton = document.getElementById("send-rating");
let selectedRating = 0;

// Liens pour les redirections selon les notes
// Pour les notes ≤ 3 étoiles : formulaire Google Forms
const lienFormulaireMauvaiseNote = "https://forms.gle/52y8FuJ372GcMA8d6";
// Pour les notes ≥ 4 étoiles : redirection vers Google (à remplacer par votre lien Google Business/Maps)
const lienGoogleReview = "https://www.google.com/maps/search/?api=1&query={{nom_business}}+{{ville_business}}";

function updateStars(value) {
    stars.forEach(star => {
        const v = parseInt(star.dataset.value);
        star.classList.toggle("active", v <= value);
    });
    sendButton.disabled = value === 0;
}

stars.forEach(star => {
    star.addEventListener("click", () => {
        selectedRating = parseInt(star.dataset.value);
        updateStars(selectedRating);
    });

    star.addEventListener("mouseenter", () => {
        const value = parseInt(star.dataset.value);
        stars.forEach(s => {
            const v = parseInt(s.dataset.value);
            s.classList.toggle("active", v <= value);
        });
    });
});

// Réinitialiser les étoiles au survol si aucune n'est sélectionnée
document.querySelector(".stars").addEventListener("mouseleave", () => {
    if (selectedRating === 0) {
        stars.forEach(star => star.classList.remove("active"));
    } else {
        updateStars(selectedRating);
    }
});

sendButton.addEventListener("click", () => {
    if (!selectedRating) return;

    const target = selectedRating <= 3 ? lienFormulaireMauvaiseNote : lienGoogleReview;
    window.open(target, "_blank");
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    renderAvis();
    startAutoScroll();

    const sliderContainer = document.getElementById('slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', pauseAutoScroll);
        sliderContainer.addEventListener('mouseleave', resumeAutoScroll);
        sliderContainer.addEventListener('scroll', () => {
            pauseAutoScroll();
            setTimeout(resumeAutoScroll, 2000); // Reprend après 2 secondes d'inactivité
        });
    }
});

