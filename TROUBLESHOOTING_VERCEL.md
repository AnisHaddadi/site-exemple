# 🔍 Dépannage - Site non visible sur Vercel

## Vérifications à faire

### 1. Avez-vous créé un projet sur Vercel ?

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Vérifiez si vous voyez des projets dans la liste
3. Si vous ne voyez rien, vous devez d'abord créer/importer un projet

### 2. Avez-vous poussé votre code sur GitHub ?

**Vérifiez si votre code est sur GitHub :**
- Allez sur [github.com](https://github.com)
- Vérifiez si vous avez un repository avec votre code

**Si vous n'avez PAS encore créé le repository GitHub :**

1. Créez un nouveau repository sur GitHub :
   - [github.com/new](https://github.com/new)
   - Nommez-le (ex: `site-exemple-premium`)
   - Ne cochez PAS "Initialize with README"
   - Cliquez sur **Create repository**

2. Puis dans votre terminal, exécutez (remplacez USERNAME et REPO_NAME) :
```bash
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3. Avez-vous importé le projet sur Vercel ?

**Pour importer un projet :**

1. Allez sur [vercel.com/new](https://vercel.com/new)
2. Cliquez sur **Import Git Repository**
3. Si vous ne voyez pas votre repository :
   - Cliquez sur **Adjust GitHub App Permissions**
   - Autorisez Vercel à accéder à vos repositories
   - Revenez et rafraîchissez la page
4. Sélectionnez votre repository
5. Cliquez sur **Import**

### 4. Le projet est-il en cours de déploiement ?

1. Allez sur votre dashboard Vercel
2. Cliquez sur votre projet
3. Regardez l'onglet **Deployments**
4. Vous devriez voir un déploiement en cours ou terminé

### 5. Où trouver l'URL de votre site ?

1. Dans votre dashboard Vercel
2. Cliquez sur votre projet
3. L'URL est affichée en haut (ex: `votre-site.vercel.app`)
4. Ou allez dans l'onglet **Settings** → **Domains**

## 🚀 Déploiement rapide (si rien n'est fait)

### Méthode la plus simple : Vercel CLI

1. **Installez Vercel CLI** (si pas déjà fait) :
```bash
npm install -g vercel
```

2. **Dans le dossier de votre projet, exécutez :**
```bash
vercel
```

3. **Suivez les instructions :**
   - Login avec votre compte Vercel
   - Link to existing project ou Create new
   - Confirmez les paramètres
   - Le site sera déployé !

4. **Ajoutez la variable d'environnement :**
```bash
vercel env add OPENAI_API_KEY
```
   - Entrez votre clé API quand demandé
   - Sélectionnez tous les environnements

5. **Redéployez :**
```bash
vercel --prod
```

## 📋 Checklist complète

- [ ] Code commité dans Git (fait ✅)
- [ ] Repository GitHub créé
- [ ] Code poussé sur GitHub
- [ ] Projet importé sur Vercel
- [ ] Variable d'environnement `OPENAI_API_KEY` ajoutée
- [ ] Déploiement réussi
- [ ] URL du site obtenue

## ❓ Où êtes-vous bloqué exactement ?

Dites-moi à quelle étape vous êtes et je vous aiderai plus précisément :
- Vous n'avez pas encore créé le repository GitHub ?
- Vous avez créé le repo mais pas poussé le code ?
- Vous avez poussé le code mais pas importé sur Vercel ?
- Vous avez importé mais le déploiement échoue ?
- Autre problème ?

