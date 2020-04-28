import { senators } from '../data/senators.js'

console.log(senators.length)

const container = document.querySelector('.container')

const filterSenators = (prop,value) => {
    return senators.filter(senator => senator[prop] === value)
}

console.log(filterSenators('party','R'))
console.log(filterSenators('party', 'D'))
console.log(filterSenators('party','ID'))