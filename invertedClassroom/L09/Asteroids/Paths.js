"use strict";
var Asteroids;
(function (Asteroids) {
    Asteroids.shapeAsteroids = [
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
    function createPaths() {
        Asteroids.asteroidPaths = createAsteroidPaths(Asteroids.shapeAsteroids);
    }
    Asteroids.createPaths = createPaths;
    function createAsteroidPaths(_shapes) {
        const paths = [];
        for (const type of _shapes) {
            const path = new Path2D;
            let first = true;
            for (const coordinates of type) {
                if (first) {
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
    // function createUfoPaths(): Path2D {
    // }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Paths.js.map