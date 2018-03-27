'use strict';

const SunCalc = require('suncalc');

let isLight = false;
let calculateCurrentTime = (myLat, myLng) => {
    let tempCurrentTime = SunCalc.getTimes(new Date(), myLat, myLng);
    // TODO make this function do the if checks
    // make func that tells if is light or dark, returns true or false
    let userDawn = tempCurrentTime.dawn;
    let userDusk = tempCurrentTime.dusk;
    let myDate = new Date();
    if (myDate.getTime() >= userDusk.getTime() && myDate.getTime() >= userDawn.getTime()) {
        isLight = true;
    }
}


module.exports.calculateCurrentTime = calculateCurrentTime;
module.exports.isLight = () => isLight;