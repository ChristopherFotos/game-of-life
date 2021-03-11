// Boolean to track whether modal is open. 
let isModalOpen = false

// Add modal to screen
function addModal(){

    if(!isModalOpen){
        isModalOpen = true

        let modal = document.createElement('div')
        modal.id = 'modal'
        
        modal.innerHTML = `
        <div class="exit-container">
        <span id="exit" onclick="exitModal()">X</span>
        </div>
        
        <h1 class="help-title">About</h1>
        <p class="help-text">
            Game of life is a <strong>cellular automaton</strong> developed by mathemetician Jon Conway in 1970. <br><br>

            <strong>Cool. But what's a cellular automoton?</strong><br>
            It's actually a lot simpler than it sounds. A cellular automoton is just a collection of cells that can be in a number of different states.
            A set of rules determines which of those states a given cell should be in at a given time. If that's still confusing to you,
            read on. <br><br>

            In Conway's game of life each cell has two possible states: 'alive' and 'dead' (or the less morbid 'on' and 'off' if you'd like). 
            on every 'tick' or revision of the board, a few simple rules are applied to determine which of those states each cell should be in.
            the rules are as follows, courtesy of wikipedia: <br><br>

            <i>
            1. Any live cell with fewer than two live neighbours dies, as if by underpopulation. <br>
            2. Any live cell with two or three live neighbours lives on to the next generation. <br>
            3. Any live cell with more than three live neighbours dies, as if by overpopulation. <br>
            4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction. <br><br>

            These rules, which compare the behavior of the automaton to real life, can be condensed into the following: <br><br>
            
            1. Any live cell with two or three live neighbours survives. <br>
            2. Any dead cell with three live neighbours becomes a live cell. <br>
            3. All other live cells die in the next generation. Similarly, all other dead cells stay dead. <br>
            </i>
            <br><br>
        This particular implementation of Conway's Game of Life will review the board every 300 milliseconds. 

        </p>
        <p class="help-text">
            <strong>So why is this interesting?</strong><br>
            It's interesting because of the extreme complexity and unexpected behavior it exhibits. Simple patterns can grow into massive, complex,
            self-sustaining 'eco-systems' of sorts. Conways Game of Life can even be used to make functioning logic gates and virtual computers. I
            recommend searching 'Conway's Game of Life' on youtube to learn more. 
        </p>

        <h1 class="help-title">Instructions</h1>
        <p class="help-text">
            Click and drag across the screen to change cells from 'alive' to 'dead. <br><br>
            
            The game is paused by default. When you hit the play button in the top right-hand menu, 
            the computer will start reviewing the board every 300 milliseconds, and you can see how the population of cells 
            you've placed on the screen grows, shrinks, and changes shape. <br><br>

            You can clear the board by clicking 'clear' in the top right-hand corner of your screen. <br><br>

            If you'd like, you can step through revisions manually by pausing the board and clicking the '>[]' button in the top right-hand menu.

        </p>
        `

        let body = document.getElementsByTagName('body')[0]
        body.appendChild(modal)

    }
}

function exitModal(){
    console.log('running')
    let modal = document.getElementById('modal')
    let body = document.getElementsByTagName('body')[0]
    body.removeChild(modal)
    isModalOpen = false
}






