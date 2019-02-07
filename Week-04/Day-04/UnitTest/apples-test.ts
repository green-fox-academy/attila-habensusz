'use strict';
import {Apple} from './Apples';


let test = require('tape');


test('Instantiate an object', t => {
  let golden = new Apple('zöldalma');
  t.equal(golden.getApples(), 'zöldalma');
  t.end();
});

test('Sum with the method', t => {
    let num = new Apple('zöldalma');
    t.equal(num.sum(5, 5), 10);
    t.end();
});

test('Sum with string list', t => {
    let num = new Apple('zöldalma');
    t.equal(num.sum('5' ,'5'), 10);
    t.end();
});
