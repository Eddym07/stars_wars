let input = ""; // Je créer une constante input hors de la fonction pour pouvoir la récupérer aprés.
const searchInputSpecies = document.getElementById("searchInputSpecies"); //je récupère l'id de ma barre de recherche pour pouvoir récupérer les éléments qui si trouve.
console.log(searchInputSpecies); //je vérifie que mon id soit bien récupéré.
searchInputSpecies.addEventListener("input", function() { //je créer une fonction qui 'écoute' l'évènement 'keyup'
  input = searchInputSpecies.value; //je récupère donc ma variable et lui donne l'attribut de la valeur qui ce trouve dans la barre de recherche

  api();  //je fais appel à ma fonction de requette

});


const api = function() {
  fetch("http://swapi.dev/api/species/" + input + "/")
    .then((response) => response.json())
    .then((dataspecies) => {
      console.log(dataspecies)
      //const result = document.getElementById("result");

       result.innerHTML += "<h2>" + "Name : " + dataspecies.name + "</h2>"
       result.innerHTML += "<h3>" + "Skin-colors : " + dataspecies.skin_colors + "</h3>"
       result.innerHTML += "<h3>" + "Hair-colors : " + dataspecies.hair_colors + "</h3>"
       result.innerHTML += "<h3>" + "Eye-colors : " + dataspecies.eye_colors + "</h3>"
       result.innerHTML += "<h3>" + "Language : " + dataspecies.language + "</h3>"
       result.innerHTML += "<h3>" + "Classification : " + dataspecies.classification + "</h3>"
       result.innerHTML += "<h3>" + "Designation : " + dataspecies.designation + "</h3>"
       result.innerHTML += "<h3>" + "Average_lifespan : " + dataspecies.average_lifespan + "</h3>"
       result.innerHTML += "<h3>" + "Average_height : " + dataspecies.average_height + "</h3>"





    })
}
