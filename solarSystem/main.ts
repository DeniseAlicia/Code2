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

        sun = new CelestialBody("Sun", sunInfo, sunText, "yellow", 40, 120, 0, 650);

        const mercury: CelestialBody = new CelestialBody("Mercury", mercuryInfo, mercuryText, "orange", 8, 0, 0.015, 70);
        const venus: CelestialBody = new CelestialBody("Venus", venusInfo, venusText, "yellow", 10, 0, 0.015, 110);
        const earth: CelestialBody = new CelestialBody("Earth", earthInfo, earthText, "blue", 10, 0, 0.015, 160) ;
        const mars: CelestialBody = new CelestialBody("Mars", marsInfo, marsText, "red", 10, 0, 0.015, 210);
        const jupiter: CelestialBody = new CelestialBody("Jupiter", jupiterInfo, jupiterText, "orange", 30, 0, 0.015, 300);
        const saturn: CelestialBody = new CelestialBody("Saturn", saturnInfo, saturnText, "grey", 20, 0, 0.015, 380);
        const uranus: CelestialBody = new CelestialBody("Uranus", uranusInfo, uranusText, "green", 15, 0, 0.015, 420);
        const neptun: CelestialBody = new CelestialBody("Neptun", neptunInfo, neptunText, "blue", 15, 0, 0.015, 450);
        const pluto: CelestialBody = new CelestialBody("Pluto", plutoInfo, plutoText, "grey", 5, 0, 0.015, 480);
        sun.children.push(mercury, venus, earth, mars, jupiter, saturn, neptun, uranus, pluto);

        const moon: CelestialBody = new CelestialBody();

        const phobos: CelestialBody = new CelestialBody();
        const deimos: CelestialBody = new CelestialBody();

        const io: CelestialBody = new CelestialBody();
        const europa: CelestialBody = new CelestialBody();
        const ganymede: CelestialBody = new CelestialBody();
        const callisto: CelestialBody = new CelestialBody();

        const titan: CelestialBody = new CelestialBody();
        const prometheus: CelestialBody = new CelestialBody();

        const oberon: CelestialBody = new CelestialBody();
        const titania: CelestialBody = new CelestialBody();

        const triton: CelestialBody = new CelestialBody();

        const charon: CelestialBody = new CelestialBody();


 
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