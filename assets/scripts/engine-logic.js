
let gameboard = ["","","","","","","","",""]
const player_o = player 1? how to write this
const player_x = player 2? how to write this
// add the div boxes into the array
// is this per turn? div number = index number maybe?
// alternate player turn order
// place x or o based on who turn it is
$('.box').on('click', gameEvents.gameClick)

const gameClick = function (event) {
  event.preventDefault()
  console.log('clicked ', (event.target))
  // $(event.target).html('X or O')
  if box.contains('x'){
  (event.target).html('o')
  } else {
  (event.target).html('x')
  }
}

//calculate win condition
  // something like [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7] = win, else keep playing
// check if those are all the combos
