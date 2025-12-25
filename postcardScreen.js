'use strict'

function getPostcardScreen(postCardText = 'Chère Morgane,', imageStamp = 'Images/stampPlaceholder.png'){
    let r = document.createElement('div')
    r.style.width = '100dvw'
    r.style.height = '100dvh'
    r.style.display = 'grid'

    r.style.gridTemplate = `
    '. . . . . . . ' 2dvh
    '. nextButton text text text text .' 48dvh 
    '. . . . . . . ' 6dvh
    '. . adress3 adress2 adress1 . . ' 16dvh
    '. . adress3 adress2 adress1 stamp .' 22dvh
    '. . . . . . . ' 6dvh / 2dvw 14dvw 16dvw 16dvw 16dvw 30dvw 2dvw 
    `

    const coloredText = function(){
        const colors = ['red', 'orange', 'yellow', 'green', 'black', 'blue', 'indigo', 'violet', 'violet', 'red']
        let t = 'Momo Queen'
        let r = ''
        for (let i = 0; i< t.length; i++){
            r = r + `<span style = 'color: ${colors[i]}'>` + t[i] + `</span>`
        }
        return 'Chez "' + r + '"'
    }()
    const adress1 = createAdressElement('adress1', coloredText)
    const adress2 = createAdressElement('adress2', 'Quelque Part en Corse')
    const adress3 = createAdressElement('adress3', '(près de la plage)')
    function createAdressElement(gridAreaName, contentText){
        let r = document.createElement('div')
        r.style.gridArea = gridAreaName
        r.style.borderLeft = 'solid black'
        r.style.height = '100%'
        r.style.width = '100%'
        r.style.display = 'flex'
        
        const text = function(){
            let r = document.createElement('p')
            r.style.height = '100%'
            r.style.width = '100%'
            r.style.writingMode = 'vertical-rl'
            r.style.textOrientation = 'mixed'
            r.style.textAlign = 'center'
            r.style.alignContent = 'center'
            r.style.fontFamily = 'cursive'
            r.innerHTML = contentText
            return r
        }()
        r.appendChild(text)

        return r;
    }
    r.appendChild(adress1)
    r.appendChild(adress2)
    r.appendChild(adress3)

    const nextButton = function(){
        let r = document.createElement('div')
        r.style.gridArea = 'nextButton'
        r.style.border = 'solid black'
        r.style.height = '100%'
        r.style.width = '100%'
        r.style.display = 'flex'
        r.style.backgroundColor = 'lightCyan'
        
        const text = function(){
            let r = document.createElement('p')
            r.style.height = '100%'
            r.style.width = '100%'
            r.style.margin = 0
            r.style.writingMode = 'vertical-rl'
            r.style.textOrientation = 'mixed'
            r.style.textAlign = 'center'
            r.style.alignContent = 'center'
            r.style.fontFamily = 'cursive'
            r.style.fontSize = '7dvw'
            r.innerText = '\u{1F53D}'
            return r
        }()
        r.appendChild(text)

        return r;
    }()
    r.appendChild(nextButton)

    const textArea = function(){
        let r = document.createElement('div')
        r.style.gridArea = 'text'
        r.style.height = '100%'
        r.style.width = '100%'
        r.style.display = 'flex'
        r.style.justifyItems = 'center'
        r.style.alignItems = 'center'
        
        const text = function(){
            let r = document.createElement('p')
            r.style.height = '90%'
            r.style.width = '90%'
            r.style.writingMode = 'vertical-rl'
            r.style.textOrientation = 'mixed'
            r.style.textAlign = 'justify'
            r.style.alignContent = 'baseline'
            r.style.fontFamily = 'cursive'
            r.style.fontSize = '14px'
            r.innerText = postCardText
            return r
        }()
        r.appendChild(text)

        return r;
    }()
    r.appendChild(textArea)

    const stamp = function(){
        let r = document.createElement('div')
        r.style.gridArea = 'stamp'
        r.style.height = '100%'
        r.style.width = '100%'
        r.style.backgroundRepeat = 'no-repeat'
        r.style.backgroundPosition = 'center'
        r.style.backgroundSize = 'contain'
        r.style.backgroundImage = `url(${imageStamp})`

        return r;
    }()
    r.appendChild(stamp)


    nextButton.addEventListener('pointerdown', () =>{
        navigation.goToNext()
    })

    return r;
}