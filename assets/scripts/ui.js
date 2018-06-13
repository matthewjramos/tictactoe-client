'use strict'

const store = require('./store.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
//
// use require without a reference to ensure a file is bundled
// require('./example')
//
const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is ', signUpResponse)
  $('#content').html('signed up success')
}
const signUpError = function (error) {
  console.log('signUpError is ', error)
}

const signInSuccess = function (response) {
  console.log('response is ', response)
  store.user = response.user
  $('#content').html('signed in success ', store.user.id)
}
const signInError = function (error) {
  console.log('signInError is ', error)
}

const changePasswordSuccess = function (changePasswordResponse) {
  console.log('changePasswordResponse is ', changePasswordResponse)
  $('#content').html('password changed successfully')
}
const changePasswordError = function (error) {
  console.log('changePasswordError is ', error)
  $('#content').html('password change unsuccessful')
}

const signOutSuccess = function (signOutResponse) {
  console.log('signed out successfully')
  delete store.user
  $('#content').html('signed out success ', store)
}
const signOutFail = function (error) {
  console.log('failed to sign out, per ', error)
  $('#content').html('sign out fail ', error)
}

const getGamesSuccess = function (data) {
  console.log('get games success is ', data)
  $('#content').html('get games success', data)
}
const getGamesFail = function (error) {
  console.log('failed to get games per ', error)
  $('#content').html('get games failed ', error)
}

const createGamesSuccess = function (data) {
  console.log('create games data success is ', data)
  $('#content').html('game created success ', data)
  store.game = data.game
  console.log('resetting board')
  const gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').show()
  $('.box').html('')
  console.log(gameBoard)
}

const createGamesFail = function (error) {
  console.log('failed to create games per ', error)
  $('#content').html('failed to create games per ', error)
}
const updateGamesSuccess = function (data) {
  console.log('update games success is ', data)
  $('#content').html('game updated success ', data)
}
const updateGamesFail = function (error) {
  console.log('failed to update games per ', error)
  $('#content').html('failed to update games per ', error)
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
