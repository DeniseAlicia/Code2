"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("loading asteroids");
        const canvas = document.querySelector("canvas");
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        const asteroid = new Asteroids.Asteroid(1);
        console.log(asteroid);
        asteroid.draw();
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=main.js.map