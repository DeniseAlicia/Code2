"use strict";
var Asteroids;
(function (Asteroids) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            const length = _minLength + Math.random() * (_maxLength - _minLength);
            const direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            const vectorCopy = new Vector(this.x, this.y);
            return vectorCopy;
        }
    }
    Asteroids.Vector = Vector;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Vector.js.map