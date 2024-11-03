"use strict";
var SolarSystem;
(function (SolarSystem) {
    // global variables
    SolarSystem.planetInfo = "";
    //const child: CelestialBody[] = [];
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
        const sunA = [];
        const mercuryA = [];
        const venusA = [];
        sun = new SolarSystem.CelestialBody(sunA, "sun", SolarSystem.sunInfo, SolarSystem.sunText, "yellow", 50, 120, 0, 650);
        const mercury = new SolarSystem.CelestialBody(mercuryA, "mercury", SolarSystem.mercuryInfo, SolarSystem.mercuryText, "orange", 10, 0, 0.15, 700);
        const venus = new SolarSystem.CelestialBody(venusA, "venus", SolarSystem.venusInfo, SolarSystem.venusText, "blue", 10, 0, 0.15, 800);
        sun.children.push(mercury, venus);
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