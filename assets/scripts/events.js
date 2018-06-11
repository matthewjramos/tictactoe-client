'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')
// const gameEngine = require('./engine-logic.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameBoard = []
// below function used to test clickability of game spaces
const gameClick = function (event) {
  let index = event.target.id
  event.preventDefault()
  console.log('clicked ', (event.target.id))
  console.log('clicked ', (event.target))
  // console.log(event.target.data)

  // if ($(event.target).html('x')) {
  //   $('#content').html('invalid space')
  // } else if ($(event.target).html('o')) {
  //   $('#content').html('invalid space')
  // }
  $('.box').toggleClass('toggled')
  if ($(event.target).hasClass('toggled')) {
    ($(event.target).html('x'))
  } else {
    ($(event.target).html('o'))
  }
  console.log(gameBoard[(event.target.id)])
  // if ($(event.target) === $('#1')) {
  gameBoard[index] = ($(event.target).html())
  // } else {
  // gameBoard.push($(event.target).html())
  console.log(gameBoard)
  const checkWin = function () {
    if (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') {
      console.log('x wins')
      $('#content').html('X wins!')
    } else if (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') {
      console.log('x wins')
      $('#content').html('X wins!')
    } else if (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') {
      console.log('x wins')
      $('#content').html('X wins!')
    } else if (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') {
      console.log('x wins')
      $('#content').html('X wins!')
    } else if (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') {
      console.log('x wins')
      $('#content').html('X wins!')
    } else if (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') {
      console.log('x wins')
      $('#content').html('X wins!')
    } else if (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') {
      console.log('x wins')
      $('#content').html('X wins!')
    } else if (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x') {
      console.log('x wins')
      $('#content').html('X wins!')
    } else if (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') {
      console.log('o wins')
      $('#content').html('O wins!')
    } else if (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') {
      console.log('o wins')
      $('#content').html('O wins!')
    } else if (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') {
      console.log('o wins')
      $('#content').html('O wins!')
    } else if (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') {
      console.log('o wins')
      $('#content').html('O wins!')
    } else if (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') {
      console.log('o wins')
      $('#content').html('O wins!')
    } else if (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') {
      console.log('o wins')
      $('#content').html('O wins!')
    } else if (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') {
      console.log('o wins')
      $('#content').html('O wins!')
    } else if (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o') {
      console.log('o wins')
      $('#content').html('O wins!')
    // } else if (gameBoard.length === 9 && gameBoard.some('')) {
    //   $('#content').html('draw')
    }
  }
  checkWin()
// data =  {
//   "game": {
//     "cell": {
//       "index": 0,
//       "value": "x"
//     },
//     "over": false
//   }
// }
}

// gameEngine.checkWin()
// }

// else {} - figure how to put the below toggle class section in here

//   const turn1 = function (event) {
//     $(event.target).html('x')
//     turn2()
//   }
//   const turn2 = function (event) {
//     $(event.target).html('o')
//     turn1()
//   }
//   turn1()
// }
// var x = false;
// $(event.target).on('click', function(){
//  if (!x){
//     $(event.target).html('x')
//
//   x = true;
//  }
//  else {
//     $(event.target).html('o')
//
//   x = false;
//  }
// });
// }
  //   $(event.target).toggle(
  //     function (event) {
  //       $(event.target).html('x')
  //     }, function (event) {
  //       $(event.target).html('o')
  //     })
  // }
  // ^^^fun fact: this only makes your stuff disappear
  // $(event.target).html('X or O')
  // if ($(event.target).text('x') === true) {
  // if ($(event.target).text() === "x") {
  // if ($event.target).text('x')) {
  // if ($(event.target).text() ('x'){
  //     $(event.target).text('o')
  //   } else if
  //   ($(event.target).text('o')) {
  //     $(event.target).text('x')
  //   }
  // }
  //
  // const gameBoard = []
  // $(event.target).on('click', function (event) {
      // let x = false
      // if (!x) {
      //   // gameBoard.push('x')
      //   $(event.target).html('x')
      //   x = true
      // } else {
      //   // gameBoard.push('o')
      //   $(event.target).html('o')
      //   x = false
      // }
  // })
  // $(event.target).one('click', function () {
  //   if (($(event.target).text() === '')) {
  //     $(event.target).text('x')
  //   } else if (($(event.target).text() !== '')) {
  //     $('#content').html('invalid space')
  //   } else {
  //     $(event.target).text('o')
  //   }
  // })
//

// can you do if/then statement for x or o? like if x, put o?
const signOutClick = function (event) {
  event.preventDefault()
  console.log('clicked signout button')
}
const signInClick = function (event) {
  event.preventDefault()
  console.log('clicked sign in button')
}
const signUpClick = function (event) {
  event.preventDefault()
  console.log('clicked sign up button')
}

// POST	/sign-up	users#signup
// POST	/sign-in	users#signin
// DELETE	/sign-out	users#signout
// PATCH	/change-password	users#changepw
// GET	/games	games#index
// POST	/games	games#create
// GET	/games/:id	games#show
// PATCH	/games/:id	games#update
// GET	/games/:id/watch	games#watch

const signUpSubmit = function (event) {
  event.preventDefault()
  console.log('submit event')
  const data = getFormFields(event.target)
  console.log(data)
  gameApi.signUp(data)
    .then(gameUi.signUpSuccess)
    .catch(gameUi.signUpError)
  $(event.target).toggle()
  $(event.target).trigger('reset')
}

const signInSubmit = function (event) {
  event.preventDefault()
  console.log('signIn form submitted')
  const data = getFormFields(event.target)
  console.log('signIn data is ', data)
  gameApi.signIn(data)
    .then(gameUi.signInSuccess)
    .catch(gameUi.signInError)
  $(event.target).toggle()
  $('#sign-up').toggle()
  $(event.target).trigger('reset')
}

const changePasswordSubmit = function (event) {
  event.preventDefault()
  console.log('Password change form submitted')
  const data = getFormFields(event.target)
  console.log('Password change data is ', data)
  gameApi.changePassword(data)
    .then(gameUi.changePasswordSuccess)
    .catch(gameUi.changePasswordError)
  $(event.target).trigger('reset')

}

const signOutSubmit = function (event) {
  event.preventDefault()
  console.log('Sign out clicked')
  gameApi.signOut()
    .then(gameUi.signOutSuccess)
    .catch(gameUi.signOutFail)
  $('#sign-up').toggle()
  $('#sign-in').toggle()
}

const getGamesSubmit = function (event) {
  event.preventDefault()
  console.log('get games clicked')
  gameApi.getGames()
    .then(gameUi.getGamesSuccess)
    .catch(gameUi.getGamesFail)
}

const createGamesSubmit = function (event) {
  event.preventDefault()
  console.log('create games clicked')
  gameApi.createGames()
    .then(gameUi.createGamesSuccess)
    .catch(gameUi.createGamesFail)
  $('.box').html('')

}

const updateGamesSubmit = function (event) {
  event.preventDefault()
  console.log('update games clicked')
  gameApi.updateGames()
    .then(gameUi.updateGamesSuccess)
    .catch(gameUi.updateGamesFail)
}

module.exports = {
  gameClick: gameClick,
  signOutClick: signOutClick,
  signInClick: signInClick,
  signUpClick: signUpClick,
  signUpSubmit: signUpSubmit,
  signInSubmit: signInSubmit,
  changePasswordSubmit: changePasswordSubmit,
  signOutSubmit: signOutSubmit,
  getGamesSubmit: getGamesSubmit,
  createGamesSubmit: createGamesSubmit,
  updateGamesSubmit: updateGamesSubmit

}
