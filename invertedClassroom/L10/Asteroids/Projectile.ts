namespace Asteroids {

    export class Projectile extends Moveable {

        lifetime: number;

        constructor(_position: Vector, _velocity: Vector) {

            super(_position);

            this.velocity = _velocity.copy();
        }

        draw(): void {
            // console.log("Projectile draw");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeRect(-1, -1, 1, 1);
            crc2.restore();

        }

        move(_timeslice: number): void {

            super.move(_timeslice);
        }
    }
}