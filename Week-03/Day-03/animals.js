"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(hng, trst) {
        if (hng === void 0) { hng = 50; }
        if (trst === void 0) { trst = 50; }
        this.hunger = hng;
        this.thirst = trst;
    }
    Animal.prototype.eat = function () {
        this.hunger -= 1;
    };
    Animal.prototype.drink = function () {
        this.thirst -= 1;
    };
    Animal.prototype.play = function () {
        this.thirst -= 1;
        this.hunger -= 1;
    };
    return Animal;
}());
exports.Animal = Animal;
var an1 = new Animal();
an1.eat();
an1.drink();
an1.play();
console.log(an1);
