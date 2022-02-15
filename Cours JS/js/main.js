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

const todos = [
  {
    id: 1,
    text: "Faire les courses",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Balade au vieux Lille",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Préparer le diner",
    isCompleted: false,
  },
  {
    id: 4,
    text: "Regarder la TV",
    isCompleted: false,
  },
];

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
//     puissances: 10,
//   },
//   {
//     id: 2,
//     marque: "Renault",
//     puissances: 8,
//   },
//   {
//     id: 3,
//     marque: "BMW",
//     puissances: 12,
//   },
//   {
//     id: 4,
//     marque: "Ferrari",
//     puissances: 30,
//   },
//   {
//     id: 5,
//     marque: "Maserati",
//     puissances: 20,
//   },
// ];

// voitures.map((voiture) => {
//   document.write(voiture.puissances >= 10 ? `${voiture.marque} : ${voiture.puissances} ch <br />` : "");
// });

for (let i = 0; i < todos.length; i++) {
  document.write(`Tâche n°${todos[i].id} : ${todos[i].text} - ${todos[i].isCompleted ? "terminée" : "non terminée"} <br />`);
}
