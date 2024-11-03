"use strict";
var SolarSystem;
(function (SolarSystem) {
    // global variables
    SolarSystem.planetName = "";
    SolarSystem.planetInfo = "";
    SolarSystem.planetText = "";
    //const child: CelestialBody[] = [];
    let sun;
    //setting up the canvas
    const canvas = document.querySelector("canvas");
    SolarSystem.crc2 = canvas.getContext("2d");
    window.addEventListener("load", handleLoad);
    canvas.addEventListener("click", handleClick);
    function handleLoad() {
        //preparing the simulation
        console.log("loading page");
        createCelestialBodies();
        setInterval(update, 25);
    }
    function createCelestialBodies() {
        //creating all simulated celestial bodies
        console.log("creating bodies");
        const earthSpeed = 0.0015;
        sun = new SolarSystem.CelestialBody("Sun", SolarSystem.sunInfo, SolarSystem.sunText, "yellow", 40, 120, 0, 750);
        const mercury = new SolarSystem.CelestialBody("Mercury", SolarSystem.mercuryInfo, SolarSystem.mercuryText, "orange", 8, 0, earthSpeed * 4.1, 70);
        const venus = new SolarSystem.CelestialBody("Venus", SolarSystem.venusInfo, SolarSystem.venusText, "yellow", 10, 0, earthSpeed * 1.6, 110);
        const earth = new SolarSystem.CelestialBody("Earth", SolarSystem.earthInfo, SolarSystem.earthText, "blue", 10, 0, earthSpeed, 180);
        const mars = new SolarSystem.CelestialBody("Mars", SolarSystem.marsInfo, SolarSystem.marsText, "red", 10, 0, earthSpeed * 0.53, 230);
        const jupiter = new SolarSystem.CelestialBody("Jupiter", SolarSystem.jupiterInfo, SolarSystem.jupiterText, "orange", 30, 0, earthSpeed * 0.08, 300);
        const saturn = new SolarSystem.CelestialBody("Saturn", SolarSystem.saturnInfo, SolarSystem.saturnText, "grey", 20, 0, earthSpeed * 0.03, 380);
        const uranus = new SolarSystem.CelestialBody("Uranus", SolarSystem.uranusInfo, SolarSystem.uranusText, "white", 15, 0, earthSpeed * 0.01, 420);
        const neptun = new SolarSystem.CelestialBody("Neptun", SolarSystem.neptunInfo, SolarSystem.neptunText, "blue", 15, 0, earthSpeed * 0.006, 470);
        const pluto = new SolarSystem.CelestialBody("Pluto", SolarSystem.plutoInfo, SolarSystem.plutoText, "grey", 5, 0, earthSpeed * 0.004, 510);
        sun.children.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptun, pluto);
        const moon = new SolarSystem.CelestialBody("Moon", SolarSystem.moonInfo, SolarSystem.moonText, "white", 5, 0, earthSpeed * 13, 20);
        earth.children.push(moon);
        const phobos = new SolarSystem.CelestialBody("Phobos", SolarSystem.phobosInfo, SolarSystem.phobosText, "grey", 3, 0, earthSpeed * 1216.6, 20);
        const deimos = new SolarSystem.CelestialBody("Deimos", SolarSystem.deimosInfo, SolarSystem.deimosText, "white", 3, 0, earthSpeed * 304.2, 30);
        mars.children.push(phobos, deimos);
        const io = new SolarSystem.CelestialBody("Io", SolarSystem.ioInfo, SolarSystem.ioText, "white", 5, 0, earthSpeed * 202, 40);
        const europa = new SolarSystem.CelestialBody("Europa", SolarSystem.europaInfo, SolarSystem.europaText, "grey", 5, 0, earthSpeed * 104, 53);
        const ganymede = new SolarSystem.CelestialBody("Ganymede", SolarSystem.ganymedeInfo, SolarSystem.ganymedeText, "white", 5, 0, earthSpeed * 51.5, 66);
        const callisto = new SolarSystem.CelestialBody("Callisto", SolarSystem.callistoInfo, SolarSystem.callistoText, "grey", 5, 0, earthSpeed * 21.8, 81);
        jupiter.children.push(io, europa, ganymede, callisto);
        const titan = new SolarSystem.CelestialBody("Titan", SolarSystem.titanInfo, SolarSystem.titanText, "white", 4, 0, earthSpeed * 22.8, 35);
        const prometheus = new SolarSystem.CelestialBody("Prometheus", SolarSystem.prometheusInfo, SolarSystem.prometheusText, "grey", 4, 0, earthSpeed * 598.4, 50);
        saturn.children.push(titan, prometheus);
        const oberon = new SolarSystem.CelestialBody("Oberon", SolarSystem.oberonInfo, SolarSystem.oberonText, "grey", 4, 0, earthSpeed * 27.1, 20);
        const titania = new SolarSystem.CelestialBody("Titania", SolarSystem.titaniaInfo, SolarSystem.titaniaText, "white", 4, 0, earthSpeed * 42, 30);
        uranus.children.push(oberon, titania);
        const triton = new SolarSystem.CelestialBody("Triton", SolarSystem.tritonInfo, SolarSystem.tritonText, "grey", 4, 0, earthSpeed * 63, 25);
        neptun.children.push(triton);
        const charon = new SolarSystem.CelestialBody("Charon", SolarSystem.charonInfo, SolarSystem.charonText, "white", 3, 0, earthSpeed * 57, 15);
        pluto.children.push(charon);
    }
    function handleClick(_event) {
        sun.checkedIfClicked(_event);
        //display planetName, planetInfo and planetText in div element beneath slider
    }
    function update() {
        //updating and redrawing the simulation
        // console.log("updating");
        SolarSystem.crc2.clearRect(0, 0, canvas.width, canvas.height);
        SolarSystem.crc2.fillStyle = "black";
        SolarSystem.crc2.fillRect(0, 0, canvas.width, canvas.height);
        sun.draw();
        sun.orbitStep(1);
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=main.js.map