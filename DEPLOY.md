# Deploiement — Portfolio Carboni Hospitality

> Framework : **Vite + React**
> Build command : `npm run build`
> Output directory : `dist`

---

## Option A — Netlify (recommande, le plus rapide)

### Methode 1 : Drag & Drop (URL en 30 secondes)

1. Ouvrir un terminal et lancer :
   ```bash
   cd "/Users/shadow/Desktop/Projet Site /portfolio-carboni-hospitality"
   npm run build
   ```
2. Aller sur **https://app.netlify.com/drop**
3. Glisser-deposer le dossier `dist/` sur la page
4. Netlify genere une URL instantanee : `https://<random>.netlify.app`
5. (Optionnel) Cliquer "Site settings" > "Change site name" pour personnaliser :
   `https://carboni-hospitality.netlify.app`

### Methode 2 : Connexion GitHub (auto-deploy a chaque push)

1. Aller sur **https://app.netlify.com** > Se connecter (ou creer un compte gratuit)
2. Cliquer **"Add new site"** > **"Import an existing project"**
3. Choisir **GitHub** > Autoriser l'acces > Selectionner le repo :
   `shadowxxx-bot/portfolio-carboni-hospitality`
4. Verifier les parametres (auto-detectes grace a `netlify.toml`) :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
5. Cliquer **"Deploy site"**
6. Attendre ~1 minute > L'URL apparait en haut de la page :
   `https://<nom-genere>.netlify.app`
7. (Optionnel) "Site settings" > "Change site name" > entrer `carboni-hospitality`
   → URL finale : **https://carboni-hospitality.netlify.app**

---

## Option B — Vercel

1. Aller sur **https://vercel.com** > Se connecter avec GitHub
2. Cliquer **"Add New..."** > **"Project"**
3. Importer le repo `shadowxxx-bot/portfolio-carboni-hospitality`
4. Verifier les parametres :
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
5. Cliquer **"Deploy"**
6. URL finale : `https://portfolio-carboni-hospitality.vercel.app`

---

## Avant de deployer : pousser les changements

```bash
cd "/Users/shadow/Desktop/Projet Site /portfolio-carboni-hospitality"
git add -A
git commit -m "neon buttons, door animation fix, deploy config"
git push origin main
```

## Fichiers de config deja presents

| Fichier         | Role                                        |
|-----------------|---------------------------------------------|
| `netlify.toml`  | Build command + SPA redirect pour Netlify   |
| `vercel.json`   | SPA rewrite pour Vercel                     |
