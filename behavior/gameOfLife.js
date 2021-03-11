const cellTracker = {
    liveCells: [],
    pushCell: function(cell){
        let index = this.liveCells.indexOf(cell)
        if(index === -1) this.liveCells.push(cell)
    },

    spliceCell: function(cell){
        let index = this.liveCells.indexOf(cell)
        if(index !== -1) this.liveCells.splice(index, 1)
    }
}


function step(cell){
    let liveNeighbors = 0

    for(neighbor in cell.neighbors){
        if(cell.neighbors[neighbor] && cell.neighbors[neighbor].state.alive){
            liveNeighbors += 1
        }
    }

    if(!cell.state.alive && liveNeighbors === 3){
        cell.newState.alive   = true
        cellTracker.pushCell(cell)
        cell.newState.updates = function(){
            cell.div.classList.add('a')
        }
        
    }

    if(cell.state.alive && (liveNeighbors === 3 || liveNeighbors === 2)){
        cell.newState.alive   = true    
        cellTracker.pushCell(cell)
    }

    if(cell.state.alive && liveNeighbors < 2){
        cell.newState.alive    = false
        cellTracker.spliceCell(cell)
        cell.newState.updates  = function(){
            cell.div.classList = ['cell']
        }
        
    }

    if(cell.state.alive && liveNeighbors > 3){
        cell.newState.alive    = false
        cellTracker.spliceCell(cell)
        cell.newState.updates  = function(){
            cell.div.classList = ['cell']
        }
        
    }
}