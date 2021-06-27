let prodMins = 3;
let enterMins = 6;
let socialMins = 3;
let shopMins = 2;
let edMins = 4;
let idleMins = 1;

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

window.onload = function(){
    document.getElementById("mostTime").innerHTML = mostTime.toString();
    document.getElementById("mostTimeType").innerHTML = "in " + mostTimeType;
    document.getElementById("leastTime").innerHTML = leastTime.toString();
    document.getElementById("leastTimeType").innerHTML = "in " + leastTimeType;
    document.getElementById("totalTime").innerHTML = total.toString();
};


