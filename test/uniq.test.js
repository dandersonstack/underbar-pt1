const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('returns the exact array with no duplicates', () => {
    const nums = [2, 4, 5, 7, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('returns an array with one null value, when recieving an array of nulls', () => {
    const nums = [null, null, null, null, null];
    expect(_.uniq(nums)).toEqual([null]);
  });

});