"use strict";
var FudgeSolarSystem;
(function (FudgeSolarSystem) {
    console.log("script loaded");
    let sun;
    let viewport;
    window.addEventListener("load", start);
    function start() {
        const canvas = document.querySelector("canvas");
        const camera = new FudgeSolarSystem.f.ComponentCamera();
        sun = new FudgeSolarSystem.Body("Sun", 1, "yellow", 0, 0);
        const earth = new FudgeSolarSystem.Body("Earth", 0.5, "blue", 2, 5);
        const moon = new FudgeSolarSystem.Body("Moon", 0.5, "grey", 1, 1);
        sun.addChild(earth.rotationNode);
        earth.addChild(moon.rotationNode);
        viewport = new FudgeSolarSystem.f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);
        console.log(sun);
        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.rotateY(180);
        FudgeSolarSystem.f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        FudgeSolarSystem.f.Loop.start();
    }
    function update() {
        sun.step();
        viewport.draw();
    }
})(FudgeSolarSystem || (FudgeSolarSystem = {}));
//# sourceMappingURL=main.js.map