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
            console.log("Asteroid draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50); //position is set to asteroid center
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();

        }

        // isHit(_hotspot: Vector): boolean 



    }


}
