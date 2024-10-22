console.log("Hello There");

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



function handleLoad(_event: Event): void {
    generateTerrain();
    generateCannons(2);
    for 
    

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