// Gestion du formulaire de contact WhatsApp
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById("contactForm");
    
    if (!contactForm) return;

    // Variables (à remplacer par les variables du template)
    const phoneWhatsApp = "33767293039"; // Format international sans +
    const nomSalon = "{{nom_salon}}";

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const tel = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const msg = document.getElementById("message").value;

        const finalMessage = `
Nouvelle demande ${nomSalon} :
———————————————
Nom : ${name}
Email : ${email}
Téléphone : ${tel}
Objet : ${subject}

Message :
${msg}

———————————————
Envoyé depuis le site web ${nomSalon}.
        `.trim();

        const encoded = encodeURIComponent(finalMessage);
        window.location.href = `https://wa.me/${phoneWhatsApp}?text=${encoded}`;
    });
});

