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
let action = "marcher";
// syntaxe tableau pour appeler une méthode d'un objet

class Rappel extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>{nomComposant} en javascript ES6</h1>
                <p>Je m'appelle : {person.nom} {person.parler()}</p>
                <p>{person.marcher()}</p>
                <p>{person[action]()}</p>
            </div>
        );
    }
}

export default Rappel;

// https://github.com/webdevproformation/react-j1-juin2020