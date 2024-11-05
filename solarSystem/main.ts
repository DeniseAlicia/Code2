namespace SolarSystem {

    // global variables
    export let planetName: string = "";
    export let planetInfo: string = "";
    export let planetText: string = "";

    //const child: CelestialBody[] = [];
    let sun: CelestialBody;

    //setting up the canvas
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export const crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    //Slider for the SpeedModifier
    const speedSlider: HTMLInputElement = <HTMLInputElement>document.getElementById("SpeedModifier");

    window.addEventListener("load", handleLoad);
    canvas.addEventListener("click", handleClick);
    speedSlider.addEventListener("input", handleSliderInput);

    document.getElementsByClassName("infoBox").innerHTML 

    function handleLoad(): void {
        //preparing the simulation
        console.log("loading page");

        createCelestialBodies();
        setInterval(update, 25);

    }

    //get Slider Input 
    function handleSliderInput(_event: Event): void {
        let slider: HTMLInputElement = <HTMLInputElement>_event.target;
        let value: number = Number(slider.value);
        console.log(value);

    }

    function createCelestialBodies(): void {
        //creating all simulated celestial bodies
        console.log("creating bodies");
        const earthSpeed: number = 0.0015;

        sun = new CelestialBody("Sun", sunInfo, sunText, "yellow", 40, 120, 0, 750);

        const mercury: CelestialBody = new CelestialBody("Mercury", mercuryInfo, mercuryText, "orange", 8, 0, earthSpeed * 4.1, 70);
        const venus: CelestialBody = new CelestialBody("Venus", venusInfo, venusText, "#dce65e", 10, 0, earthSpeed * 1.6, 110);
        const earth: CelestialBody = new CelestialBody("Earth", earthInfo, earthText, "blue", 10, 0, earthSpeed, 180);
        const mars: CelestialBody = new CelestialBody("Mars", marsInfo, marsText, "#d14217", 10, 0, earthSpeed * 0.53, 230);
        const jupiter: CelestialBody = new CelestialBody("Jupiter", jupiterInfo, jupiterText, "#de8745", 30, 0, earthSpeed * 0.08, 300);
        const saturn: CelestialBody = new CelestialBody("Saturn", saturnInfo, saturnText, "#ebc681", 20, 0, earthSpeed * 0.03, 380);
        const uranus: CelestialBody = new CelestialBody("Uranus", uranusInfo, uranusText, "#cfdfe6", 15, 0, earthSpeed * 0.01, 420);
        const neptun: CelestialBody = new CelestialBody("Neptun", neptunInfo, neptunText, "#b3d6e6", 15, 0, earthSpeed * 0.006, 470);
        const pluto: CelestialBody = new CelestialBody("Pluto", plutoInfo, plutoText, "grey", 5, 0, earthSpeed * 0.004, 510);
        sun.children.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptun, pluto);

        const moon: CelestialBody = new CelestialBody("Moon", moonInfo, moonText, "white", 5, 0, earthSpeed * 13, 20);
        earth.children.push(moon);

        const phobos: CelestialBody = new CelestialBody("Phobos", phobosInfo, phobosText, "grey", 3, 0, earthSpeed * 1216.6, 20);
        const deimos: CelestialBody = new CelestialBody("Deimos", deimosInfo, deimosText, "white", 3, 0, earthSpeed * 304.2, 30);
        mars.children.push(phobos, deimos);

        const io: CelestialBody = new CelestialBody("Io", ioInfo, ioText, "white", 5, 0, earthSpeed * 202, 40);
        const europa: CelestialBody = new CelestialBody("Europa", europaInfo, europaText, "grey", 5, 0, earthSpeed * 104, 53);
        const ganymede: CelestialBody = new CelestialBody("Ganymede", ganymedeInfo, ganymedeText, "white", 5, 0, earthSpeed * 51.5, 66);
        const callisto: CelestialBody = new CelestialBody("Callisto", callistoInfo, callistoText, "grey", 5, 0, earthSpeed * 21.8, 81);
        jupiter.children.push(io, europa, ganymede, callisto);

        const titan: CelestialBody = new CelestialBody("Titan", titanInfo, titanText, "white", 4, 0, earthSpeed * 22.8, 35);
        const prometheus: CelestialBody = new CelestialBody("Prometheus", prometheusInfo, prometheusText, "grey", 4, 0, earthSpeed * 598.4, 50);
        saturn.children.push(titan, prometheus);

        const oberon: CelestialBody = new CelestialBody("Oberon", oberonInfo, oberonText, "grey", 4, 0, earthSpeed * 27.1, 20);
        const titania: CelestialBody = new CelestialBody("Titania", titaniaInfo, titaniaText, "white", 4, 0, earthSpeed * 42, 30);
        uranus.children.push(oberon, titania);

        const triton: CelestialBody = new CelestialBody("Triton", tritonInfo, tritonText, "grey", 4, 0, earthSpeed * 63, 25);
        neptun.children.push(triton);

        const charon: CelestialBody = new CelestialBody("Charon", charonInfo, charonText, "white", 3, 0, earthSpeed * 57, 15);
        pluto.children.push(charon);



    }

    function handleClick(_event: MouseEvent): void {

        sun.checkedIfClicked(_event);
        //display planetName, planetInfo and planetText in div element beneath slider
    }





    function update(): void {
        //updating and redrawing the simulation
        // console.log("updating");

        crc2.clearRect(0, 0, canvas.width, canvas.height);

        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        sun.draw();
        sun.orbitStep(speedSlider.value);

    }

}