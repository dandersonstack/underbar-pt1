const _ = require('../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      length: 10
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObj = {
      'foo': 'bar'
    };
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
  });

  it('returns false for an arrayLike Object with length < 0', () => {
    const arrayLikeObj = {
      length: -1
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(false);
  });

  it('returns true for an string', () => {
    const str = 'abc'
    expect(_.isArrayLike(str)).toBe(true);
  });
});
