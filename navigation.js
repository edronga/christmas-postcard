'use strict'

class Navigation{
    constructor(postcardData){
        this.postcardData = [...postcardData]
    }
    postcardData = []
    cursor =  0
    isCursorOnImage = false
    goToNext(){
        if (this.cursor !== this.postcardData.length - 1){
            if (this.isCursorOnImage){
                this.cursor++
                this.isCursorOnImage = false
            }
            else if (!this.isCursorOnImage){
                this.isCursorOnImage = true
            }
        }
        else {
            if (this.isCursorOnImage){
                this.cursor = 0
                this.isCursorOnImage = false
            }
            else if (!this.isCursorOnImage){
                this.isCursorOnImage = true
            }
        }
        
        if (!this.isCursorOnImage){
            const htmlData = getPostcardScreen(this.postcardData[this.cursor].text, this.postcardData[this.cursor].stamp)
            document.querySelector('#myContent').innerHTML = ''
            document.querySelector('#myContent').appendChild(htmlData)
            new Image().src = this.postcardData[this.cursor].image
            return;
        }
        else if (this.isCursorOnImage){
            const htmlData = getPostCardImage(this.postcardData[this.cursor].image)
            document.querySelector('#myContent').innerHTML = ''
            document.querySelector('#myContent').appendChild(htmlData)
            return;
        }  
    }

}
