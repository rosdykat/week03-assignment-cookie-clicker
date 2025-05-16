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
const cpsNum = document.getElementById("cpsNum");

imageClick.addEventListener("click", function () {
  stats.cookieCount++;
  console.log(stats);
  cookieNum.textContent = "Cat Counter: " + stats.cookieCount;
});

// if there is data in local storage, update stats with this data, so the users picks up where they left off (use if > update)

// ============================================================================

async function getShop() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  const wrangledData = data;
  // console.log(data);
  return wrangledData;
}
// getShop();

const shopBox = document.getElementById("shop-box");

function createShop(myData) {
  // for (let i = 0; i < apiArray.length; i++) {
  console.log(myData);
  const shopText = document.createElement("button");
  shopText.textContent = `${myData.name} - cost: ${myData.cost} - increase: ${myData.increase} CPS:`;
  id = myData.id;

  // test
  shopText.addEventListener("click", function () {
    shopClick(myData);
  });
  // shopText.name = myData.name;
  // shopText.cost = myData.cost;
  // shopText.increase = myData.increase;
  // createShop(apiArray[i]);
  shopBox.appendChild(shopText);
}
// }
async function createShopImageAndInfo() {
  const fetchData = await getShop();
  fetchData.forEach((myData) => {
    createShop(myData);
  });
}

createShopImageAndInfo();
// complete
// // shopText.name

// // shop upgrades
// // fetch updates from the API
// // API url: https://cookie-upgrade-api.vercel.app/api/upgrades

// // To create multiple elements in a more convenient way, use loops.
// // create DOM elements to contain the upgrades data
// // create an element
// // assign the value to its text content
// // append it to the DOM
// // after you complete this tasks, you should see the upgrades on your website

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

function shopClick(myData) {
  if (stats.cookieCount >= myData.cost) {
    // subtracting cost from cookie count
    stats.cookieCount -= myData.cost;
    // increasing shop item's cps to cps count
    stats.cps += myData.increase;

    // Updating the counters on the document by changing text content
    cookieNum.textContent = "Cat Counter: " + stats.cookieCount;
    cpsNum.textContent = "CPS: " + stats.cps;
    console.log("Upgrade bought!", stats);
  }
}

setInterval(function () {
  // cookie count = cookie count + cookie stats number per second
  stats.cookieCount += stats.cps;
  cookieNum.textContent = "Cat Counter " + stats.cookieCount;
}, 1000);

// // const shopClick = document.querySelector("shop-box");
// const shopClick = document.getElementById("shop-box");

// shopClick.addEventListener("click", function () {
//   // shopClick.forEach((shopLogic) => {
//   stats.cps + myData.increase;
//   console.log(stats.cps);
// });

// imageClick.addEventListener("click", function () {
//   stats.cps +
//   console.log(stats);
//   cookieNum.textContent = "Cat Counter: " + stats.cookieCount;

// you will need functions to contain the game logic
// to create the logic of the shop, you could have per upgrade OR a reusable function that works for all upgrades (buy upgrades function with different parameters, when attached to dif parameters will use that upgrade, tidier but might be more confusing)

// since we are using local storage, make sure that the ulocal storage values are updated after the user buys an upgrade OR when the user clicks on the cookie
