
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
const platforms: number[] = [platform1, platform2];

// Slider Variables
const slider1: HTMLInputElement = <HTMLInputElement>document.getElementById("angle1");
let angle1: number = Number(slider1.value);

const slider2: HTMLInputElement = <HTMLInputElement>document.getElementById("angle2");
let angle2: number = Number(slider2.value);

const slider3: HTMLInputElement = <HTMLInputElement>document.getElementById("gunpower1");
let gunpower1: number = Number(slider3.value);

const slider4: HTMLInputElement = <HTMLInputElement>document.getElementById("gunpower2");
let gunpower2: number = Number(slider4.value);

//EventListeners
window.addEventListener("load", handleLoad);
slider1.addEventListener("input", hndSiderInput);
slider2.addEventListener("input", hndSiderInput);
slider3.addEventListener("input", hndSiderInput);
slider4.addEventListener("input", hndSiderInput);

//fps
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
    shoot: boolean,

}


function hndSiderInput(_event: Event): void {
    const slider: HTMLInputElement = <HTMLInputElement>_event.target;
    console.log(slider.value);
}


//what happens on load
function handleLoad(): void {
    generateCannons(3);
    drawTerrain();
    drawCannons();
}

//generates the specified amount of cannons
function generateCannons(_amount: number): void {

    const pos1: number = canvas.width*0.15;
    const pos2: number = canvas.width*0.85;
     

    posPlayers.push(pos1);
    posPlayers.push(pos2);

    for (let i: number = 0; i<_amount; i++) {
        const newCannon: Cannon = {

            player: i+1,
            posX: posPlayers[i],
            posY: platforms[i],
            path: new Path2D,
            shoot: false
        }
        cannons.push(newCannon);
    }


}
//generates cannonballs
function generateBall(_cannon: Cannon): void {

    const newBall: Ball = {

        player: _cannon.player,
        speed: 0,
        angle: 0,
        radius: 10,
        posX: _cannon.posX,
        posY: _cannon.posY,
        shoot:false

    }
    cannonBalls.push(newBall);

}

function drawTerrain(): void {

    ctx.beginPath();
    ctx.moveTo(0,platform1);
    ctx.lineTo(canvas.width*0.3,platform1);
    ctx.lineTo(Math.floor(Math.random()*canvas.width*0.3)+canvas.width*0.3, peak);
    ctx.lineTo(canvas.width*0.7,platform2);
    ctx.lineTo(canvas.width,platform2);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.lineTo(0, platform1);

    ctx.strokeStyle = "black"
    ctx.stroke();
    ctx.fillStyle = "black";

    ctx.fill();

}

//draws cannons
function drawCannons(): void {

    let n: number = 0;

    for (let i: number = 0; i<cannons.length; i++) {

        const cannon: Cannon = cannons[i];
        const x: number = cannon.posX;
        const y: number = cannon.posY-20;
        const angle: number = 90;
        const cannonRadius: number = 30;
        const barrelLength: number = 200;
        const barrelWidth: number = 30;

        cannon.path.moveTo(x,y);
        cannon.path.arc(x, y, cannonRadius, 0, 360);
        ctx.translate(x, y);
        //ctx.rotate(angle);
        cannon.path.rect(x, y, barrelLength*n, barrelWidth);

        ctx.fillStyle = "black";
        ctx.fill(cannon.path);

        n = n*-1;
    }
}


//draws the cannonballs currently in the air
function drawBalls(): void {

    for (let i:number = 0; i<cannonBalls.length; i++) {
        const ball: Ball = cannonBalls[i];

        if (ball.shoot == true) {

        }
    }

}

//fires the cannon
function fireCannon(_cannon: Cannon): void {

}

//calculates the balls flight path if ball is in air
function ballFly(_ball: Ball): void {

    if (_ball.shoot){


           
            _ball.posX += _ball.speed;
            _ball.posY += gravity;

            collisionCheck(_ball);
            }
    
    
    }
    



//checks if the ball hits something
function collisionCheck(_ball: Ball): void {

}

function winner(_player: number): void {


}

function animationFrame(): void {
    //drawTerrain();
    drawCannons();
    drawBalls();
    for (let i:number = 0; i<cannonBalls.length; i++) {
        ballFly(cannonBalls[i]);
    }

}