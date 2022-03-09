$("section").hide();

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
});

function majContact(id) {
  let request = $.ajax({
    type: "PUT",
    url: `http://localhost:3000/contacts/${id}`,
    data: { nom: $(".modif-contact #nom").val(), prenom: $(".modif-contact #prenom").val() },
    dataType: "json",
  });

  request.done(function (response) {});

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
    let html = `<table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
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
    data: { id: new Date().getTime(), nom: $("#nom").val(), prenom: $("#prenom").val() },
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
    $(".maj-contact").attr("id", response.id);
  });

  request.fail(function (http_error) {
    let server_msg = http_error.responseText;
    let code = http_error.status;
    let code_label = http_error.statusText;
    alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
  });
}

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
