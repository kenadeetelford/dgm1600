import { starships } from '../data/starships

constant nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

function populateNav(starships) {
    starships.forEach(starship => {
        letshipAnchor = document.createElement('a')
        shipAnchor.href = '#'
        let listItem = document.createElement ('li')
        listItem.textContent = starship.name
    
   shipAnchor.appendChild(listItem) 
   navList.appendChild(shipAnchor)
   
})
nav.appendChild(navList)
}

populateNav(starships)