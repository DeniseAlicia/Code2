namespace SolarSystem {

    class CelestialBody {

        child: CelestialBody[];
        name: string;
        info: string;
        radius: number;
        rotAngle: number;
        color: string;
        distanceFromParent: number;

        constructor(_child: CelestialBody[], _name: string, _info: string, _radius: number, _rotAngle: number, _color: string, _distanceFromParent: number) {
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

}