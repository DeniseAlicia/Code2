namespace SolarSystem {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", handleLoad);
    
    function handleLoad(): void {

        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = <CanvasRenderingContext2D> canvas.getContext("2d");

        createCelestialBodies();
        setInterval(update, 25);

    }
    
    function createCelestialBodies(): void {
        console.log("creating bodies");
    }

    function update(): void {

        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        
    }


}