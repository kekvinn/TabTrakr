/* Variables of value that I need to get
1 - A dictionary with the keys being a tab and the value being the time they were used for.
 */

data = {
  frames: [{
    timeStart: "2021-06-27T04:48:50.588Z",
    category: "productivity",
    tabs: [{
      url: "chrome://extensions/",
      title: "Extensions",
      active: true
    }, {
      url: "https://github.com/LunarCoffee",
      title: "LunarCoffee (Fred) · GitHub",
      active: false
    }, {
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
      title: "Promise - JavaScript | MDN",
      active: false
    }, {
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/closed",
      title: "Window.closed - Web APIs | MDN",
      active: false
    }],
    activeTab: {url: "chrome://extensions/", title: "Extensions", active: true},
    timeEnd: "2021-06-27T04:48:57.034Z"
  }, {
    timeStart: "2021-06-27T04:48:57.034Z",
    category: "education",
    tabs: [{
      url: "chrome://extensions/",
      title: "Extensions",
      active: false
    }, {
      url: "https://github.com/LunarCoffee",
      title: "LunarCoffee (Fred) · GitHub",
      active: false
    }, {
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
      title: "Promise - JavaScript | MDN",
      active: true
    }, {
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/closed",
      title: "Window.closed - Web APIs | MDN",
      active: false
    }],
    activeTab: {
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
      title: "Promise - JavaScript | MDN",
      active: true
    },
    timeEnd: "2021-06-27T04:48:59.706Z"
  }, {
    timeStart: "2021-06-27T04:48:59.706Z",
    category: "entertainment",
    tabs: [{
      url: "chrome://extensions/",
      title: "Extensions",
      active: false
    }, {
      url: "https://github.com/LunarCoffee",
      title: "LunarCoffee (Fred) · GitHub",
      active: true
    }, {
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
      title: "Promise - JavaScript | MDN",
      active: false
    }, {
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/closed",
      title: "Window.closed - Web APIs | MDN",
      active: false
    }],
    activeTab: {url: "https://github.com/LunarCoffee", title: "LunarCoffee (Fred) · GitHub", active: true},
    timeEnd: "2021-06-27T04:49:06.567Z"
  }]
}

let tabTimeDict = {}

data.frames.forEach((item, index, array) => {
  let dateStart = new Date(item.timeStart)
  let timeStarted = dateStart.getTime()
  let dateEnd = new Date(item.timeEnd)
  let timeEnded = dateEnd.getTime()

  tabTimeDict[item.activeTab.url] = {
    "timeStarted": timeStarted,
    "timeEnded": timeEnded
  }
})

let timeSpent = {}

Object.keys(tabTimeDict).forEach((item, index, array) => {
  let timeStarted = tabTimeDict[item]["timeStarted"]
  let timeEnded = tabTimeDict[item]["timeEnded"]

  timeSpent[item] = timeEnded - timeStarted
})

// console.log(tabTimeDict)
console.log(timeSpent)

let maxActivityTime = 0
let maxActivityTimeType = "";

let minActivityTime = 10000000000000;
let minActivityTimeType = "";

let totalTime = 0

Object.keys(timeSpent).forEach((item) => {
  if (timeSpent[item] > maxActivityTime) {
    maxActivityTime = timeSpent[item];
    maxActivityTimeType = item;
  }

  if (timeSpent[item] < minActivityTime) {
    minActivityTime = timeSpent[item];
    minActivityTimeType = item;
  }

  totalTime += timeSpent[item];
})

let startTime = data.frames[0].timeStart
let endTime = data.frames[data.frames.length - 1].timeStart

console.log("Maximum Activity Time: " + maxActivityTime + " Maximum Activity Time Type: " + maxActivityTimeType)
console.log("Minimum Activity Time: " + minActivityTime + " Minimum Activity Time Type: " + minActivityTimeType)
console.log("Session Start Time: " + startTime)
console.log("Session End Time" + endTime)
console.log("Total Time" + totalTime)

let startTimeDate = new Date(startTime)

let endTimeDate = new Date(endTime)

if (maxActivityTime <= 60000) {
  window.onload = function () {
    //most time
    document.getElementById("mostTime").innerHTML = (maxActivityTime / 1000).toString();
    document.getElementById("mostTimeUnit").innerHTML = "sec";
    document.getElementById("mostTimeType").innerHTML = "in " + maxActivityTimeType;

    //least time
    document.getElementById("leastTime").innerHTML = (minActivityTime / 1000).toString();
    document.getElementById("leastTimeUnit").innerHTML = "sec";
    document.getElementById("leastTimeType").innerHTML = "in " + minActivityTimeType;

    //most productive
    document.getElementById("mostProductive").innerHTML = (mostProductive / 1000).toString();
    document.getElementById("mostProductiveUnit").innerHTML = "sec";
    document.getElementById("mostProductiveSite").innerHTML = "in " + mostProductiveSite;

    //least productive
    document.getElementById("mostDistracting").innerHTML = (mostDistracting / 1000).toString();
    document.getElementById("mostDistractingUnit").innerHTML = "sec";
    document.getElementById("mostDistractingSite").innerHTML = "in " + mostDistractingSite;

    //Session Start
    document.getElementById("timeStart").innerHTML = (startTime / 1000).toString();
    document.getElementById("timeStartUnit").innerHTML = "sec";




    document.getElementById("totalTime").innerHTML = (totalTime / 1000).toString();
    document.getElementById("totalTimeUnit").innerHTML = "sec";

  };
}

