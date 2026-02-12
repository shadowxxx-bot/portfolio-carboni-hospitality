# Portfolio Carboni Hospitality

Portfolio professionnel construit avec React, TypeScript, Vite et shadcn-ui.

## Technologies utilisées

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **UI Components**: shadcn-ui + Radix UI
- **Styling**: Tailwind CSS
- **Backend**: Supabase (optionnel)

## Installation

### Prérequis

- Node.js v22.x ou supérieur
- npm v10.x ou supérieur

### Étapes

```sh
# 1. Cloner le repository
git clone https://github.com/shadowxxx-bot/portfolio-carboni-hospitality.git

# 2. Aller dans le dossier du projet
cd portfolio-carboni-hospitality

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur **http://localhost:8080/**

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## Variables d'environnement

Créer un fichier `.env` à la racine avec les variables suivantes (si tu utilises Supabase) :

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

## Structure du projet

```
portfolio-carboni-hospitality/
├── src/                # Code source
│   ├── components/     # Composants React
│   ├── pages/          # Pages de l'application
│   └── ...
├── public/             # Fichiers statiques
├── index.html          # Point d'entrée HTML
├── vite.config.ts      # Configuration Vite
└── package.json        # Dépendances et scripts
```

## Déploiement

Le projet peut être déployé sur :
- Vercel
- Netlify
- GitHub Pages
- Ou tout hébergeur supportant les sites statiques

## Licence

Propriétaire - Tous droits réservés
