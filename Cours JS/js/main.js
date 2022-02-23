// alert("Cours JS");
// const jour = "mercredi";
// const date = 09;

// let age = 21;

// console.log(age);

// console.log("Mon age est : " + age);

// let adresse = "45 Boulevard Paul Verley";
// console.log("Mon adresse est : " + adresse + " - Dunkerque");
// console.log(`Mon adresse est : ${adresse} - Dunkerque`);

// let adulte = 18;
// let retraite = 62;

// console.log(`L'âge adulte est à ${adulte} ans, l'âge de la retraite est à ${retraite} ans.`);

// console.log(typeof age)

// const nom = "Julien";
// const age = 33;
// const moyenne = 18.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// const tab = [];
// const json = {};

// console.log(typeof nom);
// console.log(typeof age);
// console.log(typeof moyenne);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(Array.isArray(tab));
// console.log(typeof json);

// console.log(nom.toUpperCase());
// console.log(nom.toLowerCase());

// let nom = "Julien La Garde";

// console.log(nom.substring(2, 4));
// let tab = nom.split("");
// nb = tab.length;
// console.log(nb);

// console.log(`Le nombre de mots est : ${nom.split(" ").length}.`);

// let phrase =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem odio dolores accusamus fuga optio obcaecati! Hic, impedit at animi dolor nam obcaecati quis nostrum nobis, recusandae illo iste quisquam?";

// console.log(`Le nombre de mots est : ${phrase.split(" ").length}.`);

// let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
// console.log(fruits.indexOf("orange"));

// const personne = {
//   prenom: "Julien",
//   nom: "La garde",
//   age: 30,
//   passions: ["foot", "natation", "jeux videos"],
//   adresse: {
//     rue: "rue Nationale",
//     ville: "Lille",
//     pays: "France",
//   },
// };

// console.log(personne.passions[2]);
// personne.passions[2] = "footing";
// console.log(personne.passions[2]);

// console.log(personne.adresse);
// // personne.adresse.rue = "10 Boulevard Beverly Hills";
// // personne.adresse.ville = "Californie";
// // personne.adresse.pays = "États-Unis"

// personne.adresse = {
//   rue: "10 Boulevard Beverly Hills",
//   ville: "Californie",
//   pays: "États-Unis",
// };
// console.log(personne.adresse);

// const todos = [
//   {
//     id: 1,
//     text: "Faire les courses",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Balade au vieux Lille",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Préparer le diner",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     text: "Regarder la TV",
//     isCompleted: false,
//   },
// ];

// console.log(todos[3].text);
// console.log(`La tâche 3 est-elle terminée ? ${todos[2].isCompleted}`);
// console.log(todos[1].id);

// if (todos[2].isCompleted == true) {
//   console.log("La tâche est complétée.");
// } else {
//   console.log("La tâche n'est pas complétée.");
// }

// const message = todos[1].isCompleted ? "La tâche est complétée" : "La tâche n'est pas complétée";
// console.log(message);

// console.log(todos[1].isCompleted ? "La tâche est complétée" : "La tâche n'est pas complétée");

// console.log(todos[3].isCompleted ? todos[3].text : "Tâche non complétée");

// const roues = 2;
// switch (roues) {
//   case 2:
//     console.log("moto");
//     break;
//   case 4:
//     console.log("voiture");
//     break;
//   case 6:
//     console.log("camion");
//     break;
//   default:
//     console.log("autres");
// }

// let performance = 70;
// let prime = 0;

// switch (true) {
//   case performance < 70:
//     prime = 0;
//     break;
//   case performance >= 70 && performance <= 75:
//     prime = 10;
//     break;
//   case performance >= 76 && performance <= 80:
//     prime = 15;
//     break;
//   case performance >= 81 && performance <= 85:
//     prime = 18;
//     break;
//   case performance >= 86:
//     prime = 20;
//     break;
// }
// console.log(prime != 0 ? `Prime : ${prime} %` : "Il n'y a pas de prime");

