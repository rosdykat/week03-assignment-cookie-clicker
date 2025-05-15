console.log("Cookie clicker!");

// default starting values for cookie count and cps
// let cookieCount = 0;
// let cps = 0;

const stats = {
  cookieCount: 0,
  cps: 0,
};

const imageClick = document.getElementById("imageClick");
const cookieNum = document.getElementById("cookieNum");

imageClick.addEventListener("click", function () {
  stats.cookieCount++;
  console.log(stats);
  cookieNum.textContent = "Cat Counter: " + stats.cookieCount;
});

// if there is data in local storage, update stats with this data, so the users picks up where they left off (use if > update)

// ============================================================================
// shop upgrades
// fetch updates from the API
// API url: https://cookie-upgrade-api.vercel.app/api/upgrades

// To create multiple elements in a more convenient way, use loops.
// create DOM elements to contain the upgrades data
// create an element
// assign the value to its text content
// append it to the DOM
// after you complete this tasks, you should see the upgrades on your website

// // ==============================================================================
// // the interval
// setInterval(function () {
//   stats.cookieCount += cps; // cookieCOunt = cookieCOunt + cps
//   // update the text content in the DOM with the new values
//   // save the new values in the local storage
// }, 1000);

// =============================================================================
// game logic
// when the user clicks on the cookie, the cookieCount value goes up by 1
// when the user clicks an upgrade, the cookie count value goes down, and the cps goes up (I think you'd use an if command for this)

// you will need functions to contain the game logic
// to create the logic of the shop, you could have per upgrade OR a reusable function that works for all upgrades (buy upgrades function with different parameters, when attached to dif parameters will use that upgrade, tidier but might be more confusing)

// since we are using local storage, make sure that the ulocal storage values are updated after the user buys an upgrade OR when the user clicks on the cookie
