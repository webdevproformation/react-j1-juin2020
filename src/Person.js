// Person.js
// rappels sur les class en javascript 

// depuis la version ES6 => on peut désormais créer des class avec Javascript
// mot clé AVANT class => l'utiliser dans un autre fichier 
// chaque variable // fonction .... dans un fichier n'est  visible et utilisable que DANS ce fichier 
export class Person {
    nom;

    constructor(nom) {
        this.nom = nom;
        // exécutée automatique lorque l'on fait un new 
    }
    parler() {
        console.log("Bonjour je m'appelle " + this.nom);
    }
}
// class
// class extends Component => Composant react
// la class doit obligatoirement avoir la méthode render(){ }


// nous venons de créer une class 
// une propriété nom;
// méthode parler()

// utiliser cette class dans rappel 


