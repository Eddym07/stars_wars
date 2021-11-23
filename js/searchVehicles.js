let input = ""; // Je créer une constante input hors de la fonction pour pouvoir la récupérer aprés.
const searchInputVehicles = document.getElementById("searchInputVehicles"); //je récupère l'id de ma barre de recherche pour pouvoir récupérer les éléments qui si trouve.
console.log(searchInputVehicles); //je vérifie que mon id soit bien récupéré.
searchInputVehicles.addEventListener("input", function() { //je créer une fonction qui 'écoute' l'évènement 'keyup'
  input = searchInputVehicles.value; //je récupère donc ma variable et lui donne l'attribut de la valeur qui ce trouve dans la barre de recherche

  api(); //je fais appel à ma fonction de requette

});


const api = function() {
  fetch("http://swapi.dev/api/vehicles/" + input + "/")
    .then((response) => response.json())
    .then((datavehicles) => {
      console.log(datavehicles)
      const result = document.getElementById("result");

      result.innerHTML += "<h2>" + "Name : " + datavehicles.name + "</h2>"
      result.innerHTML += "<h3>" + "Model : " + datavehicles.model + "</h3>"
      result.innerHTML += "<h3>" + "Passengers : " + datavehicles.passengers + "</h3>"
      result.innerHTML += "<h3>" + "vehicle_class : " + datavehicles.vehicle_class + "</h3>"
      result.innerHTML += "<h3>" + "Max-atmosphering-speed : " + datavehicles.max_atmosphering_speed + "</h3>"
      result.innerHTML += "<h3>" + "Manufacturer : " + datavehicles.manufacturer + "</h3>"
      result.innerHTML += "<h3>" + "Length : " + datavehicles.length + "</h3>"
      result.innerHTML += "<h3>" + "Crew : " + datavehicles.crew + "</h3>"
      result.innerHTML += "<h3>" + "Cargo_capacity : " + datavehicles.cargo_capacity + "</h3>"
      result.innerHTML += "<h3>" + "Consumables : " + datavehicles.consumables + "</h3>"
      result.innerHTML += "<h3>" + "Cost_in_credits : " + datavehicles.cost_in_credits + "</h3>"


    })
}
