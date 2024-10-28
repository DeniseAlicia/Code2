namespace Asteroids {

    export let asteroidPaths: Path2D[];
    export let ufoPaths: Path2D[];

    export const shapeAsteroids: number[][][] = [
        [
            [30, 1], [50, 15]
        ],
        [
            [39, 1], [53, 28]
        ],
        [
            [39, 0], [57, 26]
        ],
        [
            [37, 3], [70, 14]
        ]
    ];

    export function createPaths(): void {

        asteroidPaths = createAsteroidPaths(shapeAsteroids);
    }

    function createAsteroidPaths(_shapes: number[][][]): Path2D[] {

        const paths: Path2D[] = [];
        for (const type of _shapes) {

            const path: Path2D = new Path2D;
            let first: boolean = true;

            for (const coordinates of type) {

                if(first) {
                    path.moveTo(coordinates[0], coordinates[1]);
                }
                else {
                    path.lineTo(coordinates[0], coordinates[1]);
                }
                first = false;
            }

            path.closePath();
            paths.push(path);

        }
        return paths;
    }

    function createUfoPaths(): Path2D {
        
    }

}