
//global variables
const gravity: number = 5;
const cannons: Cannon[] = [];
const cannonBalls: Ball[] = [];
const posPlayers: number[] = [];

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0]!;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

//Terrain variables
const peakX: number = Math.floor(Math.random()*canvas.width*0.3)+canvas.width*0.3;
const peakY: number = Math.floor(Math.random()*canvas.height*0.5)+canvas.height*0.25;
const platform1: number = Math.floor(Math.random()*canvas.height*0.5)+canvas.height*0.5;
const platform2: number = Math.floor(Math.random()*canvas.height*0.5)+canvas.height*0.5;
const platforms: number[] = [platform1, platform2];

// Slider Variables
const slider1: HTMLInputElement = <HTMLInputElement>document.getElementById("angle1");
//let angle1: number = Number(slider1.value);

const slider2: HTMLInputElement = <HTMLInputElement>document.getElementById("angle2");
// let angle2: number = Number(slider2.value);

const slider3: HTMLInputElement = <HTMLInputElement>document.getElementById("gunpower1");
// let gunpower1: number = Number(slider3.value);

const slider4: HTMLInputElement = <HTMLInputElement>document.getElementById("gunpower2");
// let gunpower2: number = Number(slider4.value);

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
    angle: HTMLInputElement,
    gunpowder: HTMLInputElement,
    ball?: Ball,
    path: Path2D,
    shoot: boolean,
}

interface Ball {

    player: number,
    speed: number,
    angle: number,
    radius: number,
    cannon: Cannon,
    posX: number,
    posY: number,
    shoot: boolean,

}

//value test
function hndSiderInput(_event: Event): void {
    const slider: HTMLInputElement = <HTMLInputElement>_event.target;
    const value: number = Number(slider.value);
    console.log(value);

}


//what happens on load
function handleLoad(): void {
    generateCannons(2);
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
            posX: canvas.width * (i==0 ? 0.15 : 0.85),//posPlayers[i],
            posY: platforms[i],
            angle: slider1,
            gunpowder: slider2,
            path: new Path2D,
            shoot: false
        }
        generateBall(newCannon);
        cannons.push(newCannon);
    }


}
//generates cannonballs
function generateBall(_cannon: Cannon): void {

    const newBall: Ball = {

        player: _cannon.player,
        speed: 0,
        angle: 0,
        radius: 100,
        cannon: _cannon,
        posX: _cannon.posX,
        posY: _cannon.posY,
        shoot:false

    }

    _cannon.ball = newBall;
    cannonBalls.push(newBall);

}

function drawTerrain(): void {

    ctx.beginPath();
    ctx.moveTo(0,platform1);
    ctx.lineTo(canvas.width*0.3,platform1);
    ctx.lineTo(peakX, peakY);
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

   

    for (let i: number = 0; i<cannons.length; i++) {

        const cannon: Cannon = cannons[i];
        const x: number = cannon.posX;
        const y: number = cannon.posY-20;
        //const angle: number = 90;

        const cannonRadius: number = 30;
        let barrelLength: number = 50;
        const barrelWidth: number = 30;

        //checks which direction cannon has to face
        if (cannon.player % 2 == 0) {
            barrelLength = barrelLength*-1;
        }
       

        cannon.path.moveTo(x,y);
        cannon.path.arc(x, y, cannonRadius, 0, 360);

        //ctx.save();

        //ctx.rotate(Number(cannon.angle.value));
        cannon.path.rect(x, y - cannonRadius*0.5, barrelLength, barrelWidth);
        ctx.fillStyle = "black";
        ctx.fill(cannon.path);

        //ctx.restore();

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

    if (_cannon.shoot == false) {

        _cannon.shoot = true;

        _cannon.ball!.speed = Math.cos(Number(_cannon.angle.value));
        _cannon.ball!.angle = Math.sin(Number(_cannon.angle.value));
    }
}

//calculates the balls flight path if ball is in air
function ballFly(_ball: Ball): void {

    if (_ball.shoot == true) {
           
            _ball.posX += _ball.speed;
            _ball.angle += gravity;
            _ball.posY += _ball.angle;

            collisionCheck(_ball);
            }
    
    
    }
    



//checks if the ball hits something
function collisionCheck(_ball: Ball): void {

    winner(_ball.player);
}

//if one player hits the other cannon
function winner(_player: number): void {


}

//happens every frame
function animationFrame(): void {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawTerrain();
    drawCannons();
    drawBalls();
    for (let i:number = 0; i<cannonBalls.length; i++) {
        ballFly(cannonBalls[i]);
    }

}