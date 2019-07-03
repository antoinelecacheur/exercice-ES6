import React from 'react';
import './App.css';
import essaiExport, { monExportNomme } from './MonExport'
import ExempleImport from './components/ExempleImport';

const test = (valeur = 10) => {
  return valeur;
}

const tableau1 = [0, "mon tableau", false]
const tableau2 = ["essayons ça", {nom: "antoine"}, ["hey"]];

const variable = {
  compteur: 0,
  estVrai: false,
  objetImbrique: {
    autreVariable: "Ma variable texte"
  }
}

const creationAttribut = {
  monFuturAttribut: "attributTest"
}

class App extends React.Component {
  state = {
    [creationAttribut.monFuturAttribut]: "Mon attribut créé"
  }

  maMethode = () => {
    return alert("La méthode de ma classe")
}

  render() {
    const valeur = test();
    const nom = "nom", prenom = "prenom"
    const objet = {nom, prenom}

    return (
      <div className="App">
        
        <span>{valeur}</span><br/>
        {console.log({...variable})}
        {console.log([...tableau1,...tableau2])}
        <span>Mon objet construit rapidement : {objet.nom} {objet.prenom}</span><br/>
        <span>Mon attribut créé : {this.state.attributTest}</span><br/>
        <button onClick={this.maMethode} >Mon bouton</button><br/>
        <span>Ma variable exportée par défaut : {essaiExport}</span><br/>
        <span>Ma variable avec export nommé : {monExportNomme}</span><br/>
        
        <span>Mon composant : <ExempleImport/></span>
      </div>
    );
  }
}

export default App;
