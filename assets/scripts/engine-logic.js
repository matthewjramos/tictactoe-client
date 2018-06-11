'use strict'

// let gameboard = ["","","","","","","","",""]
const gameBoard = []
// const player_o = player 1? how to write this
// const player_x = player 2? how to write this
// add the div boxes into the array
// is this per turn? div number = index number maybe?
// alternate player turn order
// place x or o based on who turn it is
// $('.box').on('click', gameEvents.gameClick)

// let player_x = 0
// let player_o = 1
//
// if ((event.target).text(!"") {
//       $('#content').html('invalid space')
// } else {
//   gameClick ( place x or o )
// }


// const gameClick = function (event) {
//   event.preventDefault()
//   console.log('clicked ', (event.target))
//   // $(event.target).html('X or O')
//   if box.contains('x'){
//   (event.target).html('o')
//   } else {
//   (event.target).html('x')
//   }
// }
// if box is x, and clicked again,
//   give error about invalid space,
//   dont change text in box
// if box is o, and click again,
//   give error about invalid space
//   dont change text in box
// if box is empty
//   place x
// if last click was x,
//   place o

// calculate win condition
// const checkWin = function () {
//   if (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') {
//     console.log('x wins')
//   } else {
//     console.log('next turn')
//   }
  // [0,1,2] === [x,x,x]
  // [3,4,5] ===
  // [6,7,8]
  // [0,3,6]
  // [1,4,7]
  // [2,5,8]
  // [0,4,8]
  // [2,4,6]
// }
// something like [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7] = win, else keep playing
// check if those are all the combos
//
// module.exports = {
//   checkWin: checkWin
// }
