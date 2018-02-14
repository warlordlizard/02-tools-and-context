'use strict';

const fp = require('../lib/fp.js');
require('jest');

describe('fp check', function() {
  describe('#map', function() {
    it('should create a new array with results after running function on array', function() {
      var result = fp.map(n => n * 2,[1,3,5,7,9]);
      expect(result).toEqual([2,6,10,14,18]);
    });
    it('should throw an error if an array is not entered', function() {
      expect(fp.map).toThrow();
    });
  });
  describe('#filter', function() {
    it('should return a new array that only contains the result of the callback function', function() {
      var result = fp.filter(n => n%2 === 0 , [2, 6, 7, 8, 13]);
      expect(result).toEqual([2, 6, 8]);
    });
    it('should throw an error if an array is not entered', function() {
      expect(fp.filter).toThrow();
    });
  });
  describe('#slice', function() {
    it('should return a new array that contains numbers at indexes between begin and end arguments', function(){
      var result = fp.slice(1, 4, [1, 2, 3, 4, 5, 6]);
      expect(result).toEqual([2, 3, 4]);
    });
    it('should throw an error if an array is not entered', function() {
      expect(fp.slice).toThrow();
    });
  });
  describe('#reduce', function() {
    it('should return data from accumulator when passed an array', function() {
      var result = fp.reduce((acc, cum) => acc + cum, 0, [1, 2, 3, 4, 5]);
      expect(result).toEqual(15);
    });
    it('should throw an error if an array is not entered', function() {
      expect(fp.reduce).toThrow();
    });
  });
});