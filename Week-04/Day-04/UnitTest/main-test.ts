'use strict';
import {addNum} from './main';

let test = require('tape');


test('Add two numbers together', t => {
  let actual: number = addNum(5, 4);
  let expected: number = 9;

  t.equal(actual, expected);
  t.notEqual(actual, 50, 'This should not be equal');
  t.end();
});
