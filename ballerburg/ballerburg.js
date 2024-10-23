"use strict";
const gravity = 5;
const cannons = [];
const cannonBalls = [];
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
window.addEventListener("load", handleLoad);
setInterval(animationFrame, 16);
let slider1 = document.getElementById("angle1");
let angle1 = Number(slider1.value);
slider1.oninput = function () {
    angle1 = Number(slider1.value);
    console.log(angle1);
};
function handleLoad() {
    generateTerrain();
    generateCannons(2);
    drawTerrain();
    drawCannons();
}
function generateTerrain() {
}
function generateCannons(_amount) {
    for (let i = 0; i < _amount; i++) {
        const newCannon = {
            player: i + 1,
            posX: 0,
            posY: 0,
        };
        cannons.push(newCannon);
    }
}
function generateBall(_cannon) {
    const newBall = {
        player: _cannon.player,
        speed: 0,
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
