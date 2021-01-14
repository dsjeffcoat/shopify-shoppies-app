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
const API_SEARCH_URL = 'http://www.omdbapi.com/?apikey=711fa2f8&type=movie&s='

// API Functionality 

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    // showMovies(data.search)
    console.log(data)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, year, imdbID } = movie

        const movieElement = document.createElement('div')
        movieElement.classList.add('movie')

        movieElement.innerHTML = `
                <img src="${IMG_PATH + imdbID}" alt="${title}" />
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="movie-year">${year}</span>
                </div>
                <div class="nominate">
                    <button class="nom-btn" id="nom" disabled>Nominated</button>
                </div>
            `

        main.appendChild(movieElement)
    })

}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(API_SEARCH_URL + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})

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