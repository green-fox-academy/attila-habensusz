'use strict';

import {anagram} from './anagramm';

let test = require('tape');


test('Make strings anagram', t => {
  let actual = anagram("spar", "raps")
  let expected = true;

  t.equal(actual, expected);
  t.end();
});