'use strict';

const fp = require('./lib/fp.js');

var arr = [5, 10, 12, 15, 17, 55, 74, 99];

console.log('map: ', fp.map(n => n/5, arr));
console.log('filter: ', fp.filter(n => n%2 === 0, arr));
console.log('slice: ', fp.slice(1, 6, arr));
console.log('reduce: ', fp.reduce((acc, cum) => acc + cum, 0, arr));
