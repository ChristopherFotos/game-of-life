const state = {
    playing: false,
    drawing: false
}

function drawcell(){
    let cell             = document.createElement('div')
    let body             = document.getElementsByTagName('body')[0]
    cell.style.position  = 'absolute'
    cell.style.left      = this.x + 'px'
    cell.style.top       = this.y  +  'px'
    cell.style.width     = this.size  + 'px'
    cell.style.height    = this.size  + 'px'
    cell.style.margin    = 'none'
    cell.classList.add('cell')
    cell.dataset.cell    = this.HTMLid
    body.append(cell)
    this.div = cell
}

let board = new Board({
    width: window.innerWidth, 
    height: window.innerHeight, 
    cellSize:20, 
    stepFunction: step, 
    updateInterval: 300, 
    draw: drawcell,
    cellByCell: true
})




document.addEventListener('mousedown', e => {
    e.preventDefault()
    state.drawing = true
})

document.addEventListener('mouseup', e => {
    state.drawing = false
})

document.addEventListener('mousemove', e => {
    state.mouseX = e.clientX
    state.mouseY = e.clientY
})

let cells   = Array.from(document.getElementsByClassName('cell'))

cells.forEach(c=> {
    c.addEventListener('mouseenter', e => {
        if(state.drawing){
            e.target.classList.add('a')
            board.cellLookup[e.target.dataset.cell].state.alive = true
            cellTracker.pushCell(board.cellLookup[e.target.dataset.cell])  
        }
    })

    c.addEventListener('mouseleave', e => {
        e.target.classList.toggle('looking')
    })

    c.addEventListener('mouseenter', e => {
        e.target.classList.toggle('looking')
})
    c.addEventListener('mousedown', e => {
        e.target.classList.add('a')
            board.cellLookup[e.target.dataset.cell].state.alive = true 
            cellTracker.pushCell(board.cellLookup[e.target.dataset.cell])      
    })
})



