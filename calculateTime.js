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


