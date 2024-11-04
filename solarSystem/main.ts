namespace SolarSystem {

    // global variables
    export let planetName: string = "";
    export let planetInfo: string = "";
    export let planetText: string = "";

    //const child: CelestialBody[] = [];
    let sun: CelestialBody;

    //setting up the canvas
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export const crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d")!;


    //Slider for the SpeedModifier
    const speedSlider: HTMLInputElement = <HTMLInputElement>document.getElementById("SpeedModifier");

    window.addEventListener("load", handleLoad);
    // speedSlider.addEventListener("input", handleSliderInput);

    function handleLoad(): void {
        //preparing the simulation
        console.log("loading page");
    
        sun = createCelestialBodies(data);
        canvas.addEventListener("click", handleClick);
        setInterval(update, 25);

    }

    function createCelestialBodies(_data: Data): CelestialBody {
        //creating all simulated celestial bodies
        console.log("creating bodies");
        
        const body: CelestialBody = new CelestialBody(_data)

        for(const child of data.children) {
            body.addChild(createCelestialBodies(child)); 
        }

        return body;


    }

    function handleClick(_event: MouseEvent): void {

        sun.checkedIfClicked(_event);
        //display planetName, planetInfo and planetText in div element beneath slider

        const nameBox: HTMLElement = document.querySelector(".infoBlock .nameBox")!;
        const infoBox: HTMLElement = document.querySelector(".infoBlock .infoBox")!;
        const textBox: HTMLElement = document.querySelector(".infoBlock .textBox")!;
        
        nameBox.textContent = planetName;
        infoBox.textContent = planetInfo;
        textBox.textContent = planetText;
    }





    function update(): void {
        //updating and redrawing the simulation
        // console.log("updating");

        crc2.clearRect(0, 0, canvas.width, canvas.height);

        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        sun.draw();
        sun.orbitStep(Number(speedSlider.value));

    }

}