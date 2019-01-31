"use strict";
exports.__esModule = true;
var animals_1 = require("../Day-03/animals");
var Farm = /** @class */ (function () {
    function Farm() {
        this.size = 5;
        this.animals = [];
    }
    Farm.prototype.add = function (newAnimal) {
        this.animals.push(newAnimal);
    };
    Farm.prototype.breed = function () {
        console.log(this.size);
        console.log(this.animals.length);
        if (this.size > this.animals.length) {
            var newAnimal = new animals_1.Animal;
            this.animals.push(newAnimal);
        }
    };
    Farm.prototype.slaughter = function () {
        var slaughterIndex = 0;
        for (var index = 1; index < this.animals.length; index++) {
            if (this.animals[slaughterIndex].hunger > this.animals[index].hunger) {
                slaughterIndex = index;
            }
        }
        this.animals.splice(slaughterIndex, 1);
    };
    return Farm;
}());
var farm1 = new Farm;
var cat1 = new animals_1.Animal;
var cat2 = new animals_1.Animal;
var cat3 = new animals_1.Animal;
var cat4 = new animals_1.Animal;
farm1.add(cat1);
farm1.add(cat2);
farm1.add(cat3);
farm1.add(cat4);
farm1.breed();
farm1.breed();
cat1.eat();
farm1.slaughter();
console.log(farm1);
