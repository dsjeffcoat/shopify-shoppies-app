// Main Declarations 

const viewBtn = document.getElementById('view')
const homeBtn = document.getElementById('home')
const nomBtn = document.querySelectorAll('.nom-btn')
const removeBtn = document.getElementById('remove')
const closeBtn = document.querySelector('.close')
const modal = document.querySelector('.modal')

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

const nomEl = document.querySelector('.noms-container')
const nominees = document.querySelectorAll('.nom-movie')

let nominations = []


// API Declarations 

const IMG_PATH = 'http://img.omdbapi.com/?apikey=711fa2f8&i='
const SEARCH_API = 'http://www.omdbapi.com/?apikey=711fa2f8&type=movie&s='
const MOVIE_API = 'http://www.omdbapi.com/?apikey=711fa2f8&type=movie&i='

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
                        <button class="nom-btn" id="nom" onClick="addNominee('${movie.imdbID}')">Nominate Movie</button>
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

function addNominee(id) {
    sessionStorage.setItem('movieId', id);

    let movieId = sessionStorage.getItem('movieId');

    axios.get(MOVIE_API + movieId)
        .then((response) => {
            // console.log(response)
            let nomMovie = response.data;

            if (nominations.length > 4) {
                modal.classList.add('show')
            } else {
                nominations.push(nomMovie)
            }

            console.log(nominations)
            // nomBtn.disabled = true;
        })
        .catch((err) => {
            console.log(err)
        })
}

// Event Listeners 

viewBtn.addEventListener('click', () => {
    nomEl.classList.remove('hidden')
    showNominees(nominations)
})

homeBtn.addEventListener('click', () => {
    nomEl.classList.add('hidden')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show')
})

// Functions 

function showNominees(nominations) {
    
    let output = ''

    $.each(nominations, (index, nomination) => {
        output += `
        <div class="nom-movie">
            <img
            src="${nomination.Poster}"
            alt="${nomination.Title}"
            />
            <div class="nom-movie-info">
                <h4>${nomination.Title} (${nomination.Year})</h4>
                <button class="btn-sm" id="remove">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        `
    })

    $('.nom-movies').html(output)
}

function removeNom(id) {
    pass
}

