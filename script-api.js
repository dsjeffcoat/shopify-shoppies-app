// API Declarations 

const API_URL = ''
const API_KEY = ''

// Other Declarations 

const viewBtn = document.getElementById('view')
const homeBtn = document.getElementById('home')
const remove = document.getElementById('remove')
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search') 
const nomEl = document.querySelector('.noms-container')


// Event Listeners 

viewBtn.addEventListener('click', () => {
    nomEl.classList.remove('hidden')
})

homeBtn.addEventListener('click', () => {
    nomEl.classList.add('hidden')
})

// Functions 