let input = "";                     // Je créer une constante input hors de la fonction pour pouvoir la récupérer aprés.
const searchInputPeople = document.getElementById("searchInputPeople"); //je récupère l'id de ma barre de recherche pour pouvoir récupérer les éléments qui si trouve.
//console.log(searchInputPeople);                                     //je vérifie que mon id soit bien récupéré.
searchInputPeople.addEventListener("input", function() {           //je créer une fonction qui 'écoute' l'évènement 'keyup'
   input = searchInputPeople.value;          //je récupère donc ma variable et lui donne l'attribut de la valeur qui ce trouve dans la barre de recherche

  api();                                  //je fais appel à ma fonction de requette

});


const api = function () {
fetch("http://swapi.dev/api/people/" + input + "/")
   .then((response) => response.json())
   .then((datapeople) => {
      console.log(datapeople)
      const result = document.getElementById("result");

      result.innerHTML +=  "<h2>" + "Name : " + datapeople.name + "</h2>"
      result.innerHTML +=  "<h3>" + "Gender : " + datapeople.gender + "</h3>"
      result.innerHTML +=  "<h3>" + "Birth-year : " + datapeople.birth_year + "</h3>"
      result.innerHTML +=  "<h3>" + "Eye-color : " + datapeople.eye_color + "</h3>"
      result.innerHTML +=  "<h3>" + "Hair-color : " + datapeople.hair_color + "</h3>"
      result.innerHTML +=  "<h3>" + "Height : " + datapeople.height + "</h3>"
      result.innerHTML +=  "<h3>" + "Mass :" + datapeople.mass + "</h3>"
      result.innerHTML +=  "<h3>" + "Skin-color :" + datapeople.skin_color + "</h3>"
      
   })
}
