import React, { Component } from 'react'; // imrc 

// version de javascript ES6
// quand on travaille sur React 
// utiliser une version spéciale de javascript 
// la version ES6 

// 1ère remarque 
// ne jamais utiliser le mot clé var
// lorsque l'on crée des variables
// toujours utiliser les mots clé
// const et let 

let nomComposant = "Des rappels";

// nous allons utiliser enormément les objets
// pour coder dans React 

const person = {
    nom: "Béatrice", // propriété
    parler: function () { // méthode
        console.log("je parle");
    },
    marcher() { // syntaxe ES6 pour créer de méthode d'objet 
        return "je marche ";
    }
};

// créer une variable
let action = "parler";
// syntaxe tableau pour appeler une méthode d'un objet

// le mot clé this 
// mot clé que l'on va beaucoup utiliser lorsque l'on fait du React 

const formation = {
    nom: "Découverte React en 1 semaine",
    description: function () {
        return "La formation s'appelle " + this.nom;
    }
}

let actionFormation = formation.description.bind(formation);
// Attention pas de ()
// stocker une référence de la fonction description dans la variable actionFormation

// message d'erreur  => this is undefined
// this a perdu son contexte d'exécution 
// on est obligé d'ajouter .bind(formation); pour garantir que this conserve le contexte d'exécution (action => .bind(formation))

// arrow function en javascript 

// créer une fonction de manière classique

const aireCarre = function (largeur) {
    return largeur * largeur;
}

// avec l'arrivée de l'ES6 => nouvelle manière de créer des fonctions

const aireCarre2 = (largeur) => { // arrow function = fonction fléchée
    return largeur * largeur;
}

// les fonctions fléchées disposent de syntaxes à connaitre

// si jamais la fonction fléchée ne dispose que d'un seul paramuètre
// vous pouvez enlever les pranthèses

const aireCercle = rayon => {
    return rayon * rayon * 3.14;
}

// si jamais vous avez 1 seule instruction dans les accolades 
// de la fonction fléchée enlever les accolades ET aussi le mot clé return

const saluation = nom => "bonjour " + nom;
/*
const salutation = ( nom ) => {
    return "bonjour " + nom;
}
*/

/**
.filter() méthode à utiliser sur les tableaux
 */

const planning = [
    { id: 1, "nom": "JS", isActif: false },
    { id: 2, "nom": "React", isActif: true }
];
// je veux récupérer l'ensemble des matières sont en status isActif = true
// filter a une fonction comme argument // callback
let list = planning.filter(function (el) { return el.isActif === true });

console.log(list);

// au manière d'écrire le filtre précédent

let list2 = planning.filter(el => el.isActif === true);

console.log(list2);
//utilise beaucoup les arrow function lorsque l'on 
// écrit des callback

class Rappel extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>{nomComposant} en javascript ES6</h1>
                <p>Je m'appelle : {person.nom} {person.parler()}</p>
                <p>{person.marcher()}</p>
                <p>{person[action]()}</p>
                <hr />
                <p>{formation.description()}</p>
                <p>{actionFormation()}</p>
                <hr />
                <h2>Arrow function</h2>
                <p>{aireCarre2(10)}</p>
                <p>{aireCercle(20)}</p>
                <p>{saluation("Jean")}</p>

            </div>
        );
    }
}

export default Rappel;

// https://github.com/webdevproformation/react-j1-juin2020