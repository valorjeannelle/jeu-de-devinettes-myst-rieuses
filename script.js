const musique = new Audio("./audio/geoffharvey-magic-in-the-air-43177.mp3");
musique.loop = true;


const sonBonne = new Audio("./audio/freesound_gamestudio-great-success-384935.mp3");
const sonMauvaise = new Audio("./audio/universfield-fail-trumpet-144746.mp3");


const hero = document.querySelector("#hero");
const jeu = document.querySelector("#jeu");
const btnCommencer = document.querySelector("#btn-commencer");


const btnSuivant = document.querySelector("#btn-suivant");

const conteneurReponses = document.querySelector(".btn-reponses");
const devinette = document.querySelector("#devinette");
const score = document.querySelector("#score span");

const finPartie = document.querySelector("#fin-partie");
const scoreFinal = document.querySelector("#score-final");
const btnRejouer = document.querySelector("#btn-rejouer");

const partie = document.querySelector("#en-tete");

let scoreActuel = 0;
let numeroDevinette = 0;
let repondu = false;



hero.hidden = false;
jeu.hidden = true;
btnSuivant.hidden = true;
finPartie.hidden = true;


btnCommencer.addEventListener("click", () => {
    musique.play();
    hero.hidden = true;
    jeu.hidden = false;
    ObtenirDevinette();
});

function ObtenirDevinette() {
    fetch("./devinettes.json")
        .then((reponse) => {
            console.log(reponse.status);
            return reponse.json();
        })
        .then((data) => {

            conteneurReponses.textContent = "";
            repondu = false;
            btnSuivant.hidden = true;

            // Choisir la bonne devinette
            const index = Math.floor(Math.random() * data.length);

            let indexAleatoire = Math.floor(Math.random() * data.length);
            const indexUtilises = [index];

            // Afficher la question
            const question = data[index].question;
            devinette.textContent = question;

            // Créer les 4 boutons
            const bouton = [
                document.createElement("button"),
                document.createElement("button"),
                document.createElement("button"),
                document.createElement("button")
            ];

            // Ajouter 3 mauvaises réponses
            for (let i = 0; i < 3; i++) {

                while (indexUtilises.includes(indexAleatoire)) {
                    indexAleatoire = Math.floor(Math.random() * data.length);
                }

                indexUtilises.push(indexAleatoire);
            }

            // Mélanger les 4 réponses
            for (let i = indexUtilises.length - 1; i > 0; i--) {

                const positionAleatoire =
                    Math.floor(Math.random() * (i + 1));

                const temporaire = indexUtilises[i];

                indexUtilises[i] =
                    indexUtilises[positionAleatoire];

                indexUtilises[positionAleatoire] =
                    temporaire;
            }

            // Afficher les réponses
            for (let i = 0; i < indexUtilises.length; i++) {

                const reponse =
                    data[indexUtilises[i]].reponse;

                bouton[i].textContent = reponse;

                bouton[i].addEventListener("click", () => {

                    // Empêcher plusieurs clics
                    if (repondu) {
                        return;
                    }

                    repondu = true;

                    // Vérifier la réponse
                    if (reponse === data[index].reponse) {
                        scoreActuel = scoreActuel + 1;
                        score.textContent = scoreActuel;
                        bouton[i].classList.add("correcte");
                        sonBonne.currentTime=0;
                        sonBonne.play();

                    } else {
                        bouton[i].classList.add("incorrecte");

                        for (let j = 0; j < bouton.length; j++) {
                            if (bouton[j].textContent === data[index].reponse) {
                                bouton[j].classList.add("correcte");
                                }
                            }
                            sonMauvaise.currentTime = 0;
                            sonMauvaise.play();
                        }
                    
                    btnSuivant.hidden = false;
                });

                conteneurReponses.append(bouton[i]);
            }
        });
}


// Bouton Suivant
btnSuivant.addEventListener("click", () => {

    numeroDevinette++;

    if (numeroDevinette < 5) {

        ObtenirDevinette();

    } else {

        // Afficher l'écran de fin
        partie.hidden = true;
        finPartie.hidden = false;

        scoreFinal.textContent = scoreActuel + " / 5";

        btnSuivant.hidden = true;
    }
});


btnRejouer.addEventListener("click", () => {
    
    scoreActuel = 0;
    numeroDevinette = 0;
   

    score.textContent = 0;

    finPartie.hidden = true;
    partie.hidden = false;

    ObtenirDevinette();
});