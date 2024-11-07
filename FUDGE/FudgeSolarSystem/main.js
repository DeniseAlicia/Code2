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
        sun = new FudgeSolarSystem.Body3D("Sun", 1, "yellow");
        viewport = new FudgeSolarSystem.f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);
        console.log(sun);
        FudgeSolarSystem.f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        FudgeSolarSystem.f.Loop.start();
    }
    function update() {
    }
})(FudgeSolarSystem || (FudgeSolarSystem = {}));
//# sourceMappingURL=main.js.map