# DiscoverMergeTactic

## INSTALLATION RAPIDE

<span style="color:red; font-weight:bold;">⚠ NE FAIRE QU'UNE SEULE FOIS ⚠</span>  
`npm run install:all` : installation de tous les modules NodeJS, frontend React et backend nécessaires au lancement de l'application.

---

`npm start` : lancement simultané des serveurs frontend et backend sur deux ports différents :  
- Frontend : `http://localhost:7654`  
- Backend : `http://localhost:3000`

## ARBORESCENCE

```
DiscoverMergeTactic/
├─ frontend/
│ ├─ public/
│ │ ├─ assets/
│ │ │ ├─ background
│ │ │ │ ├─ banniere.png
│ │ │ │ └─ ...
│ │ │ ├─ img
│ │ │ │ ├─ archer.png
│ │ │ │ ├─ archerqueen.png
│ │ │ │ └─ ...
│ │ │ └─ logo
│ │ │   ├─ logo.png
│ │ │   └─ ...
│ │ ├─ index.html
│ │ └─ ...
│ ├─ src/
│ │ ├─ components/
│ │ │ ├─ style
│ │ │ │ ├─ NavBar.css
│ │ │ │ ├─ CardItem.css
│ │ │ │ ├─ Footer.css
│ │ │ │ ├─ HeroBanner.css
│ │ │ │ ├─ LeaderItem.css
│ │ │ │ ├─ Loader.css
│ │ │ │ └─ NavBar.css
│ │ │ ├─ Banniere.jsx
│ │ │ ├─ CardItem.jsx
│ │ │ ├─ CardModal.jsx
│ │ │ ├─ FilterBar.jsx
│ │ │ ├─ Footer.jsx
│ │ │ ├─ HeroBanner.jsx
│ │ │ ├─ LeaderItem.jsx
│ │ │ ├─ LeaderModal.jsx
│ │ │ ├─ Loader.jsx
│ │ │ ├─ NavBar.jsx
│ │ │ └─ SearchBar.jsx
│ │ ├─ pages/
│ │ │ ├─ Home.jsx
│ │ │ ├─ Cards.jsx
│ │ │ ├─ Leaders.jsx
│ │ │ └─ About.jsx
│ │ ├─ services/
│ │ │ └─ api.js
│ │ ├─ App.js
│ │ ├─ App.css
│ │ ├─ index.js
│ │ ├─ index.css
│ │ └─ App.test.js
│ └─ package.json
├─ backend/
│ ├─ controllers/
│ │ ├─ cardsController.js
│ │ └─ rulersController.js
│ ├─ routes/
│ │ ├─ routes.js
│ │ ├─ cardsRoutes.js
│ │ └─ rulersRoutes.js
│ ├─ utils/
│ │ ├─ cards.js
│ │ ├─ categories.js
│ │ └─ rulers.js
│ ├─ server.js
│ └─ package.json
├─ package.json
└─ .gitignore
```