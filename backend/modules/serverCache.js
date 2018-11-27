"use strict";

const cacheObject = {};
module.exports.setData = function (prop, value) {
  if (!prop) {
    return;
  }
  cacheObject[prop] = value;
  setRunnersStats();
};

module.exports.getData = function (prop) {
  if (!prop) {
    return null;
  }
  return cacheObject[prop];
};

function setRunnersStats() {
  const { runners, statistics } = cacheObject;

  if (!runners || !statistics) {
    return;
  }

  const allRunners = [...runners.man, ...runners.woman];
  const places = allRunners.map(({ PLACE_DIFF: diff }) => diff ? diff: 0);
  const max = Math.max.apply(null, places);
  const min = Math.min.apply(null, places);
  const progress = { up: [], down: [], novices: [] };

  allRunners.forEach(item => {
    if (item.PLACE_DIFF === null) {
      progress.novices.push(item);
    } else if (max && item.PLACE_DIFF === max) {
      progress.up.push(item);
    } else if (min && item.PLACE_DIFF === min) {
      progress.down.push(item);
    }
  });

  cacheObject.statistics.progress = progress;
}
