namespace Asteroids {

    export class Asteroid {

        position: Vector;
        velocity: Vector;
        type: Vector;
        size: number;

        constructor(_size: number) {
            console.log("Asteroid constructor");
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

        }

        move(_timeslice: number): void {
            console.log("Asteroid move");
        }

        draw(): void {
            console.log("Asteroid draw");
        }

        // isHit(_hotspot: Vector): boolean 



    }


}
