namespace SolarSystem {

    export interface Data {
        name: string,
        info: string,
        text: string,
        color: string,
        radius: number,
        rotAngle: number,
        speedFactor: number,
        distanceFromCenter: number,
        children: Data[],
    }

    export const data: Data = {
        name: "Sun",
        info: sunInfo,
        text: sunText,
        color: "yellow",
        radius: 40,
        rotAngle: 120,
        speedFactor: 0,
        distanceFromCenter: 700,
        children: [
            { name: "Mercury", info: mercuryInfo, text: mercuryText, color: "orange", radius: 8, rotAngle: 0, speedFactor: 4.1, distanceFromCenter: 70, children: [] },

            { name: "Venus", info: venusInfo, text: venusText, color: "#dce65e", radius: 10, rotAngle: 0, speedFactor: 1.6, distanceFromCenter: 110, children: [] },

            {
                name: "Earth", info: earthInfo, text: earthText, color: "blue", radius: 10, rotAngle: 0, speedFactor: 1, distanceFromCenter: 180,
                children: [
                    { name: "Moon", info: moonInfo, text: moonText, color: "white", radius: 5, rotAngle: 0, speedFactor: 13, distanceFromCenter: 20, children: [] }
                ]
            },

            {
                name: "Mars", info: marsInfo, text: marsText, color: "#d14217", radius: 10, rotAngle: 0, speedFactor: 0.53, distanceFromCenter: 230,
                children: [
                    { name: "Phobos", info: phobosInfo, text: phobosText, color: "grey", radius: 3, rotAngle: 0, speedFactor: 1216.6, distanceFromCenter: 20, children: [] },
                    { name: "Deimos", info: deimosInfo, text: deimosText, color: "white", radius: 3, rotAngle: 0, speedFactor: 304.2, distanceFromCenter: 30, children: [] }
                ]

            },

            {
                name: "Jupiter", info: jupiterInfo, text: jupiterText, color: "#de8745", radius: 30, rotAngle: 0, speedFactor: 0.08, distanceFromCenter: 300,
                children: [
                    { name: "Io", info: ioInfo, text: ioText, color: "white", radius: 5, rotAngle: 0, speedFactor: 202, distanceFromCenter: 40, children: [] },
                    { name: "Europe", info: europaInfo, text: europaText, color: "grey", radius: 5, rotAngle: 0, speedFactor: 104, distanceFromCenter: 53, children: [] },
                    { name: "Ganymede", info: ganymedeInfo, text: ganymedeText, color: "white", radius: 5, rotAngle: 0, speedFactor: 51.5, distanceFromCenter: 66, children: [] },
                    { name: "Callisto", info: callistoInfo, text: callistoText, color: "grey", radius: 5, rotAngle: 0, speedFactor: 21.8, distanceFromCenter: 81, children: [] }
                ]
            },

            {
                name: "Saturn", info: saturnInfo, text: saturnText, color: "#ebc681", radius: 20, rotAngle: 0, speedFactor: 0.03, distanceFromCenter: 380,
                children: [
                    { name: "Titan", info: titanInfo, text: titanText, color: "white", radius: 4, rotAngle: 0, speedFactor: 22.8, distanceFromCenter: 35, children: [] },
                    { name: "Prometheus", info: prometheusInfo, text: prometheusText, color: "grey", radius: 4, rotAngle: 0, speedFactor: 598.4, distanceFromCenter: 50, children: [] }
                ]
            },

            {
                name: "Uranus", info: uranusInfo, text: uranusText, color: "#cfdfe6", radius: 20, rotAngle: 0, speedFactor: 0.01, distanceFromCenter: 420,
                children: [
                    { name: "Oberon", info: oberonInfo, text: oberonText, color: "grey", radius: 4, rotAngle: 0, speedFactor: 27.1, distanceFromCenter: 20, children: [] },
                    { name: "Titania", info: titaniaInfo, text: titaniaText, color: "white", radius: 4, rotAngle: 0, speedFactor: 42, distanceFromCenter: 30, children: [] }
                ]
            },

            {
                name: "Neptun", info: neptunInfo, text: neptunText, color: "#b3d6e6", radius: 15, rotAngle: 0, speedFactor: 0.006, distanceFromCenter: 470,
                children: [
                    { name: "Triton", info: tritonInfo, text: tritonText, color: "grey", radius: 4, rotAngle: 0, speedFactor: 63, distanceFromCenter: 25, children: [] }
                ]
            },

            {
                name: "Pluto", info: plutoInfo, text: plutoText, color: "grey", radius: 5, rotAngle: 0, speedFactor: 0.004, distanceFromCenter: 510,
                children: [
                    { name: "Charon", info: charonInfo, text: charonText, color: "white", radius: 3, rotAngle: 0, speedFactor: 57, distanceFromCenter: 15, children: [] }
                ]
            }

        ]

    }
}

//        {name: , info: , text:, children: [], color: , radius: , rotAngle: 0, speedFactor: , distanceFromCenter: }