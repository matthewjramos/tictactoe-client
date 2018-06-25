'use strict'

const store = require('./store.js')
const gameEvents = require('./events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
//
// use require without a reference to ensure a file is bundled
// require('./example')
//
const signUpSuccess = function (signUpResponse) {
  $('#content').html('Signed up successfully')
  $('#sign-up').hide()
  $('#sign-up').trigger('reset')
}

const signUpError = function (error) {
  $('#content').html('Signup unsuccessful', error)
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#content').html('Signed in successfully! Please create game.')
  $('#sign-in').hide()
  $('#sign-up').hide()
  // $('#sign-out').show()
  // $('#change-password').show()
  $('.start-hidden').show()
}

const signInError = function (error) {
  $('#content').html('Sign in unsuccessful, please try again!', (error))
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#content').html('Password changed successfully!')
}
const changePasswordError = function (error) {
  $('#content').html('Password change unsuccessful, please try again!', (error))
}

const signOutSuccess = function (signOutResponse) {
  delete store.user
  $('#content').html('Signed out successfully!')
  $('#sign-up').show()
  $('#sign-in').show()
  // $('#change-password').toggle()
  $('.start-hidden').hide()
}

const signOutFail = function (error) {
  // console.log('failed to sign out, per ', error)
  $('#content').html('Sign out failure, please try again. ', error)
}

const getGamesSuccess = function (data) {
  // console.log('get games success is ', store.userData.games.length)
  // console.log('user is ', store.user)
  // console.log('store.data.game is ', store.data.game)
  // store.games = data.games
  // store.userData = getGamesResponse
  // $('#content').html('get games success', store.userData.games.length)
  $('#content').html("Wow, you've played " + data.games.length + ' games!')
}
const getGamesFail = function (error) {
  // console.log('failed to get games per ', error)
  $('#content').html('Failed to get games', error)
}

const createGamesSuccess = function (data) {
  // console.log('create games data success is ', data)
  $('#content').html('Game created successfuly! ', data)
  store.game = data.game
  // console.log('resetting board')
  // const gameBoard = []
  $('.box').show()
  $('.box').html('')
  $('.box').on('click', gameEvents.gameClick)
  // console.log(gameBoard)
  // $('.box').html('').prop('disabled', false)
  // $('.box').html('').prop('disabled', false)
}

const createGamesFail = function (error) {
  // console.log('failed to create games per ', error)
  $('#content').html('Failed to create game ', error)
}
const updateGamesSuccess = function (data) {
  // console.log('update games success is ', data)
  store.game = data.game
  // $('#content').html('game updated success ', data)
}
const updateGamesFail = function (error) {
  // console.log('failed to update games per ', error)
  $('#content').html('Failed to update game', error)
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  signInSuccess: signInSuccess,
  signInError: signInError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordError: changePasswordError,
  signOutSuccess: signOutSuccess,
  signOutFail: signOutFail,
  getGamesSuccess: getGamesSuccess,
  getGamesFail: getGamesFail,
  createGamesSuccess: createGamesSuccess,
  createGamesFail: createGamesFail,
  updateGamesSuccess: updateGamesSuccess,
  updateGamesFail: updateGamesFail
}
