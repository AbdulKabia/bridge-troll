'use strict';

const SunCalc = require('suncalc');

let isLight = false;
/**
 * Calculate the current time of day and figure out if it's dark or light outside.
 * @param {*} myLat
 * @param {*} myLng
 */
let calculateCurrentTime = (myLat, myLng) => {
  let tempCurrentTime = SunCalc.getTimes(new Date(), myLat, myLng);
  let userDawn = tempCurrentTime.dawn;
  let userDusk = tempCurrentTime.dusk;
  let myDate = new Date();
  if (
    myDate.getTime() <= userDusk.getTime() &&
    myDate.getTime() >= userDawn.getTime()
  ) {
    isLight = true;
  }
};

module.exports.calculateCurrentTime = calculateCurrentTime;
module.exports.isLight = () => isLight;
