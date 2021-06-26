function parseJSONData(json) {
    let parsed = JSON.parse(json);
    for (let frame of parsed.frames) {
        frame.timeStart = new Date(frame.timeStart);
        frame.timeEnd = new Date(frame.timeEnd);
    }
    return parsed;
}

timeline = parseJSONData();
console.log(timeline)

let prodMins = 3;
let enterMins = 6;
let socialMins = 3;
let shopMins = 2;
let edMins = 4;
let idleMins = 1;

