"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    class Animal {
        constructor(_name, _species, _feed, _amountfeed, _sound) {
            this.name = _name;
            this.species = _species;
            this.feed = _feed;
            this.amountfeed = _amountfeed;
            this.sound = _sound;
        }
        sing(_sound) {
            console.log(this.sound);
        }
        eat(_amount, _amountfeed) {
            console.log();
        }
    }
    class Feed {
        constructor(_name, _amount) {
            this.name = _name;
            this.amount = _amount;
            this.maxamount = 100;
            this.minamount = 0;
        }
        reducefeed(_amount, _amountfeed) {
        }
        refill(_amount, _minamount) {
        }
    }
    window.addEventListener("load", handleLoad);
    const silos = [];
    const stable = [];
    function handleLoad() {
        //creating the foods
        const hay = new Feed("hay", 100);
        const meat = new Feed("meat", 100);
        const cheese = new Feed("cheese", 100);
        const seeds = new Feed("seeds", 100);
        silos.push(hay, meat, cheese, seeds);
        //creating the animals
        const cow = new Animal("Claire", "cow", "hay", 10, "Moo");
        const dog = new Animal("Rex", "dog", "meat", 5, "Woof");
        const cat = new Animal("Mimi", "cat", "meat", 4, "Meow");
        const sheep = new Animal("Leslie", "sheep", "hay", 7, "Baa");
        const chicken = new Animal("Ella", "chicken", "seeds", 2, "Cluck");
        const duck = new Animal("Jasper", "duck", "seeds", 2, "Quack");
        const rat = new Animal("Oreo", "rat", "cheese", 1, "Squeak");
        const turkey = new Animal("Otto", "turkey", "seeds", 3, "Gobble");
        stable.push(cow, dog, cat, sheep, chicken, duck, rat, turkey);
        window.addEventListener("click", startSimulation);
    }
    function startSimulation() {
        for (let i = 0; i < stable.length; i++) {
            const animal = stable[i];
            console.log(animal.name);
            animal.sing(animal.sound);
            animal.eat();
        }
    }
})(OldMacDonald || (OldMacDonald = {}));
//# sourceMappingURL=farm.js.map