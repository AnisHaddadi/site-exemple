// Chatbot intelligent
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("chatbot-button");
    const win = document.getElementById("chatbot-window");
    const input = document.getElementById("chatbot-input");
    const messages = document.getElementById("chatbot-messages");

    if (!btn || !win || !input || !messages) return;

    // Message de bienvenue
    const messageBienvenue = "Bonjour ! Comment puis-je vous aider ?";

    // Ouvrir/fermer le chatbot
    btn.onclick = () => {
        const isOpen = win.style.display === "flex";
        win.style.display = isOpen ? "none" : "flex";
        
        if (!isOpen) {
            input.focus();
        }
    };

    // Ajouter un message
    function addMessage(content, type) {
        const div = document.createElement("div");
        div.className = type === "user" ? "message-user" : "message-bot";
        div.textContent = content;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    // Message de bienvenue
    addMessage(messageBienvenue, "bot");

    // Gestion de l'envoi de message
    input.addEventListener("keydown", async (e) => {
        if (e.key === "Enter" && input.value.trim() !== "") {
            const text = input.value.trim();
            input.value = "";
            addMessage(text, "user");

            // Afficher un indicateur de chargement
            const loadingDiv = document.createElement("div");
            loadingDiv.className = "message-bot";
            loadingDiv.textContent = "Réflexion en cours...";
            messages.appendChild(loadingDiv);
            messages.scrollTop = messages.scrollHeight;

            try {
                const res = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: text })
                });

                if (!res.ok) {
                    throw new Error('Erreur réseau');
                }

                const data = await res.json();
                
                // Retirer l'indicateur de chargement
                messages.removeChild(loadingDiv);
                
                // Ajouter la réponse
                addMessage(data.reply, "bot");
            } catch (error) {
                // Retirer l'indicateur de chargement
                messages.removeChild(loadingDiv);
                
                // Message d'erreur
                addMessage("Désolé, une erreur s'est produite. Veuillez réessayer plus tard.", "bot");
                console.error('Erreur chatbot:', error);
            }
        }
    });
});

