"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    //global variables
    const silos = [];
    const stable = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        //creating the foods first, because of the references
        const hay = new OldMacDonald.Feed("Hay", 50, 50, 10);
        const meat = new OldMacDonald.Feed("Meat", 20, 20, 9);
        const cheese = new OldMacDonald.Feed("Cheese", 5, 5, 1);
        const seeds = new OldMacDonald.Feed("Seeds", 20, 20, 10);
        silos.push(hay, meat, cheese, seeds);
        //creating the animals
        const cow = new OldMacDonald.Animal("Claire", "cow", hay, 10, "Moo");
        const dog = new OldMacDonald.Animal("Rex", "dog", meat, 5, "Woof");
        const cat = new OldMacDonald.Animal("Mimi", "cat", meat, 4, "Meow");
        const sheep = new OldMacDonald.Animal("Leslie", "sheep", hay, 7, "Baa");
        const chicken = new OldMacDonald.Animal("Ella", "chicken", seeds, 2, "Cluck");
        const duck = new OldMacDonald.Animal("Jasper", "duck", seeds, 2, "Quack");
        const rat = new OldMacDonald.Animal("Oreo", "rat", cheese, 1, "Squeak");
        const turkey = new OldMacDonald.Animal("Otto", "turkey", seeds, 3, "Gobble");
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