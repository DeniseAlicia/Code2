"use strict";
var Asteroids;
(function (Asteroids) {
    class Asteroid {
        constructor(_size) {
            console.log("Asteroid constructor");
            this.position = new Asteroids.Vector(0, 0);
        }
        move(_timeslice) {
            console.log("Asteroid move");
        }
        draw() {
            console.log("Asteroid draw");
        }
    }
    Asteroids.Asteroid = Asteroid;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map