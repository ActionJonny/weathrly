require('babel-register')({
  presets: ["react", "es2015"]
});
require('babel-polyfill')

global.document = require('jsdom').jsdom(
  "<head><meta charset='UTF-8'><div class='application'></div></head>"
) // the virtual dom this is where our application is rendered.

global.window = document.defaultView // if we have to go to the window (Event bubbling, referencing the window)
global.navigator = window.navigator // if something is paginated this allows us to go from page to page

// if (!global.window.localStorage) {
//  localStorage = {
//    getItem() { return '[]'; },
//    setItem() {}
//  }
// }
