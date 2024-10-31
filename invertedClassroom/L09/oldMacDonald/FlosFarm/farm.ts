namespace OldMacDonald {

    //global variables
    const silos: Feed[] = [];
    const stable: Animal[] = [];

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        //creating the foods first, because of the references
        const hay: Feed = new Feed("Hay", 50, 50, 10);
        const meat: Feed = new Feed("Meat", 20, 20, 9);
        const cheese: Feed = new Feed("Cheese", 5, 5, 1);
        const seeds: Feed = new Feed("Seeds", 20, 20, 10);

        silos.push(hay, meat, cheese, seeds);

        //creating the animals
        const cow: Animal = new Animal("Claire", "cow", hay, 10, "Moo");
        const dog: Animal = new Animal("Rex", "dog", meat, 5, "Woof");
        const cat: Animal = new Animal("Mimi", "cat", meat, 4, "Meow");
        const sheep: Animal = new Animal("Leslie", "sheep", hay, 7, "Baa");
        const chicken: Animal = new Animal("Ella", "chicken", seeds, 2, "Cluck");
        const duck: Animal = new Animal("Jasper", "duck", seeds, 2, "Quack");
        const rat: Animal = new Animal("Oreo", "rat", cheese, 1, "Squeak");
        const turkey: Animal = new Animal("Otto", "turkey", seeds, 3, "Gobble");

        stable.push(cow, dog, cat, sheep, chicken, duck, rat, turkey);

        window.addEventListener("click", startSimulation); //allows multiple days to be simulated

    }

    function startSimulation(): void {

        for (let i: number = 0; i < stable.length; i++) {

            const animal: Animal = stable[i];

            animal.sing();
            animal.eat();
            animal.feed.reducefeed(animal.feed.amount, animal.amountfeed);

        }

        for (let i: number = 0; i < silos.length; i++) {

            const silo: Feed = silos[i];
            silo.refillSilo(silo.amount, silo.maxamount);
        }
    }


}