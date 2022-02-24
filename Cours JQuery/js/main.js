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

console.log($(".dom input").attr("placeholder"));