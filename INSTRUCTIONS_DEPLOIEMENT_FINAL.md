# 🚀 Déploiement Final avec Clé API

## Méthode la plus simple : Via le Dashboard Vercel

### Étape 1 : Ajouter la variable d'environnement

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur votre projet **site-exemple**
3. Allez dans **Settings** (en haut)
4. Cliquez sur **Environment Variables** (dans le menu de gauche)
5. Ajoutez une nouvelle variable :
   - **Key** : `OPENAI_API_KEY`
   - **Value** : votre clé API OpenAI (commence par `sk-...`)
   - Cochez **Production**, **Preview**, et **Development**
6. Cliquez sur **Save**

### Étape 2 : Redéployer

1. Allez dans l'onglet **Deployments**
2. Cliquez sur les **3 points** (⋯) du dernier déploiement
3. Cliquez sur **Redeploy**
4. Confirmez le redéploiement

**OU** utilisez cette commande dans votre terminal :

```bash
vercel --prod --yes
```

### Étape 3 : Vérifier

1. Ouvrez l'URL de votre site
2. Testez le chatbot (bouton "Chat" en bas à droite)
3. Il devrait maintenant répondre !

---

## Alternative : Via Terminal (si vous préférez)

Si vous voulez ajouter la variable via terminal :

```bash
# Ajouter la variable d'environnement
vercel env add OPENAI_API_KEY production
# Entrez votre clé API quand demandé

# Ajouter aussi pour preview et development
vercel env add OPENAI_API_KEY preview
vercel env add OPENAI_API_KEY development

# Redéployer
vercel --prod --yes
```

---

## ✅ Checklist

- [ ] Variable `OPENAI_API_KEY` ajoutée sur Vercel
- [ ] Variable configurée pour Production, Preview, et Development
- [ ] Site redéployé
- [ ] Chatbot testé et fonctionnel

---

**Une fois fait, votre chatbot sera opérationnel !** 🤖

