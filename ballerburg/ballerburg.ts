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
    angle: number,
    gunpowder: number,
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
let Angle1: number = Number(slider1.value);


slider1.oninput = function() {
  Angle1 = Number(slider1.value);
  console.log(Angle1); 
}

let slider2: HTMLInputElement = <HTMLInputElement>document.getElementById("angle2");
let Angle2: number = Number(slider2.value);


slider2.oninput = function() {
  Angle2 = Number(slider2.value); 
}

let slider3: HTMLInputElement = <HTMLInputElement>document.getElementById("gunpower1");
let Gunpower1: number = Number(slider3.value);


slider3.oninput = function() {
  Gunpower1 = Number(slider3.value);
}

let slider4: HTMLInputElement = <HTMLInputElement>document.getElementById("gunpower2");
let Gunpower2: number = Number(slider4.value);


slider4.oninput = function() {
  Gunpower2 = Number(slider4.value);
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
            angle: 0,
            gunpowder: 0,
            posX: 0,
            posY: 0,

        }
        cannons.push(newCannon);
    }


}

function generateBall(_cannon: Cannon): void {

    const newBall: Ball = {

        player: _cannon.player,
        speed: _cannon.gunpowder,
        posX: _cannon.posX,
        posY: _cannon.posY,
        shoot: false,
    }
    cannonBalls.push(newBall);

}

function drawTerrain(): void {


}

function drawCannons(): void {


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