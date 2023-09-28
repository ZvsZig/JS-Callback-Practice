const inventory = newInventory();
move(inventory).to(0, 0);

const character = newImage('assets/green-character/static.gif')

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

move(character).withArrowKeys(100, 250)
move(newImage("assets/tree.png")).to(200, 450);
move(newImage("assets/pillar.png")).to(350, 250);
move(newImage("assets/pine-tree.png")).to(450, 350);
move(newImage("assets/crate.png")).to(150, 350);
move(newImage("assets/well.png")).to(500, 575);
move(newItem("assets/sword.png")).to(500, 555);
move(newItem("assets/shield.png")).to(165, 335);
move(newItem("assets/staff.png")).to(600, 250);
