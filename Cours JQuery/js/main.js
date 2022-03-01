// console.log($(".para1"));

// $(document).ready(function () {
//   $(".div-data").css({ color: "green", "background-color": "black", padding: "10px" });
// });

// console.log($(".para-dom"));
// console.log($(".lien-supp"));

// $(document).ready(function () {
//   $(".dom").find("label").text("Mon label").css({ "color": "blue", "background-color": "grey" });
// });

// console.log($("ul").children("li"));
// $(document).ready(function () {
//   $("ul").children("li").css({ "color": "red", "background-color": "yellow", "padding": "20px" });
// });

// $(document).ready(function () {
//   $(".dom input[type='submit']").parent().css({ "background": "black", "color": "yellowgreen" });
// });

// $("span").closest(".dom").css({ color: "red", "background-color": "yellow", padding: "20px" });

// $("li:nth-child(2)").next().css({ color: "green", border: "2px solid green" });
// $("li:nth-child(2)").prev().css({ color: "blue", border: "2px solid blue" });

// $(".para-dom").next().css({ color: "green", border: "2px solid green" });
// $(".para-dom").prev().css({ color: "blue", border: "2px solid blue" });

// $("form input").last().css({ color: "white", background: "skyblue", "border-radius": "5px", padding: "10px" });

// $(".para-dom").next().siblings().css("color", "red");

// $("[for='capitale']").text("Le chef-lieu du Pas-de-Calais");

// $(document).ready(function () {
//   $(".test-btn").click(function () {
//     alert("test bouton");
//   });
// });

// $(".dom [type='submit']").click(function () {
//   if ($(".dom #capitale").val() == "paris") {
//     $(".reponse").text("Votre réponse est correcte");
//     $(".resultat").text("10/10");
//   } else {
//     $(".reponse").text("Réponse erronée").css({ color: "red", border: "solid 1px red" });
//     $(".resultat").text("0/10").css("color", "red");
//   }
// });

// $(".extensible").prepend("contenu d'extension au debut<br/>");

// $(".para-dom").prepend("<h5>Titre de niveau 5</h5>");

// $(".para-dom span").append("<ul><li></li><li></li></ul>");

// $("ul").before(`<ul id="ul1"><li><a href="https://www.google.fr" target="_blank">Lien vers Google</a></li></ul>`);

// $(".para-dom").after(`<h1>${$("label").text()}</h1>`);

// $(".supprimer").remove();

// console.log($("p:first-of-type").attr("class"));

// $(document).ready(function () {
//   let notes = $(".div-eleve").data("info");
//   console.log((notes.note1 + notes.note2) / 2);
// });

// $(".div-data").data("role", "admin");
// console.log($(".div-data").data("role"));

// // MODIFIER UN ATTRIBUT DATA OBJET JSON AVEC DATA
// $(document).ready(function () {
//   $(".div-data").data("info").prenom = "Ryan Junior";
//   console.log($(".div-data").data("info"));
// });

// // MODIFIER UN ATTRIBUT DATA OBJET JSON DANS LE DOM

// // $(".div-data").attr("data-info"); //  retourne la valeur {nom:"HIDRI", prenom:"Ryan"}
// // mais le navigateur l'interprete comme etant une chaine de caractère
// // d'ou la necessite de la convertir en objet json ==> le navigateur va la prendre comme un objet
// objet = JSON.parse($(".div-data").attr("data-info"));
// objet.prenom = "Ryan Junior";

// // une fois que j'ai fait le changement, je le convertit en chaine de nouveau
// $(".div-data").attr("data-info", JSON.stringify(objet)); // changer une velaur élementaire

// // EXPLICATION PLUS DETAILLEE
// let chaineJson = $(".div-data").attr("data-info"); // attr va le retourner en tant que chaine de caracteres
// objet = JSON.parse(chaineJson);
// objet.prenom = "Ryan Junior";
// let chaineJson2 = JSON.stringify(objet); // convertit le json en chaine
// $(".div-data").attr("data-info", chaineJson2);

// $(".lien-supp").removeAttr("class");

// $(".div-data").removeAttr("data-info");

// $(document).ready(function () {
//   if ($(".extensible").hasClass("premier-p")) {
//     console.log("Le paragraphe a la classe premier-p.");
//   } else {
//     console.log("Le paragraphe n'a pas la classe premier-p");
//   }
// });

// $(document).ready(function () {
//   console.log(`Le paragraphe ${$(".extensible").hasClass("premier-p") ? "a" : "n'a pas"} la classe premier-p.`);
// });

// $(document).ready(function () {
//   $("button").first().addClass("bouton1");

//   $("button").removeClass("bouton1");
// });

// $("button").first().click(function () {
//   $("p").toggleClass("para-rouge");
// });

$(".btn-style").click(function () {
  $(".para-style").toggleClass("para-style-clique").text("para cliqué");
});
