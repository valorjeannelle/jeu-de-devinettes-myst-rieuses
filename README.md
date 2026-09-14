# 🔮 Devinettes Mystérieuses

**Devinettes Mystérieuses** est un petit jeu de devinettes développé en **JavaScript**.
Le joueur doit résoudre une série de 5 devinettes en choisissant la bonne réponse parmi plusieurs propositions.

👉 **[Jouer à Devinettes Mystérieuses](https://valorjeannelle.github.io/jeu-de-devinettes-myst-rieuses/)**

Ce projet est une évolution d'une première version du jeu. Cette nouvelle version m'a permis de retravailler la logique JavaScript, l'interface et l'expérience utilisateur.

## 🎮 Fonctionnalités

* 5 devinettes par partie
* 4 propositions de réponse pour chaque devinette
* Sélection aléatoire des devinettes
* Mélange aléatoire des réponses
* Gestion du score
* Affichage de la bonne et de la mauvaise réponse
* Bouton pour passer à la devinette suivante
* Écran de fin avec le score final
* Possibilité de rejouer
* Effets sonores selon la réponse
* Musique d'ambiance
* Interface responsive

## 🛠️ Technologies utilisées

* **HTML5** — structure de l'application
* **CSS3** — mise en page, animations et responsive design
* **JavaScript** — logique du jeu et interactions
* **JSON** — stockage des devinettes et des réponses

## 🧩 Fonctionnement

Au lancement, le joueur arrive sur l'écran d'accueil.

Après avoir cliqué sur **Commencer** :

1. Une devinette est sélectionnée aléatoirement.
2. Quatre réponses sont générées.
3. Les réponses sont mélangées.
4. Le joueur sélectionne une réponse.
5. La réponse choisie est indiquée comme correcte ou incorrecte.
6. Le score est mis à jour si la réponse est correcte.
7. Le joueur passe à la question suivante.
8. Après 5 questions, le score final est affiché.

Le joueur peut ensuite recommencer une nouvelle partie.

## 🎨 Interface

L'interface utilise une identité visuelle inspirée de l'univers **mystérieux et magique**, avec :

* une palette violette ;
* une mascotte fantôme ;
* des animations légères ;
* une typographie inspirée du style fantastique ;
* des boutons avec un effet 3D ;
* une adaptation aux écrans mobiles et desktop.

## 📁 Structure du projet

```text
devinettes-mysterieuses/
│
├── index.html
├── style.css
├── script.js
├── devinettes.json
│
├── audio/
│   ├── musique.mp3
│   ├── bonne-reponse.mp3
│   └── mauvaise-reponse.mp3
│
└── images/
    └── fantome.jpg
```

## 🚀 Lancer le projet

Clone le dépôt puis ouvre le projet dans ton éditeur de code.

Comme le jeu utilise `fetch()` pour récupérer le fichier JSON, il est recommandé de le lancer avec un **serveur local** plutôt que d'ouvrir directement `index.html`.

Par exemple avec VS Code et **Live Server**.

## 📚 Ce que ce projet m'a permis de pratiquer

Ce projet m'a notamment permis de travailler sur :

* la manipulation du DOM ;
* les événements JavaScript ;
* les tableaux et les boucles ;
* la génération dynamique d'éléments HTML ;
* la récupération de données avec `fetch()` ;
* l'utilisation d'un fichier JSON ;
* la gestion d'un état de jeu ;
* la gestion du score ;
* la lecture de fichiers audio avec JavaScript ;
* le responsive design ;
* l'amélioration d'une interface existante.

## 🌱 Évolution du projet

Ce projet représente également une étape de mon évolution en développement web : plutôt que de simplement créer un nouveau projet, j'ai repris une réalisation existante pour comprendre ce qui pouvait être amélioré et la faire évoluer.

---

**Projet réalisé dans le cadre de mon apprentissage du développement web.**
