"use strict";
var SolarSystem;
(function (SolarSystem) {
    class CelestialBody {
        constructor(_children, _name, _info, _text, _color, _radius, _rotSpeed, _distanceFromCenter) {
            this.children = _children;
            this.name = _name;
            this.info = _info;
            this.text = _text;
            this.color = _color;
            this.radius = _radius;
            this.rotAngle = 0;
            this.rotSpeed = _rotSpeed;
            this.distanceFromCenter = _distanceFromCenter;
            this.path = new Path2D;
        }
        draw() {
            //draw every celestial body in the children array
            console.log("draw celestial bodies");
            SolarSystem.crc2.save();
            SolarSystem.crc2.rotate(this.rotSpeed);
            SolarSystem.crc2.translate(this.distanceFromCenter, 0);
            SolarSystem.crc2.fillStyle = this.color;
            SolarSystem.crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);
            SolarSystem.crc2.fill();
            SolarSystem.crc2.restore();
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i];
                child.draw();
            }
        }
        orbitStep(_speedModifier) {
            console.log("orbit step");
            this.rotAngle += this.rotSpeed * _speedModifier;
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i];
                child.orbitStep(_speedModifier);
            }
        }
        checkedIfClicked(_x, _y) {
            console.log("clicked");
            SolarSystem.crc2.save();
            SolarSystem.crc2.rotate(this.rotSpeed);
            SolarSystem.crc2.translate(this.distanceFromCenter, 0);
            //check if the the planet/its path is clicked -> else: check for the children 
            if (SolarSystem.crc2.isPointInPath(_x, _y)) {
                SolarSystem.planetInfo = this.info;
            }
            else
                for (const child of this.children) {
                    child.checkedIfClicked(_x, _y);
                }
            SolarSystem.crc2.restore();
        }
    }
    SolarSystem.CelestialBody = CelestialBody;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=CelestialBody.js.map