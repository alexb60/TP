$("section").hide();

$(document).on("click", "#liste-contacts", function (e) {
  e.preventDefault();
  $(".liste").show();
  liste();
});

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
