"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("loading asteroids");
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        const asteroid = new Asteroids.Asteroid(1);
        console.log(asteroid);
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=main.js.map