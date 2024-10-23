"use strict";
//global variables
const gravity = 5;
const cannons = [];
const cannonBalls = [];
const posPlayers = [];
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
const peak = Math.floor(Math.random() * canvas.height * 0.5) + canvas.height * 0.25;
const platform1 = Math.floor(Math.random() * canvas.height * 0.5) + canvas.height * 0.5;
const platform2 = Math.floor(Math.random() * canvas.height * 0.5) + canvas.height * 0.5;
const platforms = [platform1, platform2];
// Slider Variables
const slider1 = document.getElementById("angle1");
let angle1 = Number(slider1.value);
const slider2 = document.getElementById("angle2");
let angle2 = Number(slider2.value);
const slider3 = document.getElementById("gunpower1");
let gunpower1 = Number(slider3.value);
const slider4 = document.getElementById("gunpower2");
let gunpower2 = Number(slider4.value);
//EventListeners
window.addEventListener("load", handleLoad);
slider1.addEventListener("input", hndSiderInput);
slider2.addEventListener("input", hndSiderInput);
slider3.addEventListener("input", hndSiderInput);
slider4.addEventListener("input", hndSiderInput);
//fps
setInterval(animationFrame, 16);
function hndSiderInput(_event) {
    const slider = _event.target;
    console.log(slider.value);
}
//what happens on load
function handleLoad() {
    generateCannons(3);
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
            posX: posPlayers[i],
            posY: platforms[i],
            path: new Path2D,
            shoot: false
        };
        cannons.push(newCannon);
    }
}
//generates cannonballs
function generateBall(_cannon) {
    const newBall = {
        player: _cannon.player,
        speed: 0,
        angle: 0,
        radius: 10,
        posX: _cannon.posX,
        posY: _cannon.posY,
        shoot: false
    };
    cannonBalls.push(newBall);
}
function drawTerrain() {
    ctx.beginPath();
    ctx.moveTo(0, platform1);
    ctx.lineTo(canvas.width * 0.3, platform1);
    ctx.lineTo(Math.floor(Math.random() * canvas.width * 0.3) + canvas.width * 0.3, peak);
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
    let n = 0;
    for (let i = 0; i < cannons.length; i++) {
        const cannon = cannons[i];
        const x = cannon.posX;
        const y = cannon.posY - 20;
        const angle = 90;
        const cannonRadius = 30;
        const barrelLength = 200;
        const barrelWidth = 30;
        cannon.path.moveTo(x, y);
        cannon.path.arc(x, y, cannonRadius, 0, 360);
        ctx.translate(x, y);
        //ctx.rotate(angle);
        cannon.path.rect(x, y, barrelLength * n, barrelWidth);
        ctx.fillStyle = "black";
        ctx.fill(cannon.path);
        n = n * -1;
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
}
//calculates the balls flight path if ball is in air
function ballFly(_ball) {
    if (_ball.shoot) {
        _ball.posX += _ball.speed;
        _ball.posY += gravity;
        collisionCheck(_ball);
    }
}
//checks if the ball hits something
function collisionCheck(_ball) {
}
function winner(_player) {
}
function animationFrame() {
    //drawTerrain();
    drawCannons();
    drawBalls();
    for (let i = 0; i < cannonBalls.length; i++) {
        ballFly(cannonBalls[i]);
    }
}
//# sourceMappingURL=ballerburg.js.map