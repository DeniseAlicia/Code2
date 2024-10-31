namespace OldMacDonald {

    export class Animal {

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

            //construct and logs the verses seperately for better structure
            const sound: string = this.sound;

            const v1: string = "Old MacDonald had a farm, ee-a-ee-a-oh!";
            const v2: string = "And on his farm he had a " + this.species + ", ee-a-ee-a-oh!";
            const v3: string = "With a " + sound + " " + sound + " here and a " + sound + " " + sound + " there"
            const v4: string = "Here a " + sound + ", " + "there a " + sound + ", everywhere just " + sound + " " + sound + "!"

            console.group(this.name + " the " + this.species + ":");
            console.log(v1);
            console.log(v2);
            console.log(v3);
            console.log(v4);
        }

        eat(): void {

            console.log(this.name + " is eating " + this.feed.name)
        }
    }


}