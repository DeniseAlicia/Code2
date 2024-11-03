"use strict";
var SolarSystem;
(function (SolarSystem) {
    // global variables
    SolarSystem.planetInfo = "";
    const child = [];
    let sun;
    //setting up the canvas
    const canvas = document.querySelector("canvas");
    SolarSystem.crc2 = canvas.getContext("2d");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        //preparing the simulation
        console.log("loading page");
        createCelestialBodies();
        setInterval(update, 25);
    }
    function createCelestialBodies() {
        //creating all simulated celestial bodies
        console.log("creating bodies");
        sun = new SolarSystem.CelestialBody(child, "sun", SolarSystem.sunInfo, SolarSystem.sunText, "yellow", 50, 120, 0, 650);
    }
    function update() {
        //updating and redrawing the simulation
        console.log("updating");
        SolarSystem.crc2.clearRect(0, 0, canvas.width, canvas.height);
        SolarSystem.crc2.fillStyle = "black";
        SolarSystem.crc2.fillRect(0, 0, canvas.width, canvas.height);
        sun.draw();
        sun.orbitStep(1);
        //sun.checkedIfClicked();
        console.log(sun.rotAngle);
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=main.js.map