namespace SolarSystem {

    // global variables
    export let planetInfo: string = "";
    const child: CelestialBody[] = [];
    let sun: CelestialBody;

    //setting up the canvas
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export const crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        //preparing the simulation
        console.log("loading page");

        createCelestialBodies();
        setInterval(update, 25);

    }

    function createCelestialBodies(): void {
        //creating all simulated celestial bodies
        console.log("creating bodies");

        sun = new CelestialBody([child[0]], "sun", sunInfo, sunText, "yellow", 50, 1, 0);

    }

    function update(): void {
        //updating and redrawing the simulation
        console.log("updating");

        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        sun.draw();
        sun.orbitStep(1);
        //sun.checkedIfClicked();

    }

}