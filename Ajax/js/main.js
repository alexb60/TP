let request = $.ajax({
  type: "GET",
  url: "https://jsonplaceholder.typicode.com/todos",
  dataType: "json",
  timeout: 120000, //2 Minutes
  cache: false,
  contentType: false,
  processData: false,
  beforeSend: function () {
    //Code à jouer avant l'appel ajax en lui même
  },
});

request.done(function (response) {
  //Code à jouer en cas d'éxécution sans erreur du script du PHP
  for (let i = 0; i < response.length; i++) {
    $(".grille-card").append(`<div class="col mb-4">
    <div class="card h-100">
        <div class="card-header bg-transparent border-0">
        <button class="btn btn-primary">N° de la tâche : <span class="badge badge-light">${response[i].id}</span></button>
        </div>
        <div class="card-body">
        <p>${response[i].title}</p>
        </div>
        <div class="card-footer bg-transparent border-0">
        <button class="btn ${response[i].completed ? ` btn-success">Terminée` : ` btn-warning">En cours`}</button>
        </div>
    </div>
  </div>`);
  }
});
request.fail(function (http_error) {
  //Code à jouer en cas d'éxécution en erreur du script du PHP

  let server_msg = http_error.responseText;
  let code = http_error.status;
  let code_label = http_error.statusText;
  alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
});

// let request = $.ajax({
//   type: "GET",
//   url: "https://jsonplaceholder.typicode.com/users/",
//   dataType: "json",
// });

// request.done(function (response) {
//   console.log(response);

//   let html = "";
//   response.map((user) => {
//     html += `<div class="col mb-4">
//       <div class="card h-100">
//         <div class="card-header bg-transparent border-0">
//           <button class="btn btn-primary"><span class="badge badge-light">${user.id}</span> : ${user.username}</button>
//         </div>
//         <div class="card-body">
//             <h3>${user.name}</h3>
//              <p><i class="fas fa-map-marker-alt"></i> <a href="https://www.google.fr/maps/place/${user.address.geo.lng},${user.address.geo.lat}" target="_blank">${user.address.street}<br />${user.address.suite}<br />${user.address.zipcode} ${user.address.city}
//             </a></p>
//             <p><i class="fas fa-envelope"></i> <a href="mailto:${user.email}">${user.email}</a></p>
//         </div>
//         <div class="card-footer bg-transparent border-0">
//             <a class="btn btn-success" href="telto:${user.phone}"><i class="fas fa-phone-alt"></i> Téléphone</a>
//             <a class="btn btn-warning" href="https://${user.website}" target="_blank">Site web</a>
//         </div>
//       </div>
//     </div>
//     `;
//   });
//   $(".grille-card").html(html);
// });

// request.fail(function (http_error) {
//   let server_msg = http_error.responseText;
//   let code = http_error.status;
//   let code_label = http_error.statusText;
//   alert("Erreur " + code + " (" + code_label + ") : " + server_msg);
// });
