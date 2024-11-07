namespace FudgeSolarSystem {
    console.log("script loaded");

    let sun: Body3D;
    let viewport: f.Viewport;

    window.addEventListener("load", start);

    function start(): void {

        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const camera: f.ComponentCamera = new f.ComponentCamera();

        sun = new Body3D("Sun", 1, "yellow");

        viewport = new f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);

        console.log(sun)

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
    }

    function update(): void {

    }






}   