// function somme(a, b) {
//   return a + b;
// }

// console.log(somme(3, 7));

// function affichageDate() {
//   const date = new Date();
//   document.write(`Aujourd'hui nous sommes le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
// }

// affichageDate();

// const todos = [
//   {
//     id: 1,
//     text: "Faire les courses",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Balade au vieux Lille",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Préparer le diner",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     text: "Regarder la TV",
//     isCompleted: false,
//   },
// ];

// todos.map((todo) =>
//   todo.isCompleted
//     ? document.write(`<br />La tâche n°${todo.id} est terminée.`)
//     : document.write(`<br />La tâche n°${todo.id} n'est pas terminée.`)
// );

// // CORRECTION
// todos.map((todo) => {
//   document.write(`<br />La tâche n°${todo.id} ${todo.isCompleted ? "est" : "n'est pas"} terminée.`);
// });

// let voitures = [
//   {
//     id: 1,
//     marque: "Mercedes",
//     puissance: 10,
//   },
//   {
//     id: 2,
//     marque: "Renault",
//     puissance: 8,
//   },
//   {
//     id: 3,
//     marque: "BMW",
//     puissance: 12,
//   },
//   {
//     id: 4,
//     marque: "Ferrari",
//     puissance: 30,
//   },
//   {
//     id: 5,
//     marque: "Maserati",
//     puissance: 20,
//   },
// ];

// voitures.map((voiture) => {
//   document.write(voiture.puissance >= 10 ? `${voiture.marque} : ${voiture.puissance} ch <br />` : "");
// });

// for (let i = 0; i < todos.length; i++) {
//   document.write(`Tâche n°${todos[i].id} : ${todos[i].text} - ${todos[i].isCompleted ? "terminée" : "non terminée"} <br />`);
// }

// let nbCases = 100;
// function remplirTableau(nbCases) {
//   let tab = [];
//   for (let i = 0; i < nbCases; i++) {
//     tab[i] = i + 1;
//   }
//   return tab;
// }

// function afficherTabPair(tab) {
//   for (let i = 0; i < tab.length; i++) {
//     tab[i] % 2 == 0 ? document.write(`${tab[i]}, `) : "";
//   }
// }

// afficherTabPair(remplirTableau(100));

// document.write("<br />");

// function afficherValeur(tab, valeur) {
//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i] == valeur) {
//       break;
//     }
//     document.write(`${tab[i]}, `);
//   }
// }

// afficherValeur(remplirTableau(100), 50);

