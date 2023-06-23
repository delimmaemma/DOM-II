import './less/index.less'

const sunButton = document.querySelector('.destination:nth-of-type(1) .btn')
const mountainButton = document.querySelector('.destination:nth-of-type(2) .btn')
const islandButton = document.querySelector('.destination:nth-of-type(3) .btn')
const busImg = document.querySelector('.intro img')
const adventureImg = document.querySelector('.img-content img')

function esc(event) {
    //console.log(`You pressed the ${event.key} key.`)
    if(event.key === 'Escape') event.target.style.backgroundColor = 'lavender'
}
function any(event) {
    //console.log(`You pressed the ${event.key} key`)
    if(event.key !== 'Escape') event.target.style.backgroundColor = 'white'
}
function imgChange() {
    busImg.src = 'https://camo.githubusercontent.com/2e0dd7a5cdc62e8987d18156acd5daa0c4209fafee5e5677ff9a2f8c64a8cdb3/68747470733a2f2f692e7974696d672e636f6d2f76692f524e6f48635745387462512f6d617872657364656661756c742e6a7067'
    console.log("You've been funkng SPOOPED")
}

function imgChange2() {
    adventureImg.src = 'https://camo.githubusercontent.com/2e0dd7a5cdc62e8987d18156acd5daa0c4209fafee5e5677ff9a2f8c64a8cdb3/68747470733a2f2f692e7974696d672e636f6d2f76692f524e6f48635745387462512f6d617872657364656661756c742e6a7067'
    console.log("You've been funkng SPOOPED")
}

Array.from(document.links).forEach(link => {
    link.addEventListener('click', evt => {
        evt.preventDefault
        document.location.href = 'https://www.facebook.com'
    })
})

sunButton.addEventListener('click', (event) => {event.target.style.fontStyle = 'italic'})
sunButton.addEventListener('click', (event) => {event.target.style.backgroundColor = 'maroon'})
mountainButton.addEventListener('click', (event) => {event.target.style.fontStyle = 'italic'})
mountainButton.addEventListener('click', (event) => {event.target.style.backgroundColor = 'maroon'})
islandButton.addEventListener('click', (event) => {event.target.style.fontStyle = 'italic'})
islandButton.addEventListener('click', (event) => {event.target.style.backgroundColor = 'maroon'})
document.addEventListener('keydown', esc)
document.addEventListener('keydown', any)
document.addEventListener('copy', (event) => {event.target.style.fontSize = '2em'})
document.addEventListener('cut', (event) => {event.target.style.color = 'purple'})
document.addEventListener('paste', (event) => {event.target.style.fontFamily = 'Times New Roman'})
document.addEventListener('dblclick', (event) => {event.target.style.fontFamily = 'Vivaldi'})
document.addEventListener('dblclick', (event) => {event.target.style.fontSize = '3em'})
adventureImg.addEventListener('mouseover', imgChange2)
document.addEventListener('keyup', (event) => {event.target.style.backgroundColor = 'black'})
document.addEventListener('blur', (event) => event.target.backgroundImage.src = 'https://t3.ftcdn.net/jpg/04/89/04/38/360_F_489043891_m4k5esAuIH7O44SIASSeRGtBuLiKoCA0.jpg')
document.addEventListener('error', (event) => {event.target.style.color = 'red'})
document.addEventListener('wheel', (event) => {event.target.style.fontWeight = 'bold'})
busImg.addEventListener('click', imgChange)