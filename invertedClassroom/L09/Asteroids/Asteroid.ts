namespace Asteroids {

    export class Asteroid {

        position: Vector;
        velocity: Vector;
        type: number;
        size: number; //0.25, 0.5, 1.0 as sizes

        constructor(_size: number, _position?: Vector) {
            console.log("Asteroid constructor");

            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Vector(0, 0);
            }

            this.velocity = new Vector(0, 0);
            this.velocity.random(10, 100);

            this.type = Math.floor(Math.random() * 4);

            this.size = _size;

        }

        move(_timeslice: number): void {
            // console.log("Asteroid move");

            const offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            //check if Asteroid leaves canvas
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;

            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }

        draw(): void {
            // console.log("Asteroid draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.lineWidth = crc2.lineWidth / this.size;
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
