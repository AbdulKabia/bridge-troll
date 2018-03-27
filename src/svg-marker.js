'use strict';

// Using Material Icons as inline SVG - https://material.io/icons/

const leaflet = require('leaflet');

// Read contents of SVG files from bundle as Data URLs
const locationSvgUrl = require('../icons/material-icons/location.svg');
const lockedSvgUrl = require('../icons/material-icons/locked.svg');
const unlockedSvgUrl = require('../icons/material-icons/unlocked.svg');

const locationSvgWhite = require('../icons/material-icons/location-white.svg');
const lockedSvgWhite = require('../icons/material-icons/locked-white.svg');
const unlockedSvgWhite = require('../icons/material-icons/unlocked-white.svg');

// All icons share the same size, define it once
const iconSize = [25, 25];

// Expose custom Leaflet Icons to be used in our markers
module.exports.location = leaflet.icon({
  iconUrl: locationSvgUrl,
  iconSize
});

// Expose custom Leaflet Icons to be used in our markers
module.exports.locationWhite = leaflet.icon({
  iconUrl: locationSvgWhite,
  iconSize
});

module.exports.locked = leaflet.icon({
  iconUrl: lockedSvgUrl,
  iconSize
});

module.exports.lockedWhite = leaflet.icon({
  iconUrl: lockedSvgWhite,
  iconSize
});

module.exports.unlocked = leaflet.icon({
  iconUrl: unlockedSvgUrl,
  iconSize
});

module.exports.unlockedWhite = leaflet.icon({
  iconUrl: unlockedSvgWhite,
  iconSize
});