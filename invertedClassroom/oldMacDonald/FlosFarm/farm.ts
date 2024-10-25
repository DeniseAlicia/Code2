namespace OldMacDonald {

//classes
    class Animal {

        name: string;
        species: string;
        feed: Feed;
        amountfeed: number;
        sound: string;

        constructor(_name: string, _species: string, _feed: Feed, _amountfeed: number, _sound: string) {

            this.name = _name;
            this.species = _species;
            this.feed = _feed;
            this.amountfeed = _amountfeed;
            this.sound = _sound;

        }

        sing(): void {

            console.log(this.sound);
        }

        eat(): void {

            console.log(this.feed)
        }
    }

    class Feed {

        name: string;
        amount: number;
        maxamount: number;
        minamount: number;

        constructor(_name: string, _amount: number, _maxamount: number, _minamount: number) {

            this.name = _name;
            this.amount = _amount;
            this.maxamount = _maxamount;
            this.minamount = _minamount;

        }

        reducefeed(_amount: number, _amountfeed: number): void {

            this.amount = _amount - _amountfeed;
            console.log(this.amount);
        }

        refillSilo(_amount: number, _maxamount: number): void {

            if (_amount >= _maxamount) {
                console.log(this.name + "-silo is full");
            }
            else {
                this.amount += 1;
            }


        }
    }

//global variables
    const silos: Feed[] = [];
    const stable: Animal[] = [];

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        //creating the foods
        const hay: Feed = new Feed("hay", 50, 50, 0);
        const meat: Feed = new Feed("meat", 10, 10, 0);
        const cheese: Feed = new Feed("cheese", 5, 5, 0);
        const seeds: Feed = new Feed("seeds", 20, 20, 0);

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

        window.addEventListener("click", startSimulation);

    }

    function startSimulation(): void {

        for (let i: number = 0; i < stable.length; i++) {

            const animal: Animal = stable[i];
            console.log(animal.name);

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