// let marquesVoitures = [
//   "Abarth",
//   "Ac",
//   "Acura",
//   "Aixam",
//   "Alfa Romeo",
//   "Alke",
//   "Allard",
//   "Alpina",
//   "Alpine",
//   "Alvis",
//   "AMC",
//   "Amilcar",
//   "Arash",
//   "Ariel",
//   "ARO",
//   "Ashok Leyland",
//   "Aston Martin",
//   "Auburn",
//   "Audi",
//   "Austin",
//   "Austin Healey",
//   "Auto Union",
//   "Autobianchi",
//   "AvtoGAZ",
//   "AvtoVAZ",
//   "Bellier",
//   "Bentley",
//   "BMW",
//   "Bolloré",
//   "Bristol",
//   "Bugatti",
//   "Buick",
//   "Cadillac",
//   "Casalini",
//   "Caterham",
//   "Chatenet",
//   "Chausson",
//   "Chenard et Walcker",
//   "Chevrolet",
//   "Chrysler",
//   "Citroën",
//   "Dacia",
//   "Daewoo",
//   "Daihatsu",
//   "Datsun",
//   "De Dion-Bouton",
//   "De Tomaso",
//   "Delage",
//   "Delahaye",
//   "DeLorean",
//   "Dodge",
//   "Donkervoort",
//   "DS",
//   "Dué",
//   "Eagle",
//   "Exagon",
//   "Excalibur",
//   "Facel Vega",
//   "Ferrari",
//   "FIAT",
//   "Fisker",
//   "Ford",
//   "Ford Mustang",
//   "Fuso",
//   "GAZ",
//   "Ginetta",
//   "GMC",
//   "Grecav",
//   "Gumpert",
//   "Hispano Suiza",
//   "Hommell",
//   "Honda",
//   "Horch",
//   "Hummer",
//   "Hyundai",
//   "Infiniti",
//   "Innocenti",
//   "Isuzu",
//   "Iveco",
//   "Jaguar",
//   "JDM Simpa",
//   "Jeep",
//   "Karma",
//   "Kia",
//   "Koenigsegg",
//   "KTM",
//   "Lada",
//   "Lamborghini",
//   "Lancia",
//   "Land Rover",
//   "Lexus",
//   "Ligier",
//   "Lincoln",
//   "Lotus",
//   "Maserati",
//   "Matra",
//   "Maybach",
//   "Mazda",
//   "McLaren",
//   "Mega",
//   "Mercedes-Benz",
//   "MG",
//   "Mia electric",
//   "Mini",
//   "Mitsubishi",
//   "Mitsuoka",
//   "Monica",
//   "Morgan",
//   "Morris",
//   "Nash",
//   "Neckar",
//   "Nissan",
//   "Noble",
//   "NSU",
//   "Oldsmobile",
//   "Opel",
//   "Packard",
//   "Pagani",
//   "Panhard",
//   "Panoz",
//   "Panther",
//   "Peugeot",
//   "PGO",
//   "Plymouth",
//   "Pontiac",
//   "Porsche",
//   "Radical",
//   "Renault",
//   "Riley",
//   "Rolls-Royce",
//   "Rover",
//   "Saab",
//   "Saleen",
//   "Santana",
//   "Seat",
//   "Secma",
//   "Shelby",
//   "Simca",
//   "Skoda",
//   "Smart",
//   "SsangYong",
//   "Studebaker",
//   "Subaru",
//   "Suzuki",
//   "Talbot",
//   "Tata",
//   "Tazzari",
//   "Tesla Motors",
//   "Toyota",
//   "Triumph",
//   "Tvr",
//   "Ultima",
//   "VAZ",
//   "Vector",
//   "Venturi",
//   "Volkswagen",
//   "Volvo",
//   "Weber",
//   "Wiesmann",
//   "Wolseley",
//   "Zastava",
//   "Zenvo",
// ];

// function rechercherMarque(tabMarque, marque) {
//   let position = -1;
//   for (let i = 0; i < tabMarque.length; i++) {
//     if (tabMarque[i] == marque) {
//       position = i + 1;
//       break;
//     }
//   }
//   return -1;
//   document.write(`La marque ${marque} ${position != -1 ? `est dans la ${position}e case du tableau` : `n'a pas été trouvée`}.`);
// }

// let marque = "Tata";
// document.write(rechercherMarque(marquesVoitures, marque));

// parcourir le tableau
//   si marque = valeur donnée
//      alors position = index +1
//  finSi
// si position != -1
//       alors marque trouvée
// sinon marque non trouvée
// retourner position

// CORRECTION MARQUES DE VOITURE AVEC FOR
// function rechercheVoiture(val, tab) {
//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i] === val) {
//       return i + 1;
//     }
//   }
//   return -1;
// }

// let marque = prompt("Marque de voiture");
// let position = rechercheVoiture(marque, voitures);
// let msg = position !== -1 ? `existe à la position ${position}` : `n'existe pas`;
// document.write(`La voiture ${marque} ${msg}`);
// document.write(`La voiture ${marque} ${position !== -1 ? `existe à la position ${position}` : `n'existe pas`}`);

// function rechercherMarque2(tabMarque, marque) {
//   let position2 = -1;
//   let i = 0;
//   while (position2 == -1 && i < tabMarque.length) {
//     if (tabMarque[i] == marque) {
//       position2 = i + 1;
//     }
//     i++;
//   }
//   document.write(`La marque ${marque} ${position2 != -1 ? `est dans la ${position2}e case du tableau` : `n'a pas été trouvée`}.`);
// }

