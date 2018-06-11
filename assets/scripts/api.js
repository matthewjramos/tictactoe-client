'use strict'

// const config = require('./config.js')
const store = require('./store.js')

// POST	/sign-up	users#signup - done
// POST	/sign-in	users#signin - done
// DELETE	/sign-out	users#signout - done
// PATCH	/change-password	users#changepw - done
// GET	/games	games#index
// POST	/games	games#create
// GET	/games/:id	games#show
// PATCH/games/:id	games#update
// GET/games/:id/watch	games#watch

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
  console.log('store is ', store)
  console.log('token is ', store.user.token)
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
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGames = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games:id',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGames = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games:id'
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
}
