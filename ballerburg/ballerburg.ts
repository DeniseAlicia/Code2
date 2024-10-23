
//global variables
const gravity: number = 5;
const cannons: Cannon[] = [];
const cannonBalls: Ball[] = [];
const posPlayers: number[] = [];

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0]!;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

const peak: number = Math.floor(Math.random()*canvas.height*0.5)+canvas.height*0.25;
const platform1: number = Math.floor(Math.random()*canvas.height*0.5)+canvas.height*0.5;
const platform2: number = Math.floor(Math.random()*canvas.height*0.5)+canvas.height*0.5;

// Slider Variables
let slider1: HTMLInputElement = <HTMLInputElement>document.getElementById("angle1");
let angle1: number = Number(slider1.value);

let slider2: HTMLInputElement = <HTMLInputElement>document.getElementById("angle2");
let angle2: number = Number(slider2.value);

let slider3: HTMLInputElement = <HTMLInputElement>document.getElementById("gunpower1");
let gunpower1: number = Number(slider3.value);

let slider4: HTMLInputElement = <HTMLInputElement>document.getElementById("gunpower2");
let gunpower2: number = Number(slider4.value);

window.addEventListener("load", handleLoad);
setInterval(animationFrame, 16);

//interfaces
interface Cannon {

    player: number,
    posX: number,
    posY: number,
    path: Path2D,
    shoot: boolean,
}

interface Ball {

    player: number,
    speed: number,
    angle: number,
    radius: number,
    posX: number,
    posY: number,

}

// Slider Values on Input
slider1.oninput = function(): void {
  angle1 = Number(slider1.value);
  console.log(angle1); 
}

slider2.oninput = function(): void {
    angle2 = Number(slider2.value);
}

slider3.oninput = function(): void {
    gunpower1 = Number(slider3.value);
}

slider4.oninput = function(): void {
    gunpower2 = Number(slider4.value);
}


function handleLoad(): void {
    generateCannons(2);
    drawTerrain();
    drawCannons();
}

function generateCannons(_amount: number): void {

    const pos1: number = canvas.width*0.15;
    const pos2: number = canvas.width*0.85;

    posPlayers.push(pos1);
    posPlayers.push(pos2);

    for (let i: number = 0; i<_amount; i++) {
        const newCannon: Cannon = {

            player: i+1,
            posX: posPlayers[i],
            posY: 0,
            path: new Path2D,
            shoot: false
        }
        cannons.push(newCannon);
    }


}

function generateBall(_cannon: Cannon): void {

    const newBall: Ball = {

        player: _cannon.player,
        speed: 0,
        angle: 0,
        radius: 5,
        posX: _cannon.posX,
        posY: _cannon.posY,

    }
    cannonBalls.push(newBall);

}

function drawTerrain(): void {


}

function drawCannons(): void {

    for (let i: number = 0; i<cannons.length; i++) {
        const x: number = cannons[i].posX;
        const y: number = cannons[i].posY;
        const angle: number = 0;

        
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