// let marque2 = "Tata";
// rechercherMarque2(marquesVoitures, marque2);

// let voitures = [
//   {
//     id: 1,
//     marque: "Mercedes",
//     puissance: 10,
//   },
//   {
//     id: 2,
//     marque: "Renault",
//     puissance: 8,
//   },
//   {
//     id: 3,
//     marque: "BMW",
//     puissance: 12,
//   },
//   {
//     id: 4,
//     marque: "Ferrari",
//     puissance: 30,
//   },
//   {
//     id: 5,
//     marque: "Maserati",
//     puissance: 20,
//   },
// ];

// let voituresPuissantes = voitures.filter((voiture) => {
//   return voiture.puissance >= 10;
// });

// // console.log(voituresPuissantes);

// function filtreVoitures(tab) {
//   let voituresFiltrees = [];
//   let i = 0;
//   let j = 0;
//   while (i < tab.length) {
//     if (tab[i].puissance >= 10) {
//       voituresFiltrees[j] = tab[i];
//       j++;
//     }
//     i++;
//   }
//   return voituresFiltrees;
// }

// console.log(filtreVoitures(voitures));

// Initialisation nouveauTableau
// Initialisation i à 0
// Initialisation j à 0
// Tant que i est inférieur à la taille du tableau
//     Faire
//         Si puissance est supérieure ou égale à 10
//           Alors
//              nouveauTableau [j] est égal à tableau[i]
//              j++
//         finSi
//         i++
// finTantQue
// retourner nouveauTableau

// let i = 0;
// while (i < voitures.length) {
//   document.write(voitures[i].puissance >= 10 ? `${voitures[i].marque} : ${voitures[i].puissance} ch <br />` : "");
//   i++;
// }

// const todos = [
//   {
//     id: 1,
//     text: "Faire les courses",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Balade au vieux Lille",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Préparer le diner",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     text: "Regarder la TV",
//     isCompleted: false,
//   },
// ];

// todos.forEach(function (todo) {
//   document.write(todo.text + "<br>");
// });

// document.write("<br />");

// todos.forEach((todo) => {
//   document.write(todo.text + "<br>");
// });

// voitures.forEach((voiture) => {
//   document.write(`${voiture.id} - ${voiture.marque} : ${voiture.puissance} ch <br />`);
// });

// voitures
//   .filter((voiture) => {
//     return voiture.puissance >= 10;
//   })
//   .map((voiture) => {
//     document.write(`${voiture.id}- ${voiture.marque} : ${voiture.puissance} <br>`);
//   });

// let eleves = [
//   {
//     prenom: "Morgan",
//     note: 25,
//   },
//   {
//     prenom: "Rudy",
//     note: 10,
//   },
//   {
//     prenom: "Christophe",
//     note: 11,
//   },
//   {
//     prenom: "Yves",
//     note: 17,
//   },
//   {
//     prenom: "Manu",
//     note: 2,
//   },
//   {
//     prenom: "Gaétan",
//     note: 5,
//   },
//   {
//     prenom: "Quentin",
//     note: 17,
//   },
//   {
//     prenom: "Sullivan",
//     note: 14,
//   },
//   {
//     prenom: "Lucile",
//     note: 16,
//   },
//   {
//     prenom: "Steven",
//     note: 7,
//   },
//   {
//     prenom: "Alexandre",
//     note: 8,
//   },
//   {
//     prenom: "Corentin",
//     note: 11,
//   },
//   {
//     prenom: "Brandon",
//     note: 15,
//   },
//   {
//     prenom: "Rayan",
//     note: 20,
//   },
//   {
//     prenom: "Abdel",
//     note: 9,
//   },
//   {
//     prenom: "Nicolas",
//     note: 11,
//   },
//   {
//     prenom: "Julien",
//     note: 12,
//   },
//   {
//     prenom: "Thomas",
//     note: 18,
//   },
//   {
//     prenom: "Maxime",
//     note: 16,
//   },
//   {
//     prenom: "Jonathan",
//     note: 13,
//   },
// ];

