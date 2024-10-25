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
        sing() {
            //construct and logs the verses seperately for better structure
            const sound = this.sound;
            const v1 = "Old MacDonald had a farm, ee-a-ee-a-oh!";
            const v2 = "And on this farm he had a " + this.species + ", ee-a-ee-a-oh!";
            const v3 = "With a " + sound + " " + sound + " here and a " + sound + " " + sound + " there";
            const v4 = "Here a " + sound + ", " + "there a " + sound + ", everywhere just " + sound + " " + sound + "!";
            console.group(this.name + " the " + this.species + ":");
            console.log(v1);
            console.log(v2);
            console.log(v3);
            console.log(v4);
        }
        eat() {
            console.log(this.name + " is eating " + this.feed.name);
        }
    }
    OldMacDonald.Animal = Animal;
})(OldMacDonald || (OldMacDonald = {}));
//# sourceMappingURL=Animal.js.map