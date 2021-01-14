// Main Declarations 

const viewBtn = document.getElementById('view')
const homeBtn = document.getElementById('home')
const nomBtn = document.getElementById('nom')
const remove = document.getElementById('remove')

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

const nomEl = document.querySelector('.noms-container')
const nominees = document.querySelectorAll('.nom-movie')
const noResults = document.getElementById('no-results')

let nominations = []


// API Declarations 

const IMG_PATH = 'http://img.omdbapi.com/?apikey=711fa2f8&i='
const SEARCH_API = 'http://www.omdbapi.com/?apikey=711fa2f8&type=movie&s='

// API Functionality 

$(document).ready(() => {
    $('#form').on('submit', (e) => {
        // console.log($('#search').val())
        let searchText = $('#search').val()
        getMovies(searchText)
        e.preventDefault()
    })
})

function getMovies(searchText) {
    // console.log(searchText)
    axios.get(SEARCH_API + searchText)
        .then((response) => {
            // console.log(response)
            let movies = response.data.Search
            let output = ''

            $.each(movies, (index, movie) => {
                output += `
                <div class="movie">
                    <img src="${movie.Poster}" alt="${movie.Title}" />
                    <div class="movie-info">
                        <h3>${movie.Title}</h3>
                        <span class="movie-year">${movie.Year}</span>
                    </div>
                    <div class="nominate">
                        <button class="nom-btn" id="nom">Nominate Movie</button>
                    </div>
                </div>
                `
            })

            $('main').html(output)
        })
        .catch((err) => {
            console.log(err)
        })
}





// Event Listeners 

viewBtn.addEventListener('click', () => {
    nomEl.classList.remove('hidden')
})

homeBtn.addEventListener('click', () => {
    nomEl.classList.add('hidden')
})

nominees.forEach((nom, idx) => {
    // console.log(idx)
    // TODO: Set up showing of nominees

    nom.addEventListener('click', () => {
        removeNom(idx)
    })
})

// Functions 

function removeNom(idx) {
    pass
}