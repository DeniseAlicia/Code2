namespace MyFarm {

class Animal {

    species: string;
    name: string;
    noise: string;
    food: FoodSupply;
    stomach: number;

    constructor(_species: string, _name: string, _noise: string, _food: FoodSupply, _stomach: number) {

        this.species = _species;
        this.name = _name;
        this.noise = _noise;
        this.food = _food;
        this.stomach = _stomach;
    }

    eat(): void {

        this.food.stock -= this.stomach;
        this.food.report();
    }

    sing(): void {

        console.log(this.name);
        console.log(this.noise + " " + this.name + "!");

    }

}

class FoodSupply {

    type: string;
    stock: number;

    constructor(_type: string, _stock: number) {

        this.type = _type;
        this.stock = _stock;

    }
    
    report(): void {

        console.log("There are " + String(this.stock) + "units of " + this.type + " left");
    }

    restock(): void {

        if(this.stock < 11) {
            this.stock = 100;
            console.log(this.type + " has been restocked");
        }
    }
}

class Farm {

    stable: Animal[];
    pantry: FoodSupply[];

    constructor(_stable: Animal[], _pantry: FoodSupply[]) {

        this.stable = _stable;
        this.pantry = _pantry;
    }

    simulateDay(): void {

    }
}


}