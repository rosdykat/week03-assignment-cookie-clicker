console.log("Cookie clicker!");

// default starting values for cookie count and cps - This will be used a lot!

const stats = {
  cookieCount: 0,
  cps: 0,
};

// Defining variables to access html elements

const imageClick = document.getElementById("imageClick");
const cookieNum = document.getElementById("cookieNum");
const cpsNum = document.getElementById("cpsNum");

// First step: Image click function, using addEventListener to increase the cookie count by 1, update the counter, and store number in local storage

imageClick.addEventListener("click", function () {
  stats.cookieCount++;
  console.log(stats); //Not needed
  cookieNum.textContent = "Cat Counter: " + stats.cookieCount;
  const stringifiedStats = JSON.stringify(stats.cookieCount);
  localStorage.setItem("CookieCount", stringifiedStats);
});

// ============================================================================
// fetching the API data of the shop Joe provided
async function getShop() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  const wrangledData = data;
  // console.log(data);
  return wrangledData;
}

const shopBox = document.getElementById("shop-box");

// using the fetched data to turn the shop into elements on my page. The function is using "myData" as a parameter

function createShop(myData) {
  console.log(myData); //Not needed
  const shopText = document.createElement("button");
  // setting text content the same as joe's API
  shopText.textContent = `${myData.name} - cost: ${myData.cost} - increase: ${myData.increase} CPS:`;
  id = myData.id;

  // whenever shopText (button) is clicked, it will run the shopClick function to begin the purchase
  shopText.addEventListener("click", function () {
    shopClick(myData);
  });
  shopBox.appendChild(shopText);
}

// Using getShop and CreateShop functions to fetch the api, and apply the data. (I'm currently revisiting my code and making notes on my step. Out of everything this confuses me the most. I'm not fully sure if I remember how this all works. How would you describe how this works?)
async function createShopImageAndInfo() {
  const fetchData = await getShop();
  // This is fewtching data for each myData i created in the createShop. As I updated the textContent name, cost, increase, and ID, it updates all of this. (Again, if this section could be re-explained that would help alot)
  fetchData.forEach((myData) => {
    createShop(myData);
  });
}

// Executing the function
createShopImageAndInfo();

// GAME LOGIC=============================================================================

// when the user clicks on the cookie, the cookieCount value goes up by 1
// when the user clicks an upgrade, the cookie count value goes down, and the cps goes up (I think you'd use an if command for this)

// To track how many times an item is purchased, we have a purchase count. This will allow me to create if commands that change the action depending on how many purchases there are.

const purchaseCount = {};
function shopClick(myData) {
  // This wont run if you don't have enough cookies, it wont run.
  if (stats.cookieCount >= myData.cost) {
    // subtracting cost from cookie count
    stats.cookieCount -= myData.cost;
    // increasing shop item's cps to cps count
    stats.cps += myData.increase;
    // creating purchase box element - also giving the element an ID equal to its name for css
    purchaseContainer = document.getElementById("purchase-box");
    // if purchase count is NOT myData.name, continue with this statement. As a purchase has not been made yet. it will run
    if (!purchaseCount[myData.name]) {
      // purchasecount assigned a value of 1
      purchaseCount[myData.name] = 1;
      // Then element is created
      const purchaseBox = document.createElement("p");
      // Adding 1 (the number of purcases) with myData.name (the name of the button clicked)
      purchaseBox.textContent = 1 + " " + myData.name;
      purchaseBox.id = myData.name;
      purchaseContainer.appendChild(purchaseBox);
      // if purchasecount is myData.name it will run the below instead. This will happen if button has been clicked twice
    } else {
      // add ++ to the value
      purchaseCount[myData.name]++;
      // select the myData.name element
      const purchaseBox = document.getElementById(myData.name);
      // change the text content to the current value + myData.name
      purchaseBox.textContent = purchaseCount[myData.name] + " " + myData.name;
    }

    // Updating the counters on the document by changing text content after it passes through the if statements
    cookieNum.textContent = "Cat Counter: " + stats.cookieCount;
    cpsNum.textContent = "CPS: " + stats.cps;

    // I think local storage for CPS will go here, as the CPS goes up every time you purchase, and will need to be saved.
    const stringifiedStats = JSON.stringify(stats.cps);
    localStorage.setItem("CPS", stringifiedStats);
  }
}

// An interval every second to update the cookie counter
setInterval(function () {
  // cookie count = cookie count + cookie stats number per second
  stats.cookieCount += stats.cps;
  cookieNum.textContent = "Cat Counter " + stats.cookieCount;
}, 1000);

// Set interval to save local storage every second - I think this works
setInterval(function () {
  cookieNum.textContent = "Cat Counter: " + stats.cookieCount;
  cpsNum.textContent = "CPS: " + stats.cps;
  //
  const stringifiedStats = JSON.stringify(stats.cookieCount);
  const stringifiedCpsStats = JSON.stringify(stats.cps);
  //
  localStorage.setItem("CookieCount", stringifiedStats);
  // To be safe, also saving the CPS every second in this setInterval (Nevermind, I dont think I need this) (Nevermind, I do for the reset button to work)
  localStorage.setItem("CPS", stringifiedCpsStats);
}, 1000);

// I think now we parse the cps count local data so it appears on the page - This happens when the page is refreshed.
// assigning variables to get the local data from our previous code that set it
const cpsNumber = localStorage.getItem("CPS");
const parsedCpsNumber = JSON.parse(cpsNumber);
console.log(parsedCpsNumber); // This was used for testing
if (parsedCpsNumber !== null) {
  //If the pasedCpsNumber is not null, go forward with this statement. The partsedCpsNumber will only be null if there is not saved data.
  // set the cps stat to be equal to the parsedcpsnumber
  stats.cps = parsedCpsNumber;
  cpsNum.textContent = "CPS: " + stats.cps;
}

// Parsing CookieCount local data - Similar to the previous code with parsing the cps data
// Initially had an issue as my if command was if (localdata = "CookieCount" and another for "CPS", however when you have two ifs for Local Data, they overwrite eachother. the !== is basically saying if the ParsedCounta data isn't null (so any value), update the cookieCount)
const cookieCountData = localStorage.getItem("CookieCount");
const parsedCountData = JSON.parse(cookieCountData);
console.log(parsedCountData);
if (parsedCountData !== null) {
  stats.cookieCount = parsedCountData;
  // I also did not notice that I needed this line of code until I was updating both parsed data - this is the text that updates the counter with the current stats. I didn't need it when I was just tracking the cookieCount as it was being added every second through my set Interval
  cookieNum.textContent = "Cat Counter: " + stats.cookieCount;
}

// I noticed that it was difficult to clear the local storage, as there are so many functions and intervals that save the local data, when you clear it, it will just save again before you have a chance to close the window. I thought you could have the interval set to every 10 seconds, but it would be cool to have a reset button that just puts the cookie count and cps back to 0. And then the set interval will save it.

// finding the button from the html
const resetButton = document.getElementById("reset-button");
// event listener for then button is clicked
resetButton.addEventListener("click", function () {
  // setting the values back to 0
  stats.cookieCount = 0;
  stats.cps = 0;
  stats.appendChild(stats.cookieCount);
  // cookieNum.textContent = "Cat Counter: " + stats.cookieCount;
  // const stringifiedStats = JSON.stringify(stats.cookieCount);
  // localStorage.setItem("CookieCount", stringifiedStats);
});
