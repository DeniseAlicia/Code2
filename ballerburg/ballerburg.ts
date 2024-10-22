console.log("Hello There");

const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d");

let cannons: Cannon[] = [];

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
    inAir: boolean,

}

let slider: HTMLInputElement = <HTMLInputElement>document.getElementById("angle1");
let Angle1: number = Number(slider.value);

slider.oninput = function() {
  Angle1 = Number(slider.value);
  console.log(Angle1); 
}

function handleLoad(_event: Event): void {
    generateTerrain();
    generateCannons(2);

}

function generateTerrain(): void {

}

function generateCannons(_amount: number) {

}

function generateBalls(_cannon: Cannon): void {

}

function drawTerrain(): void {

}

function drawCannons(): void {

}

function drawControls(): void {

}


function drawBalls(_cannon: Cannon, _ball: Ball): void {

}

function ballFly(_ball: Ball): void {
    
}

function collsionCheck(_ball: Ball): void {

}

function animationFrame(): void {
    
}