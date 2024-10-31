"use strict";
var SolarSystem;
(function (SolarSystem) {
    class CelestialBody {
        constructor(_children, _name, _info, _color, _radius, _rotAngle, _rotSpeed, _distanceFromCenter, _path) {
            this.children = _children;
            this.name = _name;
            this.info = _info;
            this.color = _color;
            this.radius = _radius;
            this.rotAngle = 0;
            this.rotSpeed = _rotSpeed;
            this.distanceFromCenter = _distanceFromCenter;
            this.path = new Path2D;
        }
        draw() {
            console.log("draw celestial bodies");
        }
        orbitStep(_speedModifier) {
            console.log("orbit step");
        }
    }
    SolarSystem.CelestialBody = CelestialBody;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=solarSystem.js.map