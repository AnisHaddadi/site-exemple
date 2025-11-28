# 🤖 Configuration du Chatbot IA

## Comment rendre le chatbot fonctionnel

Le chatbot utilise OpenAI GPT-4o-mini pour répondre aux questions. Voici comment le configurer :

### Étape 1 : Obtenir une clé API OpenAI

1. Allez sur [https://platform.openai.com/](https://platform.openai.com/)
2. Créez un compte ou connectez-vous
3. Allez dans **API Keys** (Clés API)
4. Cliquez sur **Create new secret key**
5. Copiez la clé (elle commence par `sk-...`)
   - ⚠️ **Important** : Sauvegardez-la, vous ne pourrez plus la voir après !

### Étape 2 : Configurer la clé selon votre plateforme

#### Option A : Déploiement sur Vercel (Recommandé)

1. Allez sur [https://vercel.com](https://vercel.com)
2. Créez un compte ou connectez-vous
3. Importez votre projet depuis GitHub
4. Dans les **Settings** du projet :
   - Allez dans **Environment Variables**
   - Ajoutez une nouvelle variable :
     - **Name** : `OPENAI_API_KEY`
     - **Value** : votre clé API (commence par `sk-...`)
   - Sélectionnez tous les environnements (Production, Preview, Development)
   - Cliquez sur **Save**
5. Redéployez votre site

#### Option B : Déploiement sur Netlify

1. Allez sur [https://netlify.com](https://netlify.com)
2. Créez un compte ou connectez-vous
3. Importez votre projet
4. Dans **Site settings** → **Environment variables** :
   - Ajoutez :
     - **Key** : `OPENAI_API_KEY`
     - **Value** : votre clé API
5. Redéployez

#### Option C : Test local avec Node.js

1. Créez un fichier `.env` à la racine du projet :
```env
OPENAI_API_KEY=sk-votre-cle-api-ici
```

2. Installez les dépendances :
```bash
npm install
```

3. Pour tester localement, vous aurez besoin d'un serveur Node.js. Créez un fichier `server.js` :
```javascript
import express from 'express';
import cors from 'cors';
import chatHandler from './api/chat.js';

const app = express();
app.use(cors());
app.use(express.json());

// Servir les fichiers statiques
app.use(express.static('.'));

// Route API pour le chatbot
app.post('/api/chat', chatHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

4. Installez les dépendances supplémentaires :
```bash
npm install express cors dotenv
```

5. Modifiez `package.json` pour charger les variables d'environnement :
```json
{
  "scripts": {
    "dev": "node --env-file=.env server.js",
    "start": "node --env-file=.env server.js"
  }
}
```

6. Lancez le serveur :
```bash
npm run dev
```

### Étape 3 : Vérifier que ça fonctionne

1. Ouvrez votre site
2. Cliquez sur le bouton "Chat" en bas à droite
3. Tapez un message (ex: "Bonjour")
4. Le chatbot devrait répondre !

### ⚠️ Coûts OpenAI

- GPT-4o-mini est très économique (environ $0.15 par million de tokens d'entrée)
- Pour un site avec peu de trafic, vous devriez rester dans la limite gratuite
- Surveillez votre utilisation sur [https://platform.openai.com/usage](https://platform.openai.com/usage)

### 🔒 Sécurité

- ⚠️ **NE JAMAIS** mettre votre clé API dans le code source
- ⚠️ **NE JAMAIS** commiter le fichier `.env` sur GitHub
- Utilisez toujours les variables d'environnement de votre plateforme

### 🐛 Dépannage

**Le chatbot ne répond pas :**
- Vérifiez que la clé API est bien configurée
- Vérifiez la console du navigateur (F12) pour voir les erreurs
- Vérifiez les logs de votre plateforme de déploiement

**Erreur "Clé API non configurée" :**
- Vérifiez que la variable d'environnement s'appelle exactement `OPENAI_API_KEY`
- Redéployez après avoir ajouté la variable

**Le chatbot répond en anglais :**
- Le prompt système est en français, mais si vous voulez forcer le français, modifiez `api/chat.js` :
```javascript
content: `
Tu es un assistant pour un site web professionnel.
Tu dois TOUJOURS répondre en français.
Ton style doit être :
- professionnel
- chaleureux
- utile
- concis
...
```

### 📝 Personnalisation

Pour personnaliser le comportement du chatbot, modifiez le prompt système dans `api/chat.js` (ligne 27-37).

