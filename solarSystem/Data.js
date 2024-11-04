"use strict";
var SolarSystem;
(function (SolarSystem) {
    SolarSystem.data = {
        name: "Sun",
        info: SolarSystem.sunInfo,
        text: SolarSystem.sunText,
        color: "yellow",
        radius: 40,
        rotAngle: 120,
        speedFactor: 0,
        distanceFromCenter: 0,
        children: [
            { name: "Mercury", info: SolarSystem.mercuryInfo, text: SolarSystem.mercuryText, color: "orange", radius: 8, rotAngle: 0, speedFactor: 4.1, distanceFromCenter: 70, children: [] },
            { name: "Venus", info: SolarSystem.venusInfo, text: SolarSystem.venusText, color: "#dce65e", radius: 10, rotAngle: 0, speedFactor: 1.6, distanceFromCenter: 110, children: [] },
            {
                name: "Earth", info: SolarSystem.earthInfo, text: SolarSystem.earthText, color: "blue", radius: 10, rotAngle: 0, speedFactor: 1, distanceFromCenter: 180,
                children: [
                    { name: "Moon", info: SolarSystem.moonInfo, text: SolarSystem.moonText, color: "white", radius: 5, rotAngle: 0, speedFactor: 13, distanceFromCenter: 20, children: [] }
                ]
            },
            {
                name: "Mars", info: SolarSystem.marsInfo, text: SolarSystem.marsText, color: "#d14217", radius: 10, rotAngle: 0, speedFactor: 0.53, distanceFromCenter: 230,
                children: [
                    { name: "Phobos", info: SolarSystem.phobosInfo, text: SolarSystem.phobosText, color: "grey", radius: 3, rotAngle: 0, speedFactor: 1216.6, distanceFromCenter: 20, children: [] },
                    { name: "Deimos", info: SolarSystem.deimosInfo, text: SolarSystem.deimosText, color: "white", radius: 3, rotAngle: 0, speedFactor: 304.2, distanceFromCenter: 30, children: [] }
                ]
            },
            {
                name: "Jupiter", info: SolarSystem.jupiterInfo, text: SolarSystem.jupiterText, color: "#de8745", radius: 30, rotAngle: 0, speedFactor: 0.08, distanceFromCenter: 300,
                children: [
                    { name: "Io", info: SolarSystem.ioInfo, text: SolarSystem.ioText, color: "white", radius: 5, rotAngle: 0, speedFactor: 202, distanceFromCenter: 40, children: [] },
                    { name: "Europe", info: SolarSystem.europaInfo, text: SolarSystem.europaText, color: "grey", radius: 5, rotAngle: 0, speedFactor: 104, distanceFromCenter: 53, children: [] },
                    { name: "Ganymede", info: SolarSystem.ganymedeInfo, text: SolarSystem.ganymedeText, color: "white", radius: 5, rotAngle: 0, speedFactor: 51.5, distanceFromCenter: 66, children: [] },
                    { name: "Callisto", info: SolarSystem.callistoInfo, text: SolarSystem.callistoText, color: "grey", radius: 5, rotAngle: 0, speedFactor: 21.8, distanceFromCenter: 81, children: [] }
                ]
            },
            {
                name: "Saturn", info: SolarSystem.saturnInfo, text: SolarSystem.saturnText, color: "#ebc681", radius: 20, rotAngle: 0, speedFactor: 0.03, distanceFromCenter: 380,
                children: [
                    { name: "Titan", info: SolarSystem.titanInfo, text: SolarSystem.titanText, color: "white", radius: 4, rotAngle: 0, speedFactor: 22.8, distanceFromCenter: 35, children: [] },
                    { name: "Prometheus", info: SolarSystem.prometheusInfo, text: SolarSystem.prometheusText, color: "grey", radius: 4, rotAngle: 0, speedFactor: 598.4, distanceFromCenter: 50, children: [] }
                ]
            },
            {
                name: "Uranus", info: SolarSystem.uranusInfo, text: SolarSystem.uranusText, color: "#cfdfe6", radius: 20, rotAngle: 0, speedFactor: 0.01, distanceFromCenter: 420,
                children: [
                    { name: "Oberon", info: SolarSystem.oberonInfo, text: SolarSystem.oberonText, color: "grey", radius: 4, rotAngle: 0, speedFactor: 27.1, distanceFromCenter: 20, children: [] },
                    { name: "Titania", info: SolarSystem.titaniaInfo, text: SolarSystem.titaniaText, color: "white", radius: 4, rotAngle: 0, speedFactor: 42, distanceFromCenter: 30, children: [] }
                ]
            },
            {
                name: "Neptun", info: SolarSystem.neptunInfo, text: SolarSystem.neptunText, color: "#b3d6e6", radius: 15, rotAngle: 0, speedFactor: 0.006, distanceFromCenter: 470,
                children: [
                    { name: "Triton", info: SolarSystem.tritonInfo, text: SolarSystem.tritonText, color: "grey", radius: 4, rotAngle: 0, speedFactor: 63, distanceFromCenter: 25, children: [] }
                ]
            },
            {
                name: "Pluto", info: SolarSystem.plutoInfo, text: SolarSystem.plutoText, color: "grey", radius: 5, rotAngle: 0, speedFactor: 0.004, distanceFromCenter: 510,
                children: [
                    { name: "Charon", info: , text: , color: "white", radius: 3, rotAngle: 0, speedFactor: 57, distanceFromCenter: 15, children: [] }
                ]
            }
        ]
    };
})(SolarSystem || (SolarSystem = {}));
//        {name: , info: , text:, children: [], color: , radius: , rotAngle: 0, speedFactor: , distanceFromCenter: }
//# sourceMappingURL=Data.js.map