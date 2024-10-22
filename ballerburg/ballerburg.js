"use strict";
console.log("Hello There");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let cannons = [];
window.addEventListener("load", handleLoad);
setInterval(animationFrame, 16);
let slider = document.getElementById("angle1");
let Angle1 = Number(slider.value);
slider.oninput = function () {
    Angle1 = Number(slider.value);
    console.log(Angle1);
};
function handleLoad(_event) {
    generateTerrain();
    generateCannons(2);
}
function generateTerrain() {
}
function generateCannons(_amount) {
}
function generateBalls(_cannon) {
}
function drawTerrain() {
}
function drawCannons() {
}
function drawControls() {
}
function drawBalls(_cannon, _ball) {
}
function ballFly(_ball) {
}
function collsionCheck(_ball) {
}
function animationFrame() {
}
