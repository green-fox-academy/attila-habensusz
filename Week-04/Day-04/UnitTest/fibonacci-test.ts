'use strict';
import {fibonacci} from './fibonacci';

let test = require('tape');


test('Get a fibonacci stuff', t => {
  let actual: number = fibonacci(5);
  let expected: number = 8;

  t.equal(actual, expected);
  t.notEqual(actual, "", "Don't use string")
  t.end();
});
