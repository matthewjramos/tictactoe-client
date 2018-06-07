'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameEvents = require('./events.js')

$('.box').on('click', gameEvents.gameClick)
$('#sign-out').on('click', gameEvents.signOutClick)
//
// click handler for divs
//   >this will reference the new events.js file
//       > events.js will reference api.js to figure out how to actually carry out the transfer of data
//           >will also reference ui.js which will hold the cool messages and symbol popups or animations for my div clicks
