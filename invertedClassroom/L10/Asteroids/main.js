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
        window.setInterval(update, frameTime);
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
        const asteroidHit = getAsteroidHit(hotspot); // 8min 30s
        if (asteroidHit)
            console.log(asteroidHit);
        breakAsteroid(asteroidHit);
    }
    function handleKeypress(_event) {
    }
    function getAsteroidHit(_hotspot) {
        for (const asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position.copy());
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        const index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
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