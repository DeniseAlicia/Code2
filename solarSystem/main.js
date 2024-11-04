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
    //Slider for the SpeedModifier
    const speedSlider = document.getElementById("SpeedModifier");
    window.addEventListener("load", handleLoad);
    // speedSlider.addEventListener("input", handleSliderInput);
    function handleLoad() {
        //preparing the simulation
        console.log("loading page");
        sun = createCelestialBodies(SolarSystem.data);
        canvas.addEventListener("click", handleClick);
        setInterval(update, 25);
    }
    function createCelestialBodies(_data) {
        //creating all simulated celestial bodies
        console.log("creating bodies");
        const body = new SolarSystem.CelestialBody(_data);
        for (const child of SolarSystem.data.children) {
            body.addChild(createCelestialBodies(child));
        }
        return body;
    }
    function handleClick(_event) {
        sun.checkedIfClicked(_event);
        //display planetName, planetInfo and planetText in div element beneath slider
        const nameBox = document.querySelector(".infoBlock .nameBox");
        const infoBox = document.querySelector(".infoBlock .infoBox");
        const textBox = document.querySelector(".infoBlock .textBox");
        nameBox.textContent = SolarSystem.planetName;
        infoBox.textContent = SolarSystem.planetInfo;
        textBox.textContent = SolarSystem.planetText;
    }
    function update() {
        //updating and redrawing the simulation
        // console.log("updating");
        SolarSystem.crc2.clearRect(0, 0, canvas.width, canvas.height);
        SolarSystem.crc2.fillStyle = "black";
        SolarSystem.crc2.fillRect(0, 0, canvas.width, canvas.height);
        sun.draw();
        sun.orbitStep(Number(speedSlider.value));
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=main.js.map