"use strict";
var SolarSystem;
(function (SolarSystem) {
    class CelestialBody {
        constructor(_child, _name, _info, _radius, _rotAngle, _color, _distanceFromParent) {
            this.child = _child;
            this.name = _name;
            this.info = _info;
            this.radius = _radius;
            this.rotAngle = _rotAngle;
            this.color = _color;
            this.distanceFromParent = _distanceFromParent;
        }
        draw() {
            console.log("draw celestial bodies");
        }
        orbitStep() {
            console.log("orbit step");
        }
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=solarSystem.js.map