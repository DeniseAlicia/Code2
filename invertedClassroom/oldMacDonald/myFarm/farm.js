"use strict";
var MyFarm;
(function (MyFarm) {
    class Animal {
        constructor(_species, _name, _noise, _food, _stomach) {
            this.species = _species;
            this.name = _name;
            this.noise = _noise;
            this.food = _food;
            this.stomach = _stomach;
        }
        eat() {
            this.food.stock -= this.stomach;
            this.food.report();
        }
        sing() {
            console.log(this.name);
            console.log(this.noise + " " + this.name + "!");
        }
    }
    class FoodSupply {
        constructor(_type, _stock) {
            this.type = _type;
            this.stock = _stock;
        }
        report() {
            console.log("There are " + String(this.stock) + "units of " + this.type + " left");
        }
        restock() {
            if (this.stock < 11) {
                this.stock = 100;
                console.log(this.type + " has been restocked");
            }
        }
    }
    class Farm {
        constructor(_stable, _pantry) {
            this.stable = _stable;
            this.pantry = _pantry;
        }
        simulateDay() {
        }
    }
})(MyFarm || (MyFarm = {}));
//# sourceMappingURL=farm.js.map