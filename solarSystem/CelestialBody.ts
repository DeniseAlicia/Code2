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
            this.rotAngle = 0;
            this.rotSpeed = _rotSpeed;
            this.distanceFromCenter = _distanceFromCenter;
            this.path = new Path2D;
        }

        draw() {
            console.log("draw celestial bodies");

           // for (let i: number = 0; 1 < celestials.length; i++) {
           //     const element = array[index];
                
            }
           // crc2.save();
            //crc2.rotate(this.rotSpeed);
            //crc2.translate(this.distanceFromCenter);
            //crc2.fillStyle(this.color);
            //crc2.arc(0,0,this.radius);

        }

        orbitStep(_speedModifier: number) {
            console.log("orbit step");
        }

    }
