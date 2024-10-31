namespace SolarSystem {

    export class CelestialBody {

        children: CelestialBody[];
        name: string;
        info: string;
        color: string;
        radius: number;
        rotAngle: number;
        rotSpeed: number;
        distanceFromCenter: number;
        path: Path2D;

        constructor(_children: CelestialBody[], _name: string, _info: string, _color: string, _radius: number, _rotAngle: number, _rotSpeed: number, _distanceFromCenter: number, _path: Path2D) {
            this.children = _children;
            this.name = _name;
            this.info = _info;
            this.color = _color;
            this.radius = _radius;
            this.rotAngle = _rotAngle;
            this.rotSpeed = _rotSpeed;
            this.distanceFromCenter = _distanceFromCenter;
            this.path = _path;
        }

        draw() {
            console.log("draw celestial bodies");
        }

        orbitStep(_speedModifier: number) {
            console.log("orbit step");
        }

    }

}