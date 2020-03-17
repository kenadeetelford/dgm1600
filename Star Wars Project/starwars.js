import { films } from '../data/films.js'
import { people } from '../data/people.js'

let greetingDiv = document.querySelector ('.greeting')

const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)

const femaleCharacters = people.filter(person => person.gender === 'female')
console.log(femaleCharacters)

const otherCharacters = people.filter(
    person =>
    person.gender === 'n/a' ||
    person.gender === 'none' ||
    person.gender === 'hermaphrodite',
)
console.log(otherCharacters)

let maleButton = document.querySelector('#maleButton')
let femaleButton = document.querySelector('#femaleButton')
let otherButton = document.querySelector('#otherButton')

maleButton.addEventListener('click', function(event) {
    populateDOM(maleCharacters)
})

let counter = 1

function populateDOM(characters) {
    characters.forEach(person => {
        console.log(`${person.url}`)
        let personAnchor = document.createElement('a')
        personAnchor.href = '#'
        let personImg = document.createElement('img')
personImg.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`

personImg.addEventListener('error', (event) => {
    personImg.hidden = true 
    //personImg.src = '../images/uvu.jpeg'
})


personImg.addEventListener('click', function(event) {
    console.log('Thanks for clicking!')
})

personAnchor.appendChild(personImg)
greetingDiv.appendChild(personAnchor)
counter++ 
})
}


