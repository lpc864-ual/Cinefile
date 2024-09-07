//UPDATE: Redimencionar tamaño de letra cuando el parrafo sea mayor a una linea
//Esto último permitiria que todas las carts tuvieran el mismo alto y, quizás, evitaria que se crearán estos espacios en cartas cuando realizamos
//ciertas búsquedas (p.e. Venezuela)

const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=289b8650255e3e0aa9cf966f7558a606&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=289b8650255e3e0aa9cf966f7558a606&query=";

const form = document.getElementById("form");
const search = document.getElementById("query");
const section = document.getElementById("section");

returnMovies(APILINK);

function returnMovies(url) {
    fetch(url).then(response => response.json()).then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_row = document.createElement("div");
            const div_column = document.createElement("div");
            const div_card = document.createElement("div");
            const center = document.createElement("center");
            const thumbnail = document.createElement("img");
            const title = document.createElement("h3");

            section.appendChild(div_row);
            div_row.appendChild(div_column);
            div_column.appendChild(div_card);
            div_card.appendChild(center);
            div_card.appendChild(title);
            center.appendChild(thumbnail);

            div_row.setAttribute("class", "row");
            div_column.setAttribute("class", "column");
            div_card.setAttribute("class", "card");
            thumbnail.setAttribute("class", "thumbnail");
            thumbnail.src = IMG_PATH + element.poster_path;
            title.innerHTML = element.title;
        });
    });
}

form.addEventListener("submit", (element) => {
    element.preventDefault();
    section.innerHTML = "";
    
    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
       search.value = "";
    } 
})