'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const gameBoard = []
const store = require('./store.js')


// below function used to test clickability of game spaces


//board starts hidden, or unclickable
// hide placeholder div when board loads/appears
// change password starts hidden
// sign out starts hidden
// get games starts hidden
// fix patch api
//add click/turn count for tie functionality
//remove console logs



let clickCount = 0
const gameClick = function (event) {
  const index = event.target.id
  event.preventDefault()
  // console.log('clicked ', (event.target.id))
  // console.log('event target is ', (event.target))
  clickCount++
  // console.log('clickCount is ', clickCount)
  $('.box').toggleClass('toggled')
  if ($(event.target).hasClass('toggled')) {
    ($(event.target).html('x'))
    $('#content').html('O turn')
  } else {
    ($(event.target).html('o'))
    $('#content').html('X turn')
  }
  // $(event.target).off('click')
  // $(event.target):disabled
  gameBoard[index] = ($(event.target).html())
  // console.log(gameBoard)
  $(event.target).off('click')

  const checkWin = function () {
    if (clickCount >= 5 && gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') {
      $('.box').on('click', gameClick)
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('X wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('X wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('X wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('X wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('X wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('X wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('X wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('X wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('O wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('O wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('O wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('O wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('O wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('O wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('O wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount >= 5 && gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o') {
      $('.box').toggle()
      $('.box').html(' ')
      $('#content').html('O wins!')
      store.game.over = true
      clickCount = 0
      gameBoard.length = 0
      $('.box').on('click')
    } else if (clickCount === 9) {
      $('#content').html('draw')
      $('.box').html(' ')
      $('.box').toggle()
      store.game.over = true
      clickCount = 0
      $('.box').on('click')
    }
  }
  updateGamesSubmit()
  checkWin()
}

const signUpSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.signUp(data)
    .then(gameUi.signUpSuccess)
    .catch(gameUi.signUpError)
  // $(event.target).toggle()
  // $(event.target).trigger('reset')
}

const signInSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.signIn(data)
    .then(gameUi.signInSuccess)
    .catch(gameUi.signInError)
  // $(event.target).toggle()
  // $('#sign-up').toggle()
  $(event.target).trigger('reset')
  // $('#sign-out').show()
  // $('#change-password').show()
}

const changePasswordSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.changePassword(data)
    .then(gameUi.changePasswordSuccess)
    .catch(gameUi.changePasswordError)
  $(event.target).trigger('reset')
}

const signOutSubmit = function (event) {
  event.preventDefault()
  gameApi.signOut()
    .then(gameUi.signOutSuccess)
    .catch(gameUi.signOutFail)
  // $('#sign-up').toggle()
  // $('#sign-in').toggle()
}

const getGamesSubmit = function (event) {
  event.preventDefault()
  // console.log('get games clicked')
  gameApi.getGames()
    .then(gameUi.getGamesSuccess)
    .catch(gameUi.getGamesFail)
}

const createGamesSubmit = function (event) {
  event.preventDefault()
  // const gameBoard = []
  // console.log('create games clicked')
  gameApi.createGames()
    .then(gameUi.createGamesSuccess)
    .catch(gameUi.createGamesFail)
  $('.box').html('')
}

const updateGamesSubmit = function (data) {
  event.preventDefault()
  gameApi.updateGames(data)
    .then(gameUi.updateGamesSuccess)
    .catch(gameUi.updateGamesFail)
}

module.exports = {
  gameClick: gameClick,
  // signOutClick: signOutClick,
  // signInClick: signInClick,
  // signUpClick: signUpClick,
  signUpSubmit: signUpSubmit,
  signInSubmit: signInSubmit,
  changePasswordSubmit: changePasswordSubmit,
  signOutSubmit: signOutSubmit,
  getGamesSubmit: getGamesSubmit,
  createGamesSubmit: createGamesSubmit,
  updateGamesSubmit: updateGamesSubmit

}
