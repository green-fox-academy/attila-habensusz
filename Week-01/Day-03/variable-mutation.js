'use strict';
exports.__esModule = true;
var a = 3;
// make it bigger by 10
a = a + 10;
console.log(a);
var b = 100;
// make it smaller by 7
b = b - 7;
console.log(b);
var c = 44;
// double c's value
c = c * 2;
console.log(c);
var d = 125;
// divide d's value by 5
d /= 25;
console.log(d);
var e = 8;
// what's the cube of e's value?
e = e * e;
console.log(e);
var f1 = 123;
var f2 = 345;
// tell if f1 is bigger than f2 (as a boolean)
if (f1 > f2) {
    console.log("f1 is bigger than f2");
}
else {
    console.log("f1 is not bigger than f2");
}
var g1 = 350;
var g2 = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
if (g2 * g2 > g1) {
    console.log("The double of g2 is bigger than g1");
}
else {
    console.log("The double of g2 is not bigger than g1");
}
var h = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
if (h % 11) {
    true;
}
else {
    false;
}
var i1 = 10;
var i2 = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
if (i1 > (Math.sqrt(i2))) {
    true;
}
else {
    false;
}
var j = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
if (j % 2 || j % 5) {
    true;
}
else {
    false;
}
var k = 'Apple';
// fill the k variable with its content 4 times
k = "Apple, Apple, Apple, Apple";
console.log(k);
