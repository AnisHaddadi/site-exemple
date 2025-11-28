import OpenAI from "openai";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    // Configuration de la clé API OpenAI
    // La clé doit être définie dans les variables d'environnement
    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    
    if (!process.env.OPENAI_API_KEY) {
        return res.status(500).json({ 
            error: "Clé API OpenAI non configurée",
            message: "Veuillez configurer la variable d'environnement OPENAI_API_KEY"
        });
    }

    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message requis" });
    }

    try {
        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `
Tu es un assistant pour un site web professionnel.
Ton style doit être :
- professionnel
- chaleureux
- utile
- concis

NE JAMAIS inventer de prix si on te les demande.
Si le client demande les tarifs : réponds "Les prix varient selon la prestation. Précisez ce que vous souhaitez et je vous guide."
                    `.trim()
                },
                { role: "user", content: message }
            ],
            temperature: 0.7,
            max_tokens: 500
        });

        res.status(200).json({
            reply: completion.choices[0].message.content
        });
    } catch (error) {
        console.error('Erreur OpenAI:', error);
        res.status(500).json({ 
            error: "Erreur lors de la génération de la réponse",
            message: error.message 
        });
    }
}

