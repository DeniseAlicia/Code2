namespace SolarSystem {

    // global variables
    export let planetInfo: string = "";
    //const child: CelestialBody[] = [];
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

        const sunA: CelestialBody[] = [];
        const mercuryA: CelestialBody[] = [];
        const venusA: CelestialBody[] = [];

        sun = new CelestialBody(sunA, "sun", sunInfo, sunText, "yellow", 50, 120, 0, 650);

        const mercury: CelestialBody = new CelestialBody(mercuryA, "mercury", mercuryInfo, mercuryText, "orange", 10, 0, 0.15, 700);
        const venus: CelestialBody = new CelestialBody(venusA, "venus", venusInfo, venusText, "blue", 10, 0, 0.15, 800);


        sun.children.push(mercury, venus);
    }



    function update(): void {
        //updating and redrawing the simulation
        console.log("updating");

        crc2.clearRect(0, 0, canvas.width, canvas.height);

        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        sun.draw();
        sun.orbitStep(1);
        //sun.checkedIfClicked();

        console.log(sun.rotAngle);

    }

}