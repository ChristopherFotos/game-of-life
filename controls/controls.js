let playbtn = document.getElementById('play')
let playimg = document.createElement('img')
playimg.classList.add('playimg')
playimg.src = ('./images/play.svg')
playimg.style.pointerEvents = 'none'
playimg.dataset.control = 'play'

playimg.onload= ()=>playbtn.appendChild(playimg)

function playControl(){
    console.log('playcontrol')

    state.playing? board.stop() : board.start()
    state.playing = !state.playing
    state.playing ? playimg.src = ('./images/pause.svg') : playimg.src = ('./images/play.svg')
}

function clear(){
    console.log('clearing')
    cellTracker.liveCells.forEach(c => {
        c.state.alive = false
        c.div.classList.remove('a')
    })
}

document.addEventListener('click', e => {
    console.log(e.target)

    const controls = {
        play: playControl,
        skip: ()=>{board.update(board)},
        clear:  clear,
        help: addModal,
    }

    if(e.target.dataset.control){
        controls[e.target.dataset.control]()
    }
})