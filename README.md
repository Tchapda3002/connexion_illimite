# NetFlow - Site Vitrine

Site vitrine pour le service de connexion internet illimitée NetFlow.

## Déploiement sur Netlify (Gratuit)

### Méthode 1 : Drag & Drop (Plus Simple)
1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte gratuit
3. Dans le dashboard, faites glisser le dossier `TAS` directement sur la zone de dépôt
4. Votre site sera en ligne en quelques secondes !
5. Netlify vous donnera une URL comme : `https://votre-site.netlify.app`

### Méthode 2 : Via Git (Recommandé)
1. Créez un compte GitHub si vous n'en avez pas
2. Créez un nouveau repository sur GitHub
3. Dans le terminal, depuis le dossier TAS :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-username/netflow.git
   git push -u origin main
   ```
4. Sur Netlify, cliquez sur "New site from Git"
5. Connectez votre repository GitHub
6. Netlify déploiera automatiquement votre site

### Personnaliser le domaine
- Sur Netlify, allez dans "Domain settings"
- Vous pouvez utiliser un sous-domaine gratuit : `netflow.netlify.app`
- Ou connecter votre propre domaine personnalisé

## Déploiement sur Vercel (Alternative Gratuite)

1. Allez sur [vercel.com](https://vercel.com)
2. Créez un compte gratuit
3. Cliquez sur "New Project"
4. Importez depuis GitHub ou faites glisser le dossier
5. Vercel déploiera automatiquement

## Déploiement sur GitHub Pages (Gratuit)

1. Créez un repository GitHub
2. Poussez votre code
3. Allez dans Settings > Pages
4. Activez GitHub Pages
5. Votre site sera disponible à : `https://votre-username.github.io/netflow`

## Hébergement Traditionnel (FTP)

Si vous avez un hébergeur web classique :
1. Téléchargez tous les fichiers du dossier TAS
2. Utilisez un client FTP (FileZilla)
3. Uploadez tous les fichiers dans le dossier `public_html` ou `www`

## Configuration après déploiement

Vérifiez que :
- Les images dans le dossier `img/` sont bien uploadées
- Le numéro WhatsApp est correct dans `script.js`
- Tous les fichiers (HTML, CSS, JS, images) sont accessibles

## Structure du site

```
TAS/
├── index.html       # Page principale
├── styles.css       # Feuille de styles
├── script.js        # Logique JavaScript
├── img/            # Images du tutoriel
│   ├── 1.jpeg
│   ├── 2.jpeg
│   ├── 3.jpeg
│   └── 4.jpeg
└── README.md        # Ce fichier
```

## Support

Pour toute question, contactez TAS.

© 2026 TAS. Tous droits réservés.
