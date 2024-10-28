"use strict";
var Asteroids;
(function (Asteroids) {
    class Asteroid {
        constructor(_size) {
            console.log("Asteroid constructor");
            this.position = new Asteroids.Vector(0, 0);
            this.velocity = new Asteroids.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_timeslice) {
            console.log("Asteroid move");
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.position.x, this.position.y);
            Asteroids.crc2.scale(this.size, this.size);
            Asteroids.crc2.stroke(Asteroids.asteroidPaths[this.type]);
            Asteroids.crc2.restore();
        }
        draw() {
            console.log("Asteroid draw");
        }
    }
    Asteroids.Asteroid = Asteroid;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map