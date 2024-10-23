
//global variables
const gravity: number = 5;
const cannons: Cannon[] = [];
const cannonBalls: Ball[] = [];
const posPlayers: number[] = [];

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0]!;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;



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


let slider1: HTMLInputElement = <HTMLInputElement>document.getElementById("angle1");
let angle1: number = Number(slider1.value);


slider1.oninput = function(): void {
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