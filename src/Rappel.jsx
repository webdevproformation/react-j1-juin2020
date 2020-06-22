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
    }
};

class Rappel extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>{nomComposant} en javascript ES6</h1>
                <p>Je m'appelle : {person.nom}</p>
            </div>
        );
    }
}

export default Rappel;