'use strict'

function getPostCardImage(image){
    let r = document.createElement('div')
    r.style.width = '100dvw'
    r.style.height = '100dvh'

    r.style.backgroundColor = 'black'
    r.style.backgroundRepeat = 'no-repeat'
    r.style.backgroundPosition = 'center'
    r.style.backgroundSize = 'contain'
    r.style.backgroundImage = `url(${image})`

    r.addEventListener('pointerdown', () =>{
        navigation.goToNext()
    })

    return r;
}