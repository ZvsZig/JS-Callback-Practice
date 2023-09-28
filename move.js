function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
    function moveCharacter(){ 
        if(direction === 'west'){
             x-=1
        }
        if(direction === 'north'){
            y+=1
        }
        if(direction === 'east'){
            x+=1
        }
        if(direction === 'south'){
            y-=1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }
     
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
                character.src = 'assets/green-character/west.gif'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
                character.src = 'assets/green-character/north.gif'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
                character.src = 'assets/green-character/east.gif'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
                character.src = 'assets/green-character/south.gif'
            }
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            character.src = 'assets/green-character/static.gif'
        })  
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}

// done // 