// // filter et map >= 10

// eleves
//   .filter((eleve) => {
//     return eleve.note >= 10;
//   })
//   .map((eleve) => {
//     document.write(`${eleve.prenom} : ${eleve.note} <br />`);
//   });

// let eleves = [
//   {
//     prenom: "Morgan",
//     note: 5,
//   },
//   {
//     prenom: "Rudy",
//     note: 10,
//   },
//   {
//     prenom: "Christophe",
//     note: 11,
//   },
//   {
//     prenom: "Yves",
//     note: 17,
//   },
//   {
//     prenom: "Manu",
//     note: 2,
//   },
//   {
//     prenom: "Gaétan",
//     note: 20,
//   },
//   {
//     prenom: "Quentin",
//     note: 17,
//   },
//   {
//     prenom: "Sullivan",
//     note: 14,
//   },
//   {
//     prenom: "Lucile",
//     note: 16,
//   },
//   {
//     prenom: "Steven",
//     note: 7,
//   },
//   {
//     prenom: "Alexandre",
//     note: 8,
//   },
//   {
//     prenom: "Corentin",
//     note: 11,
//   },
//   {
//     prenom: "Brandon",
//     note: 15,
//   },
//   {
//     prenom: "Rayan",
//     note: 20,
//   },
//   {
//     prenom: "Abdel",
//     note: 9,
//   },
//   {
//     prenom: "Nicolas",
//     note: 11,
//   },
//   {
//     prenom: "Julien",
//     note: 12,
//   },
//   {
//     prenom: "Thomas",
//     note: 18,
//   },
//   {
//     prenom: "Maxime",
//     note: 16,
//   },
//   {
//     prenom: "Jonathan",
//     note: 13,
//   },
// ];

//        MON TRAVAIL        //

// //Calcule la moyenne
// function moyenne(tab) {
//   let somme = 0;
//   for (let i = 0; i < tab.length; i++) {
//     somme += tab[i].note;
//   }
//   return somme / tab.length;
// }

// //Cherche la note maximale
// function meilleureNote(tab) {
//   let bestNote = -1;
//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i].note > bestNote) {
//       bestNote = tab[i].note;
//     }
//   }
//   return bestNote;
// }

// //Donne le(s) nom(s) du (des) meilleur(s) élève(s)
// function meilleurEleve(tab, noteMax) {
//   let bestEleve = "";
//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i].note == noteMax) {
//       bestEleve += tab[i].prenom + ", ";
//     }
//   }
//   return bestEleve;
// }

// //Cherche la note minimale
// function pireNote(tab) {
//   let worstNote = 1000;
//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i].note < worstNote) {
//       worstNote = tab[i].note;
//     }
//   }
//   return worstNote;
// }

// //Donne le(s) nom(s) du (des) pire(s) élève(s)
// function pireEleve(tab, noteMin) {
//   let worstEleve = "";
//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i].note == noteMin) {
//       worstEleve += tab[i].prenom + ", ";
//     }
//   }
//   return worstEleve;
// }

// let moy = moyenne(eleves);
// let noteMax = meilleureNote(eleves);
// let bonEleve = meilleurEleve(eleves, noteMax);
// let noteMin = pireNote(eleves);
// let mauvaisEleve = pireEleve(eleves, noteMin);

// document.write(`<table>
// <tr>
//   <th>Nb élèves</th>
//   <th>Moyenne</th>
//   <th>Nom(s) du (des) meilleur(s) élève(s)</th>
//   <th>Note max</th>
//   <th>Nom(s) du (des) pire(s) élève(s)</th>
//   <th>Note min</th>
// </tr>
// <tr>
//   <td>${eleves.length}</td>
//   <td>${moy}</td>
//   <td>${bonEleve}</td>
//   <td>${noteMax}</td>
//   <td>${mauvaisEleve}</td>
//   <td>${noteMin}</td>
// </tr>
// </table>`);

