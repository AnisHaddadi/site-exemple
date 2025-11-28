# 🚀 Guide de Déploiement sur Vercel

## Méthode 1 : Via GitHub (Recommandé)

### Étape 1 : Créer un repository GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur **New repository** (ou le bouton + en haut à droite)
3. Nommez votre repository (ex: `site-exemple-premium`)
4. Ne cochez **PAS** "Initialize with README" (le repo est déjà initialisé)
5. Cliquez sur **Create repository**

### Étape 2 : Pousser votre code sur GitHub

Dans votre terminal, exécutez :

```bash
# Ajouter le remote GitHub (remplacez USERNAME et REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Pousser le code
git branch -M main
git push -u origin main
```

### Étape 3 : Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **Sign Up** ou **Log In**
3. Choisissez **Continue with GitHub** pour connecter votre compte GitHub
4. Cliquez sur **Add New Project**
5. Sélectionnez votre repository `site-exemple-premium`
6. Vercel détectera automatiquement les paramètres :
   - **Framework Preset** : Other (ou laissez par défaut)
   - **Root Directory** : `./` (racine)
   - **Build Command** : (laissez vide, pas de build nécessaire)
   - **Output Directory** : (laissez vide)
7. Cliquez sur **Environment Variables** et ajoutez :
   - **Name** : `OPENAI_API_KEY`
   - **Value** : votre clé API OpenAI
   - Cochez tous les environnements (Production, Preview, Development)
8. Cliquez sur **Deploy**

### Étape 4 : Vérifier le déploiement

- Vercel vous donnera une URL (ex: `votre-site.vercel.app`)
- Le site sera déployé en quelques secondes
- Testez le chatbot pour vérifier qu'il fonctionne !

---

## Méthode 2 : Via Vercel CLI (Alternative)

### Installation de Vercel CLI

```bash
npm install -g vercel
```

### Déploiement

```bash
# Dans le dossier de votre projet
vercel

# Suivez les instructions :
# - Login avec votre compte Vercel
# - Link to existing project ou Create new
# - Confirmez les paramètres
```

### Ajouter la variable d'environnement

```bash
vercel env add OPENAI_API_KEY
# Entrez votre clé API quand demandé
```

---

## Méthode 3 : Drag & Drop (Simple mais limité)

⚠️ **Note** : Cette méthode fonctionne pour les sites statiques, mais pour le chatbot avec API, utilisez la Méthode 1.

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous
3. Cliquez sur **Add New Project**
4. Cliquez sur **Browse** et sélectionnez votre dossier
5. Configurez les variables d'environnement
6. Déployez

---

## ✅ Vérifications Post-Déploiement

1. **Le site s'affiche correctement** : Ouvrez l'URL fournie par Vercel
2. **Le chatbot fonctionne** :
   - Cliquez sur le bouton "Chat"
   - Tapez un message
   - Vérifiez qu'il répond
3. **Les pages fonctionnent** :
   - Testez la navigation (Accueil → Contact → Avis)
   - Testez le formulaire WhatsApp
   - Testez le module étoiles

---

## 🔧 Dépannage

### Le chatbot ne répond pas

1. Vérifiez les logs Vercel :
   - Dashboard Vercel → Votre projet → Deployments → Cliquez sur le dernier → Functions → `/api/chat`
2. Vérifiez la variable d'environnement :
   - Settings → Environment Variables → Vérifiez que `OPENAI_API_KEY` existe
3. Vérifiez la console du navigateur (F12) pour les erreurs

### Erreur 404 sur `/api/chat`

- Vérifiez que le fichier `api/chat.js` est bien dans le repository
- Vérifiez que `vercel.json` est présent
- Redéployez le projet

### Le site ne se met pas à jour

- Vercel redéploie automatiquement à chaque push sur GitHub
- Ou allez dans Vercel → Votre projet → Deployments → Cliquez sur les 3 points → Redeploy

---

## 📝 Commandes Git utiles

```bash
# Voir l'état des fichiers
git status

# Ajouter tous les fichiers modifiés
git add .

# Créer un commit
git commit -m "Description des modifications"

# Pousser vers GitHub
git push

# Voir l'historique
git log
```

---

## 🎉 C'est tout !

Une fois déployé, votre site sera accessible via l'URL fournie par Vercel. Chaque modification poussée sur GitHub déclenchera automatiquement un nouveau déploiement.

