"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    //classes
    class Animal {
        constructor(_name, _species, _feed, _amountfeed, _sound) {
            this.name = _name;
            this.species = _species;
            this.feed = _feed;
            this.amountfeed = _amountfeed;
            this.sound = _sound;
        }
        sing() {
            //construct and logs the verses seperately for better structure
            const sound = this.sound;
            const v1 = "Old MacDonald had a farm, ee-a-ee-a-oh!";
            const v2 = "And on this farm he had a " + this.species + ", ee-a-ee-a-oh!";
            const v3 = "With a " + sound + " " + sound + " here and a " + sound + " " + sound + " there";
            const v4 = "Here a " + sound + ", " + "there a " + sound + ", everywhere just " + sound + " " + sound + "!";
            console.log(this.name + " the " + this.species + ":");
            console.log(v1);
            console.log(v2);
            console.log(v3);
            console.log(v4);
        }
        eat() {
            console.log(this.name + " is eating " + this.feed.name);
        }
    }
    class Feed {
        constructor(_name, _amount, _maxamount, _minamount) {
            this.name = _name;
            this.amount = _amount;
            this.maxamount = _maxamount;
            this.minamount = _minamount;
        }
        //reduces the amount of food in silo
        reducefeed(_amount, _amountfeed) {
            this.amount = _amount - _amountfeed;
            console.log(this.name + " left: " + String(this.amount));
            console.log(" "); //creates a paragraph in the console (nicer to look at)
        }
        refillSilo(_amount, _maxamount) {
            if (_amount >= _maxamount) {
                console.log(this.name + "-silo is full"); //the way this code currently works, this message will never appear
            }
            else if (_amount <= this.minamount) {
                _amount = _maxamount;
            }
            else {
                this.amount += 1;
            }
        }
    }
    //global variables
    const silos = [];
    const stable = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        //creating the foods first, because of the references
        const hay = new Feed("Hay", 50, 50, 0);
        const meat = new Feed("Meat", 10, 10, 0);
        const cheese = new Feed("Cheese", 5, 5, 0);
        const seeds = new Feed("Seeds", 20, 20, 0);
        silos.push(hay, meat, cheese, seeds);
        //creating the animals
        const cow = new Animal("Claire", "cow", hay, 10, "Moo");
        const dog = new Animal("Rex", "dog", meat, 5, "Woof");
        const cat = new Animal("Mimi", "cat", meat, 4, "Meow");
        const sheep = new Animal("Leslie", "sheep", hay, 7, "Baa");
        const chicken = new Animal("Ella", "chicken", seeds, 2, "Cluck");
        const duck = new Animal("Jasper", "duck", seeds, 2, "Quack");
        const rat = new Animal("Oreo", "rat", cheese, 1, "Squeak");
        const turkey = new Animal("Otto", "turkey", seeds, 3, "Gobble");
        stable.push(cow, dog, cat, sheep, chicken, duck, rat, turkey);
        window.addEventListener("click", startSimulation); //allows multiple days to be simulated
    }
    function startSimulation() {
        for (let i = 0; i < stable.length; i++) {
            const animal = stable[i];
            animal.sing();
            animal.eat();
            animal.feed.reducefeed(animal.feed.amount, animal.amountfeed);
        }
        for (let i = 0; i < silos.length; i++) {
            const silo = silos[i];
            silo.refillSilo(silo.amount, silo.maxamount);
        }
    }
})(OldMacDonald || (OldMacDonald = {}));
//# sourceMappingURL=farm.js.map