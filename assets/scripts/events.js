'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// below function used to test clickability of game spaces
const gameClick = function (event) {
  event.preventDefault()
  console.log('clicked ', (event.target))
  $(event.target).html('X or O')
}
// can you do if/then statement for x or o? like if x, put o?
const signOutClick = function (event) {
  event.preventDefault()
  console.log('clicked signout button')
  // $('sign-out').hide(event.target), is this even a function that makes sense?
  // add the token removal function
}
const signInClick = function (event) {
  event.preventDefault()
  console.log('clicked sign in button')
  // $('sign-out').hide(event.target), is this even a function that makes sense?
  // add the token removal function
}
const signUpClick = function (event) {
  event.preventDefault()
  console.log('clicked sign up button')
  // $('sign-out').hide(event.target), is this even a function that makes sense?
  // add the token removal function
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
  createGamesSubmit: createGamesSubmit

}
