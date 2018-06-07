'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const gameClick = function (event) {
  event.preventDefault()
  console.log('clicked a div')
  $(event.target).html('X or O')
}
// click handler for divs
//   >this will reference the new events.js file
//       > events.js will reference api.js to figure out how to actually carry out the transfer of data
//           >will also reference ui.js which will hold the cool messages and symbol popups or animations for my div clicks

module.exports = {
  gameClick: gameClick
}
