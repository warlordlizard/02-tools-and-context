'use strict';

module.exports = exports = {};

exports.map = (callback, arr) => {
  if(!arr) throw new Error('array not provided');
  return Array.prototype.map.call(arr, callback);
};

exports.filter = (callback, arr) => {
  if(!arr) throw new Error('array not provided');
  return Array.prototype.filter.call(arr, callback);
};

exports.reduce = (callback, initialState, arr) => {
  if(!arr) throw new Error('no array provided');
  return Array.prototype.reduce.call(arr, callback , initialState);
};

exports.slice = (begin, end, arr) => {
  if(!arr) throw new Error('array not provided');
  return Array.prototype.slice.call(arr, begin, end);
};

// exports.concat