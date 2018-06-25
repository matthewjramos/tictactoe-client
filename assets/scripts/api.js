'use strict'

// const config = require('./config.js')
const store = require('./store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  // console.log('store is ', store)
  // console.log('token is ', store.user.token)
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // add token
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // add token
  })
}

const getGames = function (data) {
  return $.ajax({
    method: 'GET',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGames = function () {
  // console.log('data is ', data)
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': store.index,
          'value': store.player
        },
        'over': store.game
      }
    }
  })
}

const updateGames = function () {
  // console.log('store.game.id is ', store.game.id)
  // console.log('event.target inner html is ', event.target.innerHTML)
  // console.log('store.user.email is ', store.user.email)
  // console.log('store.game is ', store.game)
  // console.log('store game over is ', store.game.over)
  // console.log('event target is ', event.target)
  // console.log('event target id is ', event.target.id)
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': event.target.id,
          'value': event.target.innerHTML
        },
        'over': store.game.over
      }
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut,
  getGames: getGames,
  createGames: createGames,
  updateGames: updateGames
  // data: data
}
