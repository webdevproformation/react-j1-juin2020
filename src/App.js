import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './First.jsx'; // facultatif ne pas ajouter l'extension du fichier 
import Rappel from "./Rappel";
import Suite from "./Suite";


function App() {
  return (
    <div>
      <h2>Aujourd'hui</h2>
      <Suite />
      <hr />
      <h2>Hier</h2>
      <Rappel />
    </div>
  );
}

export default App;
