console.log("Hello There");

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

}

function generateTerrain(): void {

}

function generateCannons(): void {

}

function generateBalls(_cannon: Cannon): void {

}

function drawTerrain(): void {

}

function drawCannons(): void {

}

function drawControls(): void {

}

function drawPlayerWindow(_window: PlayerWindow, _cannon: Cannon): void {

}

function drawBalls(_cannon: Cannon, _ball: Ball): void {

}

function ballFly(_ball: Ball): void {
    
}

function collsionCheck(_ball: Ball): void {

}

function animationFrame(): void {
    
}