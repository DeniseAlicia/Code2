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

        constructor(_name: string, _info: string, _text: string, _color: string, _radius: number, _rotAngle: number, _rotSpeed: number, _distanceFromCenter: number) {
            const children: CelestialBody[] = [];

            this.children = children
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

        draw(): void {
            //draw every celestial body in the children array
            // console.log("draw celestial bodies");

            const path: Path2D = new Path2D;

            crc2.save();
            crc2.rotate(this.rotAngle);
            crc2.translate(this.distanceFromCenter, 0);

            crc2.fillStyle = this.color;
            path.arc(0, 0, this.radius, 0, 2 * Math.PI);
            crc2.fill(path);
            path.closePath();
            this.path = path;

            for (let i: number = 0; i < this.children.length; i++) {
                const child: CelestialBody = this.children[i];
                child.draw();
            }

            crc2.restore();

        }

        orbitStep(_speedModifier: number): void {
            // console.log("orbit step");

            this.rotAngle += this.rotSpeed * _speedModifier;

            for (let i: number = 0; i < this.children.length; i++) {
                const child: CelestialBody = this.children[i];
                child.orbitStep(_speedModifier);
            }
        }

        checkedIfClicked(_event: MouseEvent): void {
            console.log("clicked");

            crc2.save();
            crc2.rotate(this.rotAngle);
            crc2.translate(this.distanceFromCenter, 0);

            const x: number = _event.offsetX //+ Math.cos(this.rotAngle) * this.distanceFromCenter;
            const y: number = _event.offsetY //+ Math.sin(this.rotAngle) * this.distanceFromCenter;

            //check if the the planet = its path is clicked -> else: check for the children 
            if (crc2.isPointInPath(this.path, x, y)) {
                planetName = this.name;
                planetInfo = this.info;
                planetText = this.text;

                console.log(planetName);
                console.log(planetInfo);
                console.log(planetText);
            }

            else
                for (const child of this.children) {
                    child.checkedIfClicked(_event);
                }

            crc2.restore();
        }
    }

}
