'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// below function used to test clickability of game spaces
const gameClick = function (event) {
  event.preventDefault()
  console.log('clicked a div')
  $(event.target).html('X or O')
}
const signOutClick = function (event) {
  event.preventDefault()
  console.log('clicked signout button')
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

// click handler for divs
//   >this will reference the new events.js file
//       > events.js will reference api.js to figure out how to actually carry out the transfer of data
//           >will also reference ui.js which will hold the cool messages and symbol popups or animations for my div clicks

module.exports = {
  gameClick: gameClick,
  signOutClick: signOutClick
}
