console.log("Hello There");

let cannons: Cannon[] = [];
let cannonBalls: Ball[] = [];

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



function handleLoad(): void {

    generateTerrain();
    generateCannons(2);
    for (let i: number = 0; i < cannons.length; i++) {
        generateBalls(cannons[i]);
    }
    drawTerrain();
    drawCannons();

    

}

function generateTerrain(): void {

}

function generateCannons(_amount: number): void {

    for (let i: number = 0; i<_amount; i++) {
        let newCannon: Cannon = {

            player: i+1,
            angle: 0,
            gunpowder: 0,
            posX: 0,
            posY: 0,


        }
        cannons.push(newCannon);
    }


}

function generateBalls(_cannon: Cannon): void {

    

}

function drawTerrain(): void {

}

function drawCannons(): void {

}



function drawBalls(): void {


}

function ballFly(_ball: Ball): void {


    collisionCheck(_ball);
}

function collisionCheck(_ball: Ball): void {

}

function animationFrame(): void {
    drawTerrain();
    drawCannons();
    drawBalls();
    for (let i:number = 0; i<cannonBalls.length; i++) {
        ballFly(cannonBalls[i]);
    }

}