namespace SolarSystem {

    interface Data {
        name: string,
        info: string,
        text: string,
        children: Data[],
        color: string,
        radius: number,
        rotAngle: number,
        rotSpeed: number,
        distanceFromCenter: number,
        path: Path2D
    }

    const Data: Data =  {
        name: "Sun",
        info: sunInfo,
        text: sunText,
        children: [
            {name: "Mercury", info: mercuryInfo, text: mercuryText, children: [], color: "orange", radius: 8, rotAngle: 0, rotSpeed}
        ]
    }
}