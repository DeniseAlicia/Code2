"use strict";
//global variables
const gravity = 5;
const cannons = [];
const cannonBalls = [];
const posPlayers = [];
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
//Terrain variables
const peakX = Math.floor(Math.random() * canvas.width * 0.3) + canvas.width * 0.3;
const peakY = Math.floor(Math.random() * canvas.height * 0.5) + canvas.height * 0.25;
const platform1 = Math.floor(Math.random() * canvas.height * 0.5) + canvas.height * 0.5;
const platform2 = Math.floor(Math.random() * canvas.height * 0.5) + canvas.height * 0.5;
const platforms = [platform1, platform2];
// Slider Variables
const slider1 = document.getElementById("angle1");
//let angle1: number = Number(slider1.value);
const slider2 = document.getElementById("angle2");
// let angle2: number = Number(slider2.value);
const slider3 = document.getElementById("gunpower1");
// let gunpower1: number = Number(slider3.value);
const slider4 = document.getElementById("gunpower2");
// let gunpower2: number = Number(slider4.value);
//EventListeners
window.addEventListener("load", handleLoad);
slider1.addEventListener("input", hndSiderInput);
slider2.addEventListener("input", hndSiderInput);
slider3.addEventListener("input", hndSiderInput);
slider4.addEventListener("input", hndSiderInput);
//fps
setInterval(animationFrame, 16);
//value test
function hndSiderInput(_event) {
    const slider = _event.target;
    const value = Number(slider.value);
    console.log(value);
}
//what happens on load
function handleLoad() {
    generateCannons(2);
    drawTerrain();
    drawCannons();
}
//generates the specified amount of cannons
function generateCannons(_amount) {
    const pos1 = canvas.width * 0.15;
    const pos2 = canvas.width * 0.85;
    posPlayers.push(pos1);
    posPlayers.push(pos2);
    for (let i = 0; i < _amount; i++) {
        const newCannon = {
            player: i + 1,
            posX: canvas.width * (i == 0 ? 0.15 : 0.85), //posPlayers[i],
            posY: platforms[i],
            angle: slider1,
            gunpowder: slider2,
            path: new Path2D,
            shoot: false
        };
        generateBall(newCannon);
        cannons.push(newCannon);
    }
}
//generates cannonballs
function generateBall(_cannon) {
    const newBall = {
        player: _cannon.player,
        speed: 0,
        angle: 0,
        radius: 100,
        cannon: _cannon,
        posX: _cannon.posX,
        posY: _cannon.posY,
        shoot: false
    };
    _cannon.ball = newBall;
    cannonBalls.push(newBall);
}
function drawTerrain() {
    ctx.beginPath();
    ctx.moveTo(0, platform1);
    ctx.lineTo(canvas.width * 0.3, platform1);
    ctx.lineTo(peakX, peakY);
    ctx.lineTo(canvas.width * 0.7, platform2);
    ctx.lineTo(canvas.width, platform2);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.lineTo(0, platform1);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
}
//draws cannons
function drawCannons() {
    for (let i = 0; i < cannons.length; i++) {
        const cannon = cannons[i];
        const x = cannon.posX;
        const y = cannon.posY - 20;
        //const angle: number = 90;
        const cannonRadius = 30;
        let barrelLength = 50;
        const barrelWidth = 30;
        //checks which direction cannon has to face
        if (cannon.player % 2 == 0) {
            barrelLength = barrelLength * -1;
        }
        cannon.path.moveTo(x, y);
        cannon.path.arc(x, y, cannonRadius, 0, 360);
        ctx.save();
        //ctx.rotate(Number(cannon.angle.value));
        cannon.path.rect(x, y, barrelLength, barrelWidth);
        ctx.fillStyle = "black";
        ctx.fill(cannon.path);
        ctx.restore();
    }
}
//draws the cannonballs currently in the air
function drawBalls() {
    for (let i = 0; i < cannonBalls.length; i++) {
        const ball = cannonBalls[i];
        if (ball.shoot == true) {
        }
    }
}
//fires the cannon
function fireCannon(_cannon) {
    if (_cannon.shoot == false) {
        _cannon.shoot = true;
        _cannon.ball.speed = Math.cos(Number(_cannon.angle.value));
        _cannon.ball.angle = Math.sin(Number(_cannon.angle.value));
    }
}
//calculates the balls flight path if ball is in air
function ballFly(_ball) {
    if (_ball.shoot == true) {
        _ball.posX += _ball.speed;
        _ball.angle += gravity;
        _ball.posY += _ball.angle;
        collisionCheck(_ball);
    }
}
//checks if the ball hits something
function collisionCheck(_ball) {
    winner(_ball.player);
}
//if one player hits the other cannon
function winner(_player) {
}
//happens every frame
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTerrain();
    drawCannons();
    drawBalls();
    for (let i = 0; i < cannonBalls.length; i++) {
        ballFly(cannonBalls[i]);
    }
}
//# sourceMappingURL=ballerburg.js.map