$("section").hide();
$(".dashboard").show();
nbContact();

$(document).on("click", "#liste-contacts", function (e) {
  e.preventDefault();
  $("section").hide();
  $(".liste").show();
  liste();
});

$(document).on("click", "#nv-contact", function (e) {
  e.preventDefault();
  $("section").hide();
  $(".ajout-contact").show();
});

$(document).on("submit", ".ajout-contact form", function (e) {
  e.preventDefault();
  ajoutContact();
});

$(document).on("click", "button.modif-contact", function () {
  $("section").hide();
  $("section.modif-contact").show();
  modifContact($(this).attr("id"));
});

$(document).on("submit", ".modif-contact form", function (e) {
  e.preventDefault();
  majContact($(".modif-contact .maj-contact").attr("id"));
  $("section").hide();
  $(".liste").show();
});

$(document).on("click", ".supp-contact", function () {
  suppContact($(this).attr("id"));
});

$(document).on("click", "#dashboard", function (e) {
  e.preventDefault();
  $("section").hide();
  nbContact();
  $(".dashboard").show();
});

function nbContact() {
  let request = $.ajax({
    type: "GET",
    url: "http://localhost:3000/contacts",
    dataType: "json",
  });

  request.done(function (response) {
    $(".nbContact").html(`${response.length}`);
  });

  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

function liste() {
  let request = $.ajax({
    type: "GET",
    url: "http://localhost:3000/contacts",
    dataType: "json",
  });

  request.done(function (response) {
    let html = "";
    if (response.length !== 0) {
      html = `
          <h1>Liste des contacts</h1>
          <table class="table table-striped tab-contact" id="myTable">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Nom &nbsp;&nbsp;<button class="badge btn-outline-secondary btn-trier">Trier</button></th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Plus d'infos</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>`;
      response.map((contact) => {
        html += `
            <tr>
              <th scope="row">${contact.id}</th>
              <td>${contact.nom}</td>
              <td>${contact.prenom}</td>
              <td>
                  <!-- Button trigger modal -->
                  <a type="button" data-toggle="modal" data-target="#contact-modal-${contact.id}"><i class="fas fa-eye"></i> Voir plus</a>

                  <!-- Modal -->
                  <div class="modal fade" id="contact-modal-${contact.id}" tabindex="-1" aria-labelledby="contact-modal-label" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="contact-modal-label">
                            <i class="fas fa-user"></i>&nbsp;&nbsp;${contact.prenom} ${contact.nom}
                          </h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>
                            <span class="font-weight-bold">Adresse :</span><br />
                            ${contact.rue}<br />
                            ${contact.appt}<br />
                            ${contact.codePostal} ${contact.ville}
                          </p>
                          <p><span class="font-weight-bold">Email :</span><br />${contact.email}</p>
                          <p><span class="font-weight-bold">Téléphone :</span><br />${contact.tel}</p>
                          <p><span class="font-weight-bold">Catégorie :</span><br />${contact.categorie}</p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </td>
              <td>
                  <button type="button" class="btn btn-info modif-contact" id="${contact.id}">
                  <i class="fas fa-edit mr-1"></i>Modifier</button>

                  <button type="button" class="btn btn-danger supp-contact" id="${contact.id}">
                  <i class="fas fa-trash-alt mr-1"></i>Supprimer</button>
                                  
              </td>
            </tr>
        `;
      });

      html += `    </tbody>
                    </table>`;
    } else {
      html = `<div class="alert alert-danger" role="alert">
      <i class="fas fa-exclamation-triangle"></i> &nbsp;Aucun contact ne figure dans la liste !
        </div>`;
    }
    $(".liste").html(html);
  });

  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

function ajoutContact() {
  let request = $.ajax({
    type: "POST",
    url: "http://localhost:3000/contacts",
    data: {
      id: new Date().getTime(),
      nom: $("#nom").val(),
      prenom: $("#prenom").val(),
      email: $("#mail").val(),
      tel: $("#tel").val(),
      rue: $("#rue").val(),
      appt: $("#appt").val(),
      codePostal: $("#codePostal").val(),
      ville: $("#ville").val(),
      categorie: $("#categorie").val(),
    },
    dataType: "json",
  });

  request.done(function (response) {
    liste();
  });

  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

function modifContact(id) {
  let request = $.ajax({
    type: "GET",
    url: `http://localhost:3000/contacts/${id}`,
    dataType: "json",
  });

  request.done(function (response) {
    $(".modif-contact #nom").val(response.nom);
    $(".modif-contact #prenom").val(response.prenom);
    $(".modif-contact #mail").val(response.email);
    $(".modif-contact #tel").val(response.tel);
    $(".modif-contact #rue").val(response.rue);
    $(".modif-contact #appt").val(response.appt);
    $(".modif-contact #codePostal").val(response.codePostal);
    $(".modif-contact #ville").val(response.ville);
    $(".maj-contact").attr("id", response.id);
  });

  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

function majContact(id) {
  let request = $.ajax({
    type: "PUT",
    url: `http://localhost:3000/contacts/${id}`,
    data: {
      nom: $(".modif-contact #nom").val(),
      prenom: $(".modif-contact #prenom").val(),
      email: $(".modif-contact #mail").val(),
      tel: $(".modif-contact #tel").val(),
      rue: $(".modif-contact #rue").val(),
      appt: $(".modif-contact #appt").val(),
      codePostal: $(".modif-contact #codePostal").val(),
      ville: $(".modif-contact #ville ").val(),
      categorie: $(".modif-contact #categorie").val(),
    },
    dataType: "json",
  });

  request.done(function (response) {
    liste();
  });

  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

function suppContact(id) {
  let request = $.ajax({
    type: "DELETE",
    url: `http://localhost:3000/contacts/${id}`,
    dataType: "json",
  });

  request.done(function (response) {
    liste();
  });

  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

function compterCategorie() {
  let request = $.ajax({
    type: "GET",
    url: `http://localhost:3000/contacts/${id}`,
    dataType: "json",
  });

  request.done(function (response) {
    let numOccurences = 0;
    let search = "new wave"; // ce que l'on cherche

  
    $(document).ready(function () {
      numOccurences = $.grep(locs, function (pdt) {
        return pdt.famille === search;
      }).length;

      console.log("Nombre d'occurences de " + search + " = " + numOccurences);
    });
  });

  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

/* ALGO CATEGORIE
- RECHERCHER TOUTES LES CATEGORIES ET LES METTRE DANS UN TABLEAU
- PARCOURIR LE TABLEAU ET COMPTER LE NOMBRE D'OCCURENCES
 */

// OBJET D'ORIGINE :
/*
{
  "contacts": [
    {
      "id": "1644970279085",
      "nom": "Rerum voluptates sed",
      "prenom": "Rerum labore irure e"
    },
    {
      "id": "1645140574309",
      "nom": "Fugit impedit offi",
      "prenom": "Impedit velit tempo"
    },
    {
      "id": "1645141867947",
      "nom": "hidri pp",
      "prenom": "ryan pp"
    },
    {
      "id": "1645143977964",
      "nom": "test nom",
      "prenom": "test prenom"
    },
    {
      "id": "1645612509797",
      "nom": "Et excepteur molesti",
      "prenom": "Molestiae eos corru"
    }
  ]
}
*/
