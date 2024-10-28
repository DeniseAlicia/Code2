namespace Asteroids {

    export class Asteroid {

        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("Asteroid constructor");

            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.type = Math.floor(Math.random() * 4);

            this.size = _size;

        }

        move(_timeslice: number): void {
            console.log("Asteroid move");

        }

        draw(): void {
            console.log("Asteroid draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();

        }

        // isHit(_hotspot: Vector): boolean 



    }


}
