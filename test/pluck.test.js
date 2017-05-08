const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('given an array of objects, can return an array of new objects', () => {
    const people = [
      { obj : { name: 'Harriet', age: 12} },
      { obj : { name: 'Lazarus', age: 999} },
      { obj : { name: 'Bethany', age: 14} }
    ];
    const result = _.pluck(people, 'obj');
    expect(result).toEqual([{ name: 'Harriet', age: 12} , { name: 'Lazarus', age: 999}, { name: 'Bethany', age: 14} ]);
  });

  it('returns an array where any object missing an age will have an undefined marker', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus'},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, undefined, 14]);
  });

});