import React, { Component } from 'react'; // importer la lib react qui est dans le dossier node_modules imrc

// objet : finir les concepts de l'ES6 


//  spread operator : nouveauté de l'ES6
// créer deux tableaux 

const jours = ["Lundi", "Mardi", "Mercredi"];
const finJours = ["Jeudi", "Vendredi", "Samedi"];

// fusionner => concatener dans un seul tableau / deux tableaux => via ce nouvel opérateur  ...  (+ - / )

const semaine = [...jours, ...finJours]; // si on veut parcourir un tableau dans react .map()


class Suite extends Component { // cc
    state = {}
    render() {
        return (
            <div>
                <ul>
                    {semaine.map(el => <li>{el}</li>) /** la variable el correspond à chaque item dans le tableau */}
                </ul>
            </div>

        );
    }
}

export default Suite;

// composant il faut le rattacher au composant racine (root) de notre application React
// composant root => App.js