// //        "CORRECTION"        //
// function getData(tab) {
//   let tabEleves = [];
//   let tabNotes = [];
//   let somme = 0;
//   let max = tab[0].note;
//   let min = tab[0].note;

//   tab.map((eleve) => {
//     tabEleves.push(eleve.prenom);
//     tabNotes.push(eleve.note);
//     somme += eleve.note;
//     max = eleve.note > max ? eleve.note : max;
//     min = eleve.note < min ? eleve.note : min;
//   });

//   let data = { max, min, moyenne: somme / tab.length };
//   return data;
// }

// function meilleurs() {
//   let tabMeilleurs = eleves.filter((eleve) => eleve.note === donnees.max);
//   return tabMeilleurs;
// }
// function pires() {
//   let tabPires = eleves.filter((eleve) => eleve.note === donnees.min);
//   return tabPires;
// }
// let donnees = getData(eleves);

//console.log(pires());
//console.log(donnees);

//            EXERCICE CORRECTION COLLECTIVE            //
// 1- algo detaillé de l'etape 1
// on va parcourir le tab  et on va chercher à extraire les données une fois pour toutes (au lieu de faire une boucle pour extraire chaque information dans une fonction à part)
// let eleves = [
//   {
//     prenom: "Morgan",
//     note: 5,
//   },
//   {
//     prenom: "Rudy",
//     note: 10,
//   },
//   {
//     prenom: "Christophe",
//     note: 11,
//   },
//   {
//     prenom: "Yves",
//     note: 17,
//   },
//   {
//     prenom: "Manu",
//     note: 2,
//   },
//   {
//     prenom: "Gaétan",
//     note: 20,
//   },
//   {
//     prenom: "Quentin",
//     note: 17,
//   },
//   {
//     prenom: "Sullivan",
//     note: 14,
//   },
//   {
//     prenom: "Lucile",
//     note: 16,
//   },
//   {
//     prenom: "Steven",
//     note: 7,
//   },
//   {
//     prenom: "Alexandre",
//     note: 8,
//   },
//   {
//     prenom: "Corentin",
//     note: 11,
//   },
//   {
//     prenom: "Brandon",
//     note: 15,
//   },
//   {
//     prenom: "Rayan",
//     note: 20,
//   },
//   {
//     prenom: "Abdel",
//     note: 9,
//   },
//   {
//     prenom: "Nicolas",
//     note: 11,
//   },
//   {
//     prenom: "Julien",
//     note: 12,
//   },
//   {
//     prenom: "Thomas",
//     note: 18,
//   },
//   {
//     prenom: "Maxime",
//     note: 16,
//   },
//   {
//     prenom: "Jonathan",
//     note: 13,
//   },
// ];

// function getData(tab) {
//   let tabEleves = [];
//   let tabNotes = [];
//   let somme = 0;
//   let max = tab[0].note;
//   let min = tab[0].note;

//   tab.map((eleve) => {
//     tabEleves.push(eleve.prenom);
//     tabNotes.push(eleve.note);
//     somme += eleve.note;
//     max = eleve.note > max ? eleve.note : max;
//     min = eleve.note < min ? eleve.note : min;
//   });

//   let data = { max, min, moyenne: somme / tab.length };
//   return data;
// }

// function meilleurs() {
//   let tabMeilleurs = eleves.filter((eleve) => eleve.note === donnees.max);
//   return tabMeilleurs;
// }
// function pires() {
//   let tabPires = eleves.filter((eleve) => eleve.note === donnees.min);
//   return tabPires;
// }
// let donnees = getData(eleves);

// //console.log(pires());
// //console.log(donnees);

// //    1.1 - calcul de la moyenne
// //    somme des notes / taille du tableau (nb eleves)
// //    1.2 - calcul de la note max
// //    1.3 - calcul de la note min
// function getData2(tab) {
//   let somme = 0;
//   let max = tab[0].note;
//   let min = tab[0].note;

