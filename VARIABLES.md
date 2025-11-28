# Liste des Variables à Remplacer

Ce document liste toutes les variables à remplacer dans les fichiers du site pour l'adapter à un vrai client.

## Variables Globales

### Informations Business
- `{{nom_business}}` - Nom de l'entreprise/business
- `{{ville_business}}` - Ville où se trouve le business
- `{{nom_salon}}` - Nom spécifique du salon (si différent de nom_business)
- `{{ville_salon}}` - Ville du salon (si différent de ville_business)

### Design
- `{{couleur_primaire}}` - Couleur principale du site (ex: #c6a664)

### API & Configuration
- `{{openai_api_key_env}}` - Nom de la variable d'environnement pour la clé API OpenAI (ex: OPENAI_API_KEY)

## Variables Page d'Accueil (index.html)

- `{{titre_demo_hero}}` - Titre principal de la page d'accueil (ex: "Ceci est un exemple de site web")
- `{{texte_demo_hero}}` - Sous-titre de la page d'accueil (ex: "Ce site est une démo pour montrer ce que nous pouvons créer pour votre salon / entreprise.")

## Variables Page Avis (avis.html)

### Introduction
- `{{titre_page_avis}}` - Titre de la page avis
- `{{texte_intro_avis}}` - Texte d'introduction de la page avis

### Données Avis
- `{{avis_data}}` - Tableau JSON avec les données des avis (voir structure dans avis.js)

Structure d'un avis :
```json
{
    "note": 5,
    "texte": "Texte de l'avis",
    "auteur": "Nom du client",
    "source": "Avis Google"
}
```

### Liens Module Étoiles
- `{{lien_formulaire_mauvaise_note}}` - Lien vers formulaire pour notes 1-3
- `{{lien_google_review}}` - Lien vers avis Google pour notes 4-5

## Variables Page Contact (contact.html)

- `{{phone_whatsapp}}` - Numéro WhatsApp au format international sans + (ex: 33612345678)
- `{{texte_intro_contact}}` - Texte d'introduction de la page contact
- `{{image_header_contact}}` - URL ou chemin de l'image en haut de la page contact
- `{{email_conciergerie}}` - Email pour la conciergerie
- `{{email_evenementiel}}` - Email pour l'événementiel
- `{{email_groupes}}` - Email pour les groupes
- `{{adresse_salon}}` - Adresse complète du salon (pour Google Maps)

## Variables Chatbot

- `{{message_bienvenue}}` - Message de bienvenue du chatbot (ex: "Bonjour ! Je suis là pour répondre à vos questions sur {{nom_business}}.")

## Comment Remplacer les Variables

### Méthode 1 : Recherche/Remplacement
Utilisez la fonction de recherche/remplacement de votre éditeur pour remplacer toutes les occurrences de chaque variable.

### Méthode 2 : Template Engine
Si vous utilisez un système de build (comme Vite, Next.js, etc.), vous pouvez utiliser un template engine pour remplacer automatiquement les variables.

### Méthode 3 : Script de Remplacement
Créez un script Node.js qui lit les fichiers et remplace toutes les variables en une fois.

## Exemple de Configuration

```javascript
const config = {
    nom_business: "Mon Salon Premium",
    ville_business: "Paris",
    nom_salon: "Mon Salon Premium",
    ville_salon: "Paris",
    couleur_primaire: "#c6a664",
    openai_api_key_env: "OPENAI_API_KEY",
    titre_demo_hero: "Bienvenue chez Mon Salon Premium",
    texte_demo_hero: "Découvrez nos services de qualité exceptionnelle.",
    titre_page_avis: "Ce que nos clients disent de nous",
    texte_intro_avis: "Votre satisfaction est notre priorité.",
    lien_formulaire_mauvaise_note: "https://forms.google.com/...",
    lien_google_review: "https://g.page/r/.../review",
    phone_whatsapp: "33612345678",
    texte_intro_contact: "Contactez-nous pour toute demande.",
    image_header_contact: "/images/contact-header.jpg",
    email_conciergerie: "conciergerie@monsalon.fr",
    email_evenementiel: "evenementiel@monsalon.fr",
    email_groupes: "groupes@monsalon.fr",
    adresse_salon: "123 Rue Example, 75001 Paris, France",
    message_bienvenue: "Bonjour ! Je suis là pour répondre à vos questions sur Mon Salon Premium."
};
```

