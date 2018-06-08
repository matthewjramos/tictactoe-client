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
}
const signUpError = function (error) {
  console.log('signUpError is ', error)
}

const signInSuccess = function (response) {
  console.log('response is ', response)
  store.user = response.user
}
const signInError = function (error) {
  console.log('signInError is ', error)
}

const changePasswordSuccess = function (changePasswordResponse) {
  console.log('changePasswordResponse is ', changePasswordResponse)
}
const changePasswordError = function (error) {
  console.log('changePasswordError is ', error)
}

const signOutSuccess = function (signOutResponse) {
  console.log('signed out successfully')
  delete store.user
  console.log('story after signout is ', store)
}
const signOutFail = function (error) {
  console.log('failed to sign out, per ', error)
}

const getGamesSuccess = function (data) {
  console.log('get games success is ', data)
}
const getGamesFail = function (error) {
  console.log('failed to get games per ', error)
}

const createGamesSuccess = function (data) {
  console.log('create games success is ', data)
}
const createGamesFail = function (error) {
  console.log('failed to create games per ', error)
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
  createGamesFail: createGamesFail
}
