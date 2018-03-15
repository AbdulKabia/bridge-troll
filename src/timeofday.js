'use strict';

const SunCalc = require('suncalc');
const geo = require('./geo.js');

geo.getCurrentPosition(pos => {
    let myLat = pos.coord.latitude;
    let myLong = pos.coord.longitude;
})

let currentTime = SunCalc.get;

