
let pokeContainer = document.querySelector('.pokeContainer')

/* function getPokeData(url) {
 fetch(url).then(function (response) {
    response.json().then(function (pokemon) {
        console.log(pokemon.results)
        populatePokeCards(pokemon.results)
    })
  })
}

getPokeData("https://pokeapi.co/api/v2/pokemon")*/
// https://pokeapi.co/api/v2/pokemon/1/

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error(error)
    }
}

getAPIData('https://pokeapi.co/api/v2/pokemon/?&limit=25').then(
    (data) => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url).then(
                (pokeData) => {
                    populatePokeCard(pokeData)
                }
            )
        }

    }
)

function populatePokeCard(singlePokemon) {
        let pokeScene = document.createElement('div')
        pokeScene.className = 'scene'
        let pokeCard = document.createElement('div')
        pokeCard.className = 'card'
        pokeCard.addEventListener('click', function () {
            pokeCard.classList.toggle('is-flipped');
        })
        let pokeFront = document.createElement('div')
        pokeFront.className = 'card__face card__face--front'
        pokeFront.textContent = singlePokemon.name
        let pokeBack = document.createElement('div')
        pokeBack.className = 'card__face card__face--back'
        pokeBack.textContent = "Back!"

        pokeCard.appendChild(pokeFront)
        pokeCard.appendChild(pokeBack)
        pokeScene.appendChild(pokeCard)
        pokeContainer.appendChild(pokeScene)
}
