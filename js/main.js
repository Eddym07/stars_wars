/*je récupère le nom des éléments qui ce trouve dans l'api swapi pour le mettre dans maes cartes et l'affiché à l'écran d'accueil*/

fetch("https://swapi.dev/api/") //fetch = aller chercher) je vais chercher l'url, ensuite sur ce qui a était fait avant
  .then((response) => response.json()) //ensuite sur ce qui a était fait avant je t'applique la méthode texte
  .then((data) => {
    for (const keys in data) {
      console.log(keys);

      //const keypeople = (Object.keys(data)[0]);

      //console.log(keypeople);

      const cartes = document.getElementById("cartes");
      //console.log(cartes);

      cartes.innerHTML += "<div id= " + keys + " class='col-9 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxxl-4 card bg-dark text-white m-1 m-xl-2 m-xxl-5'><a href='" + keys + ".html'><img src='img/" + keys + ".jpg' class='card-img'><div class='card-img-overlay'><h5 class='text-white card-title'>" + keys + "</h5></div></a></div>";
    }
  });



 /*je récupère les renseignements des personnages qui ce trouve dans l'api swapi pour que lorsque une recherche est effectuée, les renseignements soit donnés*/



 //  searchPeople.innerHTML =
 //    "<input id='searchInputPeople' class='form-control me-2' type='search' placeholder='Recherche' aria-label='Search'>" +
 //    "<button class='btn btn-outline-success' type='submit'>Recherche</button>";
 // };
