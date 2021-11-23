let input = ""; // Je créer une constante input hors de la fonction pour pouvoir la récupérer aprés.
const searchInputPlanets = document.getElementById("searchInputPlanets"); //je récupère l'id de ma barre de recherche pour pouvoir récupérer les éléments qui si trouve.
console.log(searchInputPlanets); //je vérifie que mon id soit bien récupéré.
searchInputPlanets.addEventListener("input", function() { //je créer une fonction qui 'écoute' l'évènement 'keyup'
  input = searchInputPlanets.value; //je récupère donc ma variable et lui donne l'attribut de la valeur qui ce trouve dans la barre de recherche

  api(); //je fais appel à ma fonction de requette

});


const api = function() {
  fetch("http://swapi.dev/api/planets/" + input + "/")
    .then((response) => response.json())
    .then((dataplanets) => {
      console.log(dataplanets)
      const result = document.getElementById("result");

      result.innerHTML += "<h2>" + "Name : " + dataplanets.name + "</h2>"
      result.innerHTML += "<h3>" + "Climate : " + dataplanets.climate + "</h3>"
      result.innerHTML += "<h3>" + "Diameter : " + dataplanets.diameter + "</h3>"
      result.innerHTML += "<h3>" + "Gravity : " + dataplanets.gravity + "</h3>"
      result.innerHTML += "<h3>" + "Orbital-period : " + dataplanets.orbital_period + "</h3>"
      result.innerHTML += "<h3>" + "Population : " + dataplanets.population + "</h3>"
      result.innerHTML += "<h3>" + "Rotation-period :" + dataplanets.rotation_period + "</h3>"
      result.innerHTML += "<h3>" + "Terrain :" + dataplanets.terrain + "</h3>"
      result.innerHTML += "<h3>" + "Surface-water :" + dataplanets.surface_water + "</h3>"

    })
}
