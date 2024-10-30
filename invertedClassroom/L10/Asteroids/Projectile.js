"use strict";
var Asteroids;
(function (Asteroids) {
    class Projectile extends Asteroids.Moveable {
        constructor(_position, _velocity) {
            super(_position);
            this.velocity = _velocity.copy();
        }
        draw() {
            // console.log("Projectile draw");
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.position.x, this.position.y);
            Asteroids.crc2.strokeRect(-1, -1, 1, 1);
            Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Asteroids.Projectile = Projectile;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Projectile.js.map