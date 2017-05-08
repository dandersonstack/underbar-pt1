const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns true if no callback is passed in', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums)).toBe(true);
  });

  it('returns true if an object has 1 odd number', () => {
    const nums = [2, 4, 5, 6];
    const arrayLikeObj = {
      key1: 'a',
      key2: 3,
      key3: 'c'
    };
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if an object has 1 odd number', () => {
    const nums = [2, 4, 5, 6];
    const arrayLikeObj = {
      key1: 'a',
      key2: 'b',
      key3: 'c'
    };
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

});