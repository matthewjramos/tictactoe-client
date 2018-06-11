'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')
// const gameEngine = require('./engine-logic.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// below function used to test clickability of game spaces
const gameClick = function (event) {
  event.preventDefault()
  console.log('clicked ', (event.target))

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
  $('.box').toggleClass('toggled')
  if ($(event.target).hasClass('toggled')) {
    ($(event.target).html('x'))
  } else {
    ($(event.target).html('o'))
  }
}
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
}

const signInSubmit = function (event) {
  event.preventDefault()
  console.log('signIn form submitted')
  const data = getFormFields(event.target)
  console.log('signIn data is ', data)
  gameApi.signIn(data)
    .then(gameUi.signInSuccess)
    .catch(gameUi.signInError)
}

const changePasswordSubmit = function (event) {
  event.preventDefault()
  console.log('Password change form submitted')
  const data = getFormFields(event.target)
  console.log('Password change data is ', data)
  gameApi.changePassword(data)
    .then(gameUi.changePasswordSuccess)
    .catch(gameUi.changePasswordError)
}

const signOutSubmit = function (event) {
  event.preventDefault()
  console.log('Sign out clicked')
  gameApi.signOut()
    .then(gameUi.signOutSuccess)
    .catch(gameUi.signOutFail)
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
