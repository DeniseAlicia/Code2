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
        sun = new SolarSystem.CelestialBody("Sun", SolarSystem.sunInfo, SolarSystem.sunText, "yellow", 40, 120, 0, 650);
        const mercury = new SolarSystem.CelestialBody("Mercury", SolarSystem.mercuryInfo, SolarSystem.mercuryText, "orange", 8, 0, 0.015, 70);
        const venus = new SolarSystem.CelestialBody("Venus", SolarSystem.venusInfo, SolarSystem.venusText, "yellow", 10, 0, 0.015, 110);
        const earth = new SolarSystem.CelestialBody("Earth", SolarSystem.earthInfo, SolarSystem.earthText, "blue", 10, 0, 0.015, 160);
        const mars = new SolarSystem.CelestialBody("Mars", SolarSystem.marsInfo, SolarSystem.marsText, "red", 10, 0, 0.015, 210);
        const jupiter = new SolarSystem.CelestialBody("Jupiter", SolarSystem.jupiterInfo, SolarSystem.jupiterText, "orange", 30, 0, 0.015, 300);
        const saturn = new SolarSystem.CelestialBody("Saturn", SolarSystem.saturnInfo, SolarSystem.saturnText, "grey", 20, 0, 0.015, 380);
        const uranus = new SolarSystem.CelestialBody("Uranus", SolarSystem.uranusInfo, SolarSystem.uranusText, "green", 15, 0, 0.015, 420);
        const neptun = new SolarSystem.CelestialBody("Neptun", SolarSystem.neptunInfo, SolarSystem.neptunText, "blue", 15, 0, 0.015, 450);
        const pluto = new SolarSystem.CelestialBody("Pluto", SolarSystem.plutoInfo, SolarSystem.plutoText, "grey", 5, 0, 0.015, 480);
        sun.children.push(mercury, venus, earth, mars, jupiter, saturn, neptun, uranus, pluto);
        const moon = new SolarSystem.CelestialBody();
        const phobos = new SolarSystem.CelestialBody();
        const deimos = new SolarSystem.CelestialBody();
        const io = new SolarSystem.CelestialBody();
        const europa = new SolarSystem.CelestialBody();
        const ganymede = new SolarSystem.CelestialBody();
        const callisto = new SolarSystem.CelestialBody();
        const titan = new SolarSystem.CelestialBody();
        const prometheus = new SolarSystem.CelestialBody();
        const oberon = new SolarSystem.CelestialBody();
        const titania = new SolarSystem.CelestialBody();
        const triton = new SolarSystem.CelestialBody();
        const charon = new SolarSystem.CelestialBody();
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