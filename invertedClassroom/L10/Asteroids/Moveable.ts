namespace Asteroids {

    export class Moveable {

        position: Vector;
        velocity: Vector;


        constructor(_position?: Vector) {
            //console.log("Moveable constructor");
            if (_position) {
                this.position = _position.copy();
            }
            else {
                this.position = new Vector(0, 0);
            }

            this.velocity = new Vector(0, 0);


        }

        move(_timeslice: number): void {
            // console.log("Moveable move");

            const offset: Vector = this.velocity.copy();
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
            // console.log("Moveable draw");

        }


    }


}
