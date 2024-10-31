namespace Asteroids {

    export class Asteroid extends Moveable {

        position: Vector;
        velocity: Vector;
        type: number;
        size: number; //0.25, 0.5, 1.0 as sizes

        constructor(_size: number, _position?: Vector) {

            super(_position);

            console.log("Asteroid constructor");
            
            if (_position) {
                this.position = _position.copy();
            }
            else {
                this.position = new Vector(0, 0);
            }

            this.velocity = new Vector(0, 0);
            this.velocity.random(10, 100);

            this.type = Math.floor(Math.random() * 4);

            this.size = _size;

        }

        
        draw(): void {
            // console.log("Asteroid draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.lineWidth = 1 / this.size;
            crc2.translate(-50, -50); //position is set to asteroid center
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();

        }

        //check if laser hits asteroid
        isHit(_hotspot: Vector): boolean {

            const hitsize: number = 50 * this.size;
            const difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);

            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }




    }


}
