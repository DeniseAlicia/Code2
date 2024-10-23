console.log("Hello There");

const gravity: number = 5;
const cannons: Cannon[] = [];
const cannonBalls: Ball[] = [];

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;


window.addEventListener("load", handleLoad);
setInterval(animationFrame, 16);


interface Cannon {

    player: number,
    posX: number,
    posY: number,
}

interface Ball {

    player: number,
    speed: number,
    posX: number,
    posY: number,
    shoot: boolean,

}
let slider1: HTMLInputElement = <HTMLInputElement>document.getElementById("angle1");
let angle1: number = Number(slider1.value);


slider1.oninput = function() {
  angle1 = Number(slider1.value);
  console.log(angle1); 
}



function handleLoad(): void {
    generateTerrain();
    generateCannons(2);
    drawTerrain();
    drawCannons();
}

function generateTerrain(): void {


}

function generateCannons(_amount: number): void {

    for (let i: number = 0; i<_amount; i++) {
        const newCannon: Cannon = {

            player: i+1,
            posX: 0,
            posY: 0,

        }
        cannons.push(newCannon);
    }


}

function generateBall(_cannon: Cannon): void {

    const newBall: Ball = {

        player: _cannon.player,
        speed: GUNPOWDERSLIDER,
        posX: _cannon.posX,
        posY: _cannon.posY,
        shoot: false,
    }
    cannonBalls.push(newBall);

}

function drawTerrain(): void {


}

function drawCannons(): void {

    for (let i: number = 0; i<cannons.length; i++) {
        const x: number = cannons[i].posX;
        const y: number = cannons[i].posY;
        const angle: number

    }
}



function drawBalls(): void {


}

function ballFly(_ball: Ball): void {

    _ball.posX += _ball.speed;
    _ball.posY += gravity;

    collisionCheck(_ball);

}

function collisionCheck(_ball: Ball): void {

}

function winner(_player: number): void {


}

function animationFrame(): void {
    drawTerrain();
    drawCannons();
    drawBalls();
    for (let i:number = 0; i<cannonBalls.length; i++) {
        ballFly(cannonBalls[i]);
    }

}