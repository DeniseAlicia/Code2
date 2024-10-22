"use strict";
console.log("Hello There");
let cannons = [];
let cannonBalls = [];
window.addEventListener("load", handleLoad);
setInterval(animationFrame, 16);
function handleLoad() {
    generateTerrain();
    generateCannons(2);
    for (let i = 0; i < cannons.length; i++) {
        generateBalls(cannons[i]);
    }
    drawTerrain();
    drawCannons();
}
function generateTerrain() {
}
function generateCannons(_amount) {
    for (let i = 0; i < _amount; i++) {
        let newCannon = {
            player: i + 1,
            angle: 0,
            gunpowder: 0,
            posX: 0,
            posY: 0,
        };
        cannons.push(newCannon);
    }
}
function generateBalls(_cannon) {
    for (let i = 0; i < cannons.length; i++) {
    }
}
function drawTerrain() {
}
function drawCannons() {
}
function drawBalls(_cannon, _ball) {
}
function ballFly(_ball) {
    collisionCheck(_ball);
}
function collisionCheck(_ball) {
}
function animationFrame() {
}
