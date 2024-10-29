namespace Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    const asteroids: Asteroid[] = [];
    const frameRate: number = 20;
    const frameTime: number = 1 / frameRate; //time per frame

    function handleLoad(_event: Event): void {
        console.log("loading asteroids");
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        crc2.fillStyle = "black";
        crc2.strokeStyle = "green";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


        // const asteroid: Asteroid = new Asteroid(1);
        // console.log(asteroid);

        createPaths(); //function in "Paths.ts"
        createAsteroids(5);
        // createShip();

        // canvas.addEventListener("mousdown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20);
    }

    //creates given number of asteroids in array
    function createAsteroids(_nAsteroids: number): void {

        console.log("creating asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {

            const asteroid: Asteroid = new Asteroid(1);
            asteroids.push(asteroid);
        }
    }

    function loadLaser(_event: MouseEvent): void {

    }

    function shootLaser(_event: MouseEvent): void {

        console.log("shooting laser");
        const hotspot: Vector = new Vector(_event.offsetX, _event.offsetY);
        const asteroidHit: Asteroid | null = getAsteroidHit(hotspot); // 8min 30s
        
        if(asteroidHit) 
            console.log(asteroidHit)
            breakAsteroid(asteroidHit);
    }

    function handleKeypress(_event: KeyboardEvent): void {

    }

    function getAsteroidHit(_hotspot: Vector): Asteroid | null {

        for(const asteroid of asteroids) {
            if(asteroid.isHit(_hotspot))
                return asteroid;

        }
        return null;

    }

    function breakAsteroid(_asteroid: Asteroid): void {
        
        if(_asteroid.size > 0.3) {
            for(let i: number = 0; i<2; i++) {
                const fragment: Asteroid = new Asteroid(_asteroid.size/2);
                
            }
        }

        let index: number = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }

    //animation frame
    function update(): void {

        console.log("updating");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); //reset the canvas

        for (const asteroid of asteroids) {

            asteroid.move(1 / 50);
            asteroid.draw();
        }

    }

}