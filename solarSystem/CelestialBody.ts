namespace SolarSystem {

    export class CelestialBody {

        children: CelestialBody[];
        name: string;
        info: string;
        text: string;
        color: string;
        radius: number;
        rotAngle: number;
        rotSpeed: number;
        distanceFromCenter: number;
        path: Path2D;

        constructor(_children: CelestialBody[], _name: string, _info: string, _text: string, _color: string, _radius: number, _rotAngle: number, _rotSpeed: number, _distanceFromCenter: number, _path: Path2D) {
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

        draw(): void {
            //draw every celestial body in the children array
            console.log("draw celestial bodies");

            for (let i: number = 0; i < this.children.length; i++) {
                crc2.save();
                crc2.rotate(this.rotSpeed);
                crc2.translate(this.distanceFromCenter, 0);
                crc2.fillStyle = this.color;
                crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);
                crc2.restore();
            }

        }

        orbitStep(_speedModifier: number): void {
            console.log("orbit step");

            this.rotAngle += this.rotSpeed * _speedModifier;

            for (let i: number = 0; i < this.children.length; i++) {
                const child: CelestialBody = this.children[i];
                child.orbitStep;
            }
        }

        checkedIfClicked(_x: number, _y: number): void {
            console.log("clicked");

            crc2.save();
            crc2.rotate(this.rotSpeed);
            crc2.translate(this.distanceFromCenter, 0);

            //check if the the planet/its path is clicked -> else: check for the children 
            if (crc2.isPointInPath(_x, _y)) {
                const planetInfo = this.info;
            }

            else
                for (const child of this.children) {
                    child.checkedIfClicked(_x, _y);
                }

            crc2.restore();
        }
    }
}