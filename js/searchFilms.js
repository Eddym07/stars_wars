let input = ""; // Je créer une constante input hors de la fonction pour pouvoir la récupérer aprés.
const searchInputFilms = document.getElementById("searchInputFilms"); //je récupère l'id de ma barre de recherche pour pouvoir récupérer les éléments qui si trouve.
console.log(searchInputFilms); //je vérifie que mon id soit bien récupéré.
searchInputFilms.addEventListener("input", function() { //je créer une fonction qui 'écoute' l'évènement 'keyup'
  input = searchInputFilms.value; //je récupère donc ma variable et lui donne l'attribut de la valeur qui ce trouve dans la barre de recherche

  api();  //je fais appel à ma fonction de requette

});


const api = function() {
  fetch("http://swapi.dev/api/films/" + input + "/")
    .then((response) => response.json())
    .then((datafilms) => {
      console.log(datafilms)
      const result = document.getElementById("result");

      result.innerHTML += "<h2>" + "Title : " + datafilms.title + "</h2>"
      result.innerHTML += "<h3>" + "Episode_id : " + datafilms.episode_id + "</h3>"
      result.innerHTML += "<h3>" + "Release-date : " + datafilms.release_date + "</h3>"
      result.innerHTML += "<h3>" + "Director : " + datafilms.director + "</h3>"
      result.innerHTML += "<h3>" + "Producer : " + datafilms.producer + "</h3>"


    })
}
