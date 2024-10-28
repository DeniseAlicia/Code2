"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleLoad);
    const asteroids = [];
    const frameRate = 20;
    const frameTime = 1 / frameRate; //time per frame
    function handleLoad(_event) {
        console.log("loading asteroids");
        const canvas = document.querySelector("canvas");
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "green";
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        // const asteroid: Asteroid = new Asteroid(1);
        // console.log(asteroid);
        Asteroids.createPaths(); //function in "Paths.ts"
        createAsteroids(5);
        // createShip();
        // canvas.addEventListener("mousdown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    //creates given number of asteroids in array
    function createAsteroids(_nAsteroids) {
        console.log("creating asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new Asteroids.Asteroid(1);
            asteroids.push(asteroid);
        }
    }
    function loadLaser(_event) {
    }
    function shootLaser(_event) {
        console.log("shooting laser");
        const hotspot = new Asteroids.Vector(_event.offsetX, _event.offsetY);
        let asteroidHit = getAsteroidHit(hotspot); // 8min 30s
    }
    function handleKeypress(_event) {
    }
    function getAsteroidHit(_hotspot) {
    }
    function breakAsteroid(_asteroid) {
    }
    //animation frame
    function update() {
        console.log("updating");
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height); //reset the canvas
        for (const asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=main.js.map