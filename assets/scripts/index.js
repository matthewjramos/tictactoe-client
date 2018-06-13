'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameEvents = require('./events.js')

$(() => {
  $('.box').on('click', gameEvents.gameClick)
  // $('#sign-out').on('click', gameEvents.signOutClick)
  // $('#sign-in').on('click', gameEvents.signInClick)
  // $('#sign-up').on('click', gameEvents.signUpClick)

  $('#sign-up').on('submit', gameEvents.signUpSubmit)
  $('#sign-in').on('submit', gameEvents.signInSubmit)
  $('#change-password').on('submit', gameEvents.changePasswordSubmit)
  $('#sign-out').on('click', gameEvents.signOutSubmit)

  $('#get-games').on('click', gameEvents.getGamesSubmit)
  $('#create-games').on('click', gameEvents.createGamesSubmit)
  // $('#update-games').on('click', gameEvents.updateGamesSubmit)

  // create game button
  // reset game button

  // bonus - customize graphics button
})
//
// click handler for divs
//   >this will reference the new events.js file
//       > events.js will reference api.js to figure out how to actually carry out the transfer of data
//           >will also reference ui.js which will hold the cool messages and symbol popups or animations for my div clicks
