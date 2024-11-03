"use strict";
var SolarSystem;
(function (SolarSystem) {
    class CelestialBody {
        constructor(_name, _info, _text, _color, _radius, _rotAngle, _rotSpeed, _distanceFromCenter) {
            const children = [];
            this.children = children;
            this.name = _name;
            this.info = _info;
            this.text = _text;
            this.color = _color;
            this.radius = _radius;
            this.rotAngle = _rotAngle;
            this.rotSpeed = _rotSpeed;
            this.distanceFromCenter = _distanceFromCenter;
            this.path = new Path2D;
        }
        draw() {
            //draw every celestial body in the children array
            // console.log("draw celestial bodies");
            const path = new Path2D;
            SolarSystem.crc2.save();
            SolarSystem.crc2.rotate(this.rotAngle);
            SolarSystem.crc2.translate(this.distanceFromCenter, 0);
            SolarSystem.crc2.fillStyle = this.color;
            path.arc(0, 0, this.radius, 0, 2 * Math.PI);
            SolarSystem.crc2.fill(path);
            path.closePath();
            this.path = path;
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i];
                child.draw();
            }
            SolarSystem.crc2.restore();
        }
        orbitStep(_speedModifier) {
            // console.log("orbit step");
            this.rotAngle += this.rotSpeed * _speedModifier;
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i];
                child.orbitStep(_speedModifier);
            }
        }
        checkedIfClicked(_event) {
            console.log("clicked");
            SolarSystem.crc2.save();
            SolarSystem.crc2.rotate(this.rotAngle);
            SolarSystem.crc2.translate(this.distanceFromCenter, 0);
            const x = _event.offsetX; //+ Math.cos(this.rotAngle) * this.distanceFromCenter;
            const y = _event.offsetY; //+ Math.sin(this.rotAngle) * this.distanceFromCenter;
            //check if the the planet = its path is clicked -> else: check for the children 
            if (SolarSystem.crc2.isPointInPath(this.path, x, y)) {
                SolarSystem.planetName = this.name;
                SolarSystem.planetInfo = this.info;
                SolarSystem.planetText = this.text;
                console.log(SolarSystem.planetName);
                console.log(SolarSystem.planetInfo);
                console.log(SolarSystem.planetText);
            }
            else
                for (const child of this.children) {
                    child.checkedIfClicked(_event);
                }
            SolarSystem.crc2.restore();
        }
    }
    SolarSystem.CelestialBody = CelestialBody;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=CelestialBody.js.map