"use strict";
var SolarSystem;
(function (SolarSystem) {
    const Data = {
        name: "Sun",
        info: SolarSystem.sunInfo,
        text: SolarSystem.sunText,
        children: [
            { name: "Mercury", info: SolarSystem.mercuryInfo, text: SolarSystem.mercuryText, children: [], color: "orange", radius: 8, rotAngle: 0, rotSpeed }
        ]
    };
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Data.js.map