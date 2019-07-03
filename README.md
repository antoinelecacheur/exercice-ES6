# Nouveautés Javascript introduites par ES6

## Déclaration de variables
- Les mots clés `let` et `const` permettent de déclarer des variables dont la portée est restreinte au bloc de code. `const` en particulier déclare une constante : on ne peut pas réassigner de valeur.

## String interpolation
- La concaténation de chaînes de caractères peut être pénible, une solution efficace :
```javascript
// Apostrophe anglaises, accessibles avec alt gr + 7 (appuyer deux fois comme pour afficher deux accents circonflexes)
const maVariable = 10
const chaine = `Ma variable vaut ${maVariable}`

// Permet plus largement d'inclure du code javascript
```

## Property Shorthand
- Déclarer un objet rapidement :
```javascript
// Imaginons les objets x et y
const nom = "nom", prenom = "prenom"

// La déclaration :
const objet = {nom: nom, prenom: prenom}

// équivaut à :

const obj = { nom, prenom }
```

## Computed Property Names
- Possibilité de créer un attribut d'objet à partir d'autres objets :
```javascript
const creationAttribut = {
  monFuturAttribut: "attributTest"
}

// Récupérer l'attribut "attributTest" dans mon state :
state = {
    [creationAttribut.monFuturAttribut]: "Mon attribut créé"
}

// Je peux ensuite accéder à :
this.state.attributTest

// Très utile pour gérer des formulaires uniquement via React
```

## Arrow Function
- Probablement l'un des apports les plus utiles, la syntaxe des fonctions fléchées :
```javascript
function(param1, param2){
    return param1 + param2
}

// Équivalent à :
(param1, param2) => {
    return param1 + param2
}

// Avec encore plus de simplifications si on n'a qu'un paramètre, ou que le return tient sur une ligne :
(param1, param2) => param1 + param2

paramSeul => {
    return paramSeul + paramSeul
}
```

## Default parameter

- Il est possible d'affecter une valeur par défaut au paramètre d'une fonction :

```javascript
// Ancienne écriture pour les fonctions
var test = function(valeur = 10) {
    return valeur;
}

// Équivalent avec const et les arrow functions
const test = (valeur = 10) => {
    return valeur;
}

// Utilisé notamment lors de la construction d'un reducer avec redux : on affecte comme valeur par défaut l'état initial du store
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // ...
    }
}
```

## Spread iterator

- Le spread iterator permet de déconstruire un objet très simplement :

```javascript
// Imaginons un objet state :
const state = {
    compteur: 0,
    estVrai: false,
    objetImbrique: {
        autreVariable: "Ma variable texte"
    }
}

// Le spread iterator ... affecté à state
...state

// Renvoie dans la pratique

compteur: 0,
estVrai: false,
objetImbrique: {
    autreVariable: "Ma variable texte"
}
```

- Concaténer des Array :
```javascript
const tableau1 = [0, "mon tableau", false]
const tableau2 = ["essayons ça", {nom: "antoine"}, ["hey"]];
const tableauConcatene = [...tableau1,...tableau2]

// Au passage on remarque à quel point Javascript est permissif
```


- Récupérer le contenu d'un objet pour en créer un nouveau :

```javascript
const objetInitial = {
    compteur: 0,
    estVrai: false,
    objetImbrique: {
        autreVariable: "Ma variable texte"
    }
}

const nouvelObjet = {
    ...objetInitial,
    nouvelAttribut: "Un nouvel attribut pour ce nouvel objet",
}

// Très utile avec Redux pour renvoyer un nouvel état dans un reducer :
const initialState = {
    compteur: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENTER_COMPTEUR":
            // On renvoie un nouvel état, compteur existe déjà dans ...state, la nouvelle valeur affectée met donc compteur à jour, en utilisant le state passé en paramètre (l'état actuel, avant l'action)
            return {...state, compteur: state.compteur + 1}
        default:
            return state
    }
}
```

## Destructuring

- Un peu dans la même idée que le spread iterator, la déstructuration d'objet :
```javascript
// Imaginons un objet props :
const props = {
    nom: "antoine",
    age: 23
}

// On peut déclarer les variables nom, et age et leur affecter ces valeurs en une ligne :
const {nom, age} = props

/*
Il faut que nom et age existent dans props avec le même nom.
Très utile pour récupérer des attributs provenant du state ou des props
*/
```

- Exemple d'utilisation pour déclarer un composant :
```javascript
// J'appelle un composant MonComposant dans App avec les props suivantes :
render() {
    return(
        <div>
            <MonComposant nom="antoine" age={23} />
        </div>
    )
}
```
- Je peux écrire mon composant sous forme de fonction, de deux manières différentes :
```javascript
const MonComposant = (props) => {

    return(
        <div>
            <span>Mon nom : {props.nom}</span>
            <span>Mon age : {props.age}</span>
        </div>
    )
}
```
- Deuxième écriture :
```javascript
const MonComposant = ({nom, age}) => {

    return(
        <div>
            <span>Mon nom : {nom}</span>
            <span>Mon age : {age}</span>
        </div>
    )
}
```

## Les classes
- Les classes en ES6 ressemblent beaucoup à la déclaration de classes en Java : constructeur, héritage, attributs...
```javascript
class Composant extends Component {
    constructor(props) {
        super(props)
        state = {
            nom: "antoine"
    }

    maMethode = () => {
        return "La méthode de ma classe"
    }

    render() {
        return (
            <div>
                <button onClick={this.maMethode}>Mon bouton</button>
            </div>
        )
    }
}
```

## Modules

- Il s'agit ici d'exporter et d'importer des fonctions, des objets, des classes, des composants...

```javascript
// Import classique de la dépendance react déclarée dans le package.json, installée via npm install
import React from 'react'
```

- L'export peut se faire de 2 manières :
```javascript
// Export par défaut dans le fichier MonExport.js
const monObjetAExporter = "Ceci est un export par défaut"
export default monObjetAExporter

// Qu'on peut importer avec n'importe quel nom :
import essaiExport from './MonExport' // équivalent à './MonExport.js'
```

- Export nommé :
```javascript
// Toujours dans MonExport.js
export const monExportNomme = "Voilà ce que j'exporte"

// Qu'on importe ainsi :
import {monExportNomme} from './MonExport'
```

- **Notion importante** : lors de l'import, le chemin spécifié est relatif à la classe depuis laquelle on importe.

## Boucle for..of et map
- Une boucle for..of itère sur les objets eux-mêmes (et non pas sur l'indice) :
```javascript
for (let book of books){
  console.log(book)
}

// Équivalent à un map :
books.map(function(book){
    return console.log(book)
})

// Ou encore avec une arrow function :
books.map(book => console.log(book))
```

## Promises

- L'objet `Promise` est utilisé pour réaliser des traitements de façon asynchrone.
```javascript
let promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // Résultat attendu : "foo"
});

console.log(promise1);
// Résultat attendu : [object Promise]
```

- Il est surtout utile de retenir le principe pour les appels à une API :
```javascript
// Utilisons la fonction javascript fetch qui effectue une requête HTTP sur l'URL saisie :
fetch("https://api.imgflip.com/get_memes")
.then(response => response.json())
.then(json => console.log(json.data))
```
- `response.json()` permet de convertir le corps de la requête en JSON.