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
// Slider Variables
let slider1 = document.getElementById("angle1");
let angle1 = Number(slider1.value);
let slider2 = document.getElementById("angle2");
let angle2 = Number(slider2.value);
let slider3 = document.getElementById("gunpower1");
let gunpower1 = Number(slider3.value);
let slider4 = document.getElementById("gunpower2");
let gunpower2 = Number(slider4.value);
window.addEventListener("load", handleLoad);
setInterval(animationFrame, 16);
// Slider Values on Input
slider1.oninput = function () {
    angle1 = Number(slider1.value);
    console.log(angle1);
};
slider2.oninput = function () {
    angle2 = Number(slider2.value);
};
slider3.oninput = function () {
    gunpower1 = Number(slider3.value);
};
slider4.oninput = function () {
    gunpower2 = Number(slider4.value);
};
function handleLoad() {
    generateCannons(2);
    drawTerrain();
    drawCannons();
}
function generateCannons(_amount) {
    const pos1 = canvas.width * 0.15;
    const pos2 = canvas.width * 0.85;
    posPlayers.push(pos1);
    posPlayers.push(pos2);
    for (let i = 0; i < _amount; i++) {
        const newCannon = {
            player: i + 1,
            posX: posPlayers[i],
            posY: 0,
            path: new Path2D,
        };
        cannons.push(newCannon);
    }
}
function generateBall(_cannon) {
    const newBall = {
        player: _cannon.player,
        speed: 0,
        angle: 0,
        radius: 5,
        posX: _cannon.posX,
        posY: _cannon.posY,
        shoot: false,
    };
    cannonBalls.push(newBall);
}
function drawTerrain() {
}
function drawCannons() {
    for (let i = 0; i < cannons.length; i++) {
        const x = cannons[i].posX;
        const y = cannons[i].posY;
        const angle = 0;
    }
}
function drawBalls() {
}
function ballFly(_ball) {
    _ball.posX += _ball.speed;
    _ball.posY += gravity;
    collisionCheck(_ball);
}
function collisionCheck(_ball) {
}
function winner(_player) {
}
function animationFrame() {
    drawTerrain();
    drawCannons();
    drawBalls();
    for (let i = 0; i < cannonBalls.length; i++) {
        ballFly(cannonBalls[i]);
    }
}
//# sourceMappingURL=ballerburg.js.map