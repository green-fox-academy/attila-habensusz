'use strict';

import {countLetters} from './count-letters';

let test = require('tape');

test('Make small apple string an object', t => {
  let actual = countLetters("apple");
  let expected = { a: 1, p: 4, l: 1, e: 1 };

  t.equal(actual, expected);
  t.end();
});

test('Make apple with many p an object', t => {
    let actual = countLetters("apppple");
    let expected = { a: 1, p: 4, l: 1, e: 1, };
  
    t.deepEqual(actual, expected);
    t.end();
  });