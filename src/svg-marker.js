'use strict';

// Using Material Icons as inline SVG - https://material.io/icons/

const leaflet = require('leaflet');
const fs = require('fs');
const timeofday = require('./timeofday.js');

/**
 * Given SVG content generate a data URL. If you're not familiar with
 * Data URLs, see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
 */
const generateSvgUrl = svg => {
  let base64 = btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
};

// Read contents of SVG files from bundle
const locationSvg = fs.readFileSync(
  __dirname + `/../icons/material-icons/location.svg`
);
const lockedSvg = fs.readFileSync(
  __dirname + `/../icons/material-icons/locked.svg`
);
const unlockedSvg = fs.readFileSync(
  __dirname + `/../icons/material-icons/unlocked.svg`
);

// White themed icons
const locationSvgWhite = fs.readFileSync(
  __dirname + '/../icons/material-icons/location-white.svg'
);
const lockedSvgWhite = fs.readFileSync(
  __dirname + '/../icons/material-icons/locked-white.svg'
);
const unlockedSvgWhite = fs.readFileSync(
  __dirname + '/../icons/material-icons/unlocked-white.svg'
);

// Generate Data URLs for each, so we can pass them to Leaflet below
const locationUrl = generateSvgUrl(locationSvg);
const lockedUrl = generateSvgUrl(lockedSvg);
const unlockedUrl = generateSvgUrl(unlockedSvg);
const locationUrlWhite = generateSvgUrl(locationSvgWhite);
const lockedUrlWhite = generateSvgUrl(lockedSvgWhite);
const unlockedUrlWhite = generateSvgUrl(unlockedSvgWhite);

// All icons share the same size, define it once
const iconSize = [25, 25];
timeofday.calculateCurrentTime(39.913818, 116.363625);
let thereIsLight = timeofday.isLight();
// console.log(`There is light?: ${thereIsLight}`);

// Expose custom Leaflet Icons to be used in our markers
module.exports.location = leaflet.icon({
  iconUrl: thereIsLight ? locationUrl : locationUrlWhite,
  iconSize
});

module.exports.locked = leaflet.icon({
  iconUrl: thereIsLight ? lockedUrl : lockedUrlWhite,
  iconSize
});

module.exports.unlocked = leaflet.icon({
  iconUrl: thereIsLight ? unlockedUrl : unlockedUrlWhite,
  iconSize
});
