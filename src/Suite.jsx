import React, { Component } from 'react'; // importer la lib react qui est dans le dossier node_modules imrc
import { Person } from "./Person";
// objet : finir les concepts de l'ES6 


let p = new Person("Malik");
p.parler();

//  spread operator : nouveauté de l'ES6
// créer deux tableaux 

const jours = ["Lundi", "Mardi", "Mercredi"];
const finJours = ["Jeudi", "Vendredi", "Samedi"];

// fusionner => concatener dans un seul tableau / deux tableaux => via ce nouvel opérateur  ...  (+ - / )

const semaine = [...jours, ...finJours]; // si on veut parcourir un tableau dans react .map()

// fusion  des objets 
const animal = {
    nom: "Croquette"
}

const chat = {
    age: 5
}

const monChat = {
    ...animal,
    ...chat
}
console.log(monChat);

// trois tableaux
const a = [1, 2, 3]; // const évite que tu change le typage de ta variable pour les tableaux // 
// variables number / string / boolean typage ET la valeur
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html
const b = [...a]; //b contient un clone de a // recréer dans l'ordinateur une nouvelle zone mémoire dédiée et independante pour cette valeur 
const c = a; // copie par référence du tableau a danc c // stocke l'adresse mémoire 

c.push(4);
a.push(5);

// attention si vous stocker un tableau dans un autre et que vous modifiez le tableau final
// le tableau initial est AUSSI modifié
console.log(a, b, c);

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