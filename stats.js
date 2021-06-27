let timeline;

function setTimeline(tl) {
    timeline = tl;
}
let prodSecs = 0;
let enterSecs = 0;
let socialSecs = 0;
let shopSecs = 0;
let edSecs = 0;
let idleSecs = 0;

let prodMins;
let enterMins;
let socialMins;
let shopMins;
let edMins;
let idleMins;

const RACE_CONDITION_GAMING = 750;

setTimeout(() => {
    for (let frame of timeline.frames) {
        let elapsedSec = Math.floor((frame.timeEnd - frame.timeStart) / 1000);
        switch (frame.category) {
            case "productivity":
                prodSecs += elapsedSec;
                break;
            case "entertainment":
                enterSecs += elapsedSec;
                break;
            case "social":
                socialSecs += elapsedSec;
                break;
            case "shopping":
                shopSecs += elapsedSec;
                break;
            case "education":
                edSecs += elapsedSec;
                break;
            case "idle":
                idleSecs += elapsedSec;
                break;
        }
    }

    prodMins = prodSecs / 60;
    enterMins = enterSecs / 60;
    socialMins = socialSecs / 60;
    shopMins = shopSecs / 60;
    edMins = edSecs / 60;
    idleMins = idleSecs / 60;
    // prodMins = 3;
    // enterMins = 6;
    // socialMins = 3;
    // shopMins = 2;
    // edMins = 4;
    // idleMins = 1;

    let total = prodMins + enterMins + idleMins + edMins + shopMins + socialMins;

    let mostTime = Math.max(prodMins, enterMins, socialMins, shopMins, edMins, idleMins);
    let mostTimeType = '';

    let leastTime = Math.min(prodMins, enterMins, socialMins, shopMins, edMins, idleMins);
    let leastTimeType = '';

    switch (mostTime) {
        case prodMins:
            mostTimeType = 'Productivity';
            break;
        case enterMins:
            mostTimeType = 'Entertainment';
            break;
        case socialMins:
            mostTimeType = 'Social';
            break;
        case shopMins:
            mostTimeType = 'Shopping';
            break;
        case edMins:
            mostTimeType = 'Education';
            break;
        case idleMins:
            mostTimeType = 'Idle';
    }

    switch (leastTime) {
        case prodMins:
            leastTimeType = 'Productivity';
            break;
        case enterMins:
            leastTimeType = 'Entertainment';
            break;
        case socialMins:
            leastTimeType = 'Social';
            break;
        case shopMins:
            leastTimeType = 'Shopping';
            break;
        case edMins:
            leastTimeType = 'Education';
            break;
        case idleMins:
            leastTimeType = 'Idle';
    }

    window.onload = function () {
        document.getElementById("mostTime").innerHTML = mostTime.toString();
        document.getElementById("mostTimeType").innerHTML = "in " + mostTimeType;
        document.getElementById("leastTime").innerHTML = leastTime.toString();
        document.getElementById("leastTimeType").innerHTML = "in " + leastTimeType;
        document.getElementById("totalTime").innerHTML = total.toString();
    };
}, RACE_CONDITION_GAMING) // race condition gaming
