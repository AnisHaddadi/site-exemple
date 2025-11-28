# Site Vitrine Premium - Template Réutilisable

Un mini-site de démo complet avec design style Apple, incluant :
- ✅ Page d'accueil moderne
- ✅ Page d'avis clients avec carrousel interactif
- ✅ Page de contact reliée à WhatsApp
- ✅ Chatbot IA sur toutes les pages
- ✅ Design responsive (mobile, tablette, desktop)

## 🚀 Structure du Projet

```
.
├── index.html          # Page d'accueil
├── avis.html           # Page avis clients
├── contact.html        # Page contact WhatsApp
├── style.css           # Styles globaux style Apple
├── avis.js             # Scripts pour carrousel et module étoiles
├── contact.js          # Script formulaire WhatsApp
├── chatbot.js          # Script chatbot
├── api/
│   └── chat.js         # Backend API chatbot (OpenAI)
├── package.json        # Dépendances Node.js
└── VARIABLES.md        # Liste complète des variables à remplacer
```

## 📋 Prérequis

- Node.js 18+ installé
- Clé API OpenAI
- Compte WhatsApp Business (pour le formulaire de contact)

## 🛠️ Installation

1. **Installer les dépendances :**
```bash
npm install
```

2. **Configurer les variables d'environnement :**
Créez un fichier `.env` à la racine du projet :
```
OPENAI_API_KEY=votre_cle_api_openai
```

3. **Remplacer les variables dans les fichiers :**
Consultez `VARIABLES.md` pour la liste complète des variables à remplacer.

## 🎨 Personnalisation

### Variables Principales

Tous les fichiers contiennent des variables au format `{{variable}}` à remplacer :

- `{{nom_business}}` - Nom de l'entreprise
- `{{ville_business}}` - Ville
- `{{couleur_primaire}}` - Couleur principale (ex: #c6a664)
- `{{phone_whatsapp}}` - Numéro WhatsApp (format: 33612345678)
- Et bien d'autres... (voir VARIABLES.md)

### Couleur Principale

Pour changer la couleur principale, remplacez `{{couleur_primaire}}` dans tous les fichiers, ou modifiez la variable CSS dans `style.css` :

```css
:root {
    --couleur-primaire: #c6a664; /* Votre couleur */
}
```

## 🚀 Déploiement

### Sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre repository GitHub
3. Ajoutez la variable d'environnement `OPENAI_API_KEY` dans les paramètres du projet
4. Déployez !

### Sur Netlify

1. Créez un compte sur [Netlify](https://netlify.com)
2. Connectez votre repository
3. Configurez les variables d'environnement
4. Déployez !

## 📱 Fonctionnalités

### Chatbot IA
- Disponible sur toutes les pages
- Utilise OpenAI GPT-4o-mini
- Réponses contextuelles et professionnelles

### Carrousel d'Avis
- Défilement automatique
- Pause au survol
- Design premium avec scroll-snap

### Module Étoiles
- Système de notation 1-5 étoiles
- Redirection intelligente selon la note
- Design interactif

### Contact WhatsApp
- Formulaire moderne
- Envoi direct sur WhatsApp
- Formatage automatique du message

## 🔧 Configuration Backend

Le fichier `api/chat.js` nécessite un serveur Node.js. Pour Vercel, il sera automatiquement reconnu comme une fonction serverless.

Pour un serveur local, vous pouvez utiliser Express :

```javascript
import express from 'express';
import chatHandler from './api/chat.js';

const app = express();
app.use(express.json());
app.post('/api/chat', chatHandler);
app.listen(3000);
```

## 📝 Notes

- Toutes les images doivent être ajoutées dans un dossier `images/`
- Le chatbot nécessite une clé API OpenAI valide
- Le formulaire WhatsApp nécessite un numéro au format international (sans +)
- Les avis sont actuellement en dur dans `avis.js` - remplacez par vos données

## 🎯 Prochaines Étapes

1. Remplacer toutes les variables `{{variable}}`
2. Ajouter vos propres images
3. Configurer les liens Google Reviews
4. Personnaliser les couleurs et textes
5. Tester toutes les fonctionnalités
6. Déployer !

## 📄 Licence

MIT

