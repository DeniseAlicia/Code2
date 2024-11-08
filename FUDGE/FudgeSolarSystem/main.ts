namespace FudgeSolarSystem {
    console.log("script loaded");

    let sun: Body;
    
    let viewport: f.Viewport;

    window.addEventListener("load", start);

    function start(): void {

        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const camera: f.ComponentCamera = new f.ComponentCamera();
     

        sun = new Body("Sun", 1, "yellow", 0, 0);
        const earth: Body = new Body("Earth", 0.5, "blue", 2, 5);
        const moon: Body = new Body("Moon", 0.5, "grey", 1, 1);


        sun.addChild(earth.rotationNode);
        earth.addChild(moon.rotationNode);
        
        viewport = new f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);

        console.log(sun);

        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.rotateY(180);

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
    }

    function update(): void {

        sun.step();
        viewport.draw();
    }






}   