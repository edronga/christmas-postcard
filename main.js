'use strict'

function main(){
    const htmlData = getPostcardScreen(myData[0].text, myData[0].stamp)
    document.querySelector('#myContent').appendChild(htmlData)
    new Image().src =  myData[0].image
}

document.addEventListener('pointerdown', (e) => {
    e.preventDefault();
}, {passive: false})
document.addEventListener('pointermove', (e) => {
    e.preventDefault();
}, {passive: false})
document.addEventListener('pointerup', (e) => {
    e.preventDefault();
}, {passive: false})

const navigation = new Navigation(myData)
main();