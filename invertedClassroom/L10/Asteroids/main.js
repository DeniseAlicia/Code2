"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleLoad);
    // const asteroids: Asteroid[] = [];
    const moveables = [];
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
        canvas.addEventListener("mousedown", shootProjectile);
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
            moveables.push(asteroid);
        }
    }
    function shootProjectile(_event) {
        console.log("Shooting projectile");
        const origin = new Asteroids.Vector(_event.offsetX, _event.offsetY);
        const velocity = new Asteroids.Vector(0, 0);
        velocity.random(100, 100);
        const projectile = new Asteroids.Projectile(origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("shooting laser");
        const hotspot = new Asteroids.Vector(_event.offsetX, _event.offsetY);
        const asteroidHit = getAsteroidHit(hotspot); // 8min 30s
        if (asteroidHit) {
            console.log(asteroidHit);
            breakAsteroid(asteroidHit);
        }
    }
    function handleKeypress(_event) {
    }
    function getAsteroidHit(_hotspot) {
        for (const moveable of moveables) {
            if (moveable instanceof Asteroids.Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position.copy());
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
        }
        const index = moveables.indexOf(_asteroid);
        moveables.splice(index, 1);
    }
    //animation frame
    function update() {
        console.log("updating");
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height); //reset the canvas
        for (const moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=main.js.map