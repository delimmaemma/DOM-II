import './less/index.less'

const sunButton = document.querySelector('.destination:nth-of-type(1) .btn')
const mountainButton = document.querySelector('.destination:nth-of-type(2) .btn')
const islandButton = document.querySelector('.destination:nth-of-type(3) .btn')
const busImg = document.querySelector('.intro img')
const adventureImg = document.querySelector('.img-content img')

console.log(sunButton, mountainButton, islandButton, busImg)

function esc(event) {
    console.log(`You pressed the ${event.key} key.`)
    if(event.key === 'Escape') event.target.style.backgroundColor = 'lavender'
}
function any(event) {
    console.log(`You pressed the ${event.key} key`)
    if(event.key !== 'Escape') event.target.style.backgroundColor = 'white'
}
function imgChange() {
    busImg.src = 'https://camo.githubusercontent.com/2e0dd7a5cdc62e8987d18156acd5daa0c4209fafee5e5677ff9a2f8c64a8cdb3/68747470733a2f2f692e7974696d672e636f6d2f76692f524e6f48635745387462512f6d617872657364656661756c742e6a7067'
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
document.addEventListener('copy', console.log('But why?'))
document.addEventListener('cut', console.log('What do you need that for?'))
document.addEventListener('paste', console.log("Can't paste here!"))
document.addEventListener('dblclick', console.log('Bro what? This shit mad broke you not going anywhere'))
adventureImg.addEventListener('mouseover', adventureImg.src = 'https://camo.githubusercontent.com/2e0dd7a5cdc62e8987d18156acd5daa0c4209fafee5e5677ff9a2f8c64a8cdb3/68747470733a2f2f692e7974696d672e636f6d2f76692f524e6f48635745387462512f6d617872657364656661756c742e6a7067')
document.addEventListener('scroll', console.log('OMFG you actually like being here?'))
document.addEventListener('blur', console.log('YOU JUST GOT BLURRED!!!'))
document.addEventListener('error', console.log('Sorry bro that is an error'))
busImg.addEventListener('click', imgChange)