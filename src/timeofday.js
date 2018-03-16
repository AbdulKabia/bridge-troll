'use strict';

const SunCalc = require('suncalc');

let isLight = false;
let calculateCurrentTime = (myLat, myLng) => {
    let tempCurrentTime = SunCalc.getTimes(new Date(), 39.913818, 116.363625);
    // TODO make this function do the if checks
    // make func that tells if is light or dark, returns true or false
    let myDate = new Date();
    if (myDate.getTime() > tempCurrentTime.dawn.getTime()) {
        isLight = true;
    }
}


module.exports.calculateCurrentTime = calculateCurrentTime;
module.exports.isLight = () => isLight;