//   tab.map((eleve) => {
//     //somme = somme + eleve.note
//     somme += eleve.note;
//     // si la note actuelle est sup à l'ancienne valeur de max
//     // max = Math.max(max, eleve.note);
//     max = eleve.note > max ? eleve.note : max;
//     min = eleve.note < min ? eleve.note : min;
//   });

//   let data = { max, min, moyenne: somme / tab.length };
//   return data;
// }
// // NB : je ne peux pas determiner les noms des meilleurs et pires eleves dans la meme boucle si jamais les eleves ont la meme note (sinon les données vot etre ecrasées)
// // ==> solution : les chercher dans deux fonctions differentes
// //    1.4 - appeler la fonction getData2() en lui passant en param le tab eleves dans le but d'extraire les données
// let donnees2 = getData2(eleves);
// //    1.5 - chercher les noms des meilleurs et pires eleves dans des fonctions
// function meilleurs2() {
//   let tabMeilleurs = eleves.filter((eleve) => {
//     return eleve.note === donnees2.max;
//   });
//   return tabMeilleurs;
// }

// function pires2() {
//   let tabPires = eleves.filter((eleve) => {
//     return eleve.note === donnees2.min;
//   });
//   return tabPires;
// }

//          SOLUTION FACTORISÉE          //
// function getData2(tab) {
//   let somme = 0;
//   let max = tab[0].note;
//   let min = tab[0].note;

//   tab.map((eleve) => {
//     //somme = somme + eleve.note
//     somme += eleve.note;
//     // si la note actuelle est sup à l'ancienne valeur de max
//     // max = Math.max(max, eleve.note);
//     max = eleve.note > max ? eleve.note : max;
//     min = eleve.note < min ? eleve.note : min;
//   });

//   let tabMeilleurs = tab.filter((eleve) => {
//     return eleve.note === max;
//   });
//   let tabPires = eleves.filter((eleve) => {
//     return eleve.note === min;
//   });

//   let data = {
//     //max : max  ==> nom de l'attribut est identique à celui de la var (qui contient la valeur)
//     max,
//     min,
//     moyenne: somme / tab.length,
//     nb: tab.length,
//     tabMeilleurs,
//     tabPires,
//   };

//   return data;
// }

// console.log(getData2(eleves));

// let data = getData2(eleves);

// document.write(`<table>
// <tr>
//   <th>Nb élèves</th>
//   <th>Moyenne</th>
//   <th>Nom(s) du (des) meilleur(s) élève(s)</th>
//   <th>Note max</th>
//   <th>Nom(s) du (des) pire(s) élève(s)</th>
//   <th>Note min</th>
// </tr>
// <tr>
//   <td>${data.nb}</td>
//   <td>${data.moyenne}</td>
//   <td>${data.tabMeilleurs.map((eleve) => {
//     return " " + eleve.prenom;
//   })}</td>
//   <td>${data.max}</td>
//   <td>${data.tabPires.map((eleve) => {
//     return " " + eleve.prenom;
//   })}</td>
//   <td>${data.min}</td>
// </tr>
// </table>`);

// const el = document.getElementsByName("email");
// console.log(el)

// const sectionContainer = document.querySelector("section.container");
// console.log(sectionContainer);

document.getElementsByTagName("ul")[1].innerHTML = "<li><a href='www.afpa.fr'>Lien</a></li>";
document.querySelector(".container ul:nth-of-type(2)").innerHTML = `<li> <a href='#'>Lien</a> </li>`;
document.querySelector(".parent").innerHTML = `<section>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus placeat eaque iure sint iusto? Accusamus nesciunt
  corporis sequi fugit exercitationem omnis enim maiores ipsam! Saepe ducimus dolorum iure excepturi.
</p>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est aperiam iste distinctio. Consectetur magnam repellat
  dignissimos ab pariatur eveniet placeat aliquid facere asperiores exercitationem? Inventore natus magnam iure libero?
</p>
</section>`;
