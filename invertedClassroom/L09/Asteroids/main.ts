namespace Asteroids {
    window.addEventListener("load", handleLoad);
    
    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        console.log("loading asteroids");
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = <CanvasRenderingContext2D> canvas.getContext("2d");

        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";

        const asteroid: Asteroid = new Asteroid(1);
        console.log(asteroid);
    }
}