"use strict";
var SolarSystem;
(function (SolarSystem) {
    //info that is displayed when the celestial bodies are clicked. ` to create multiple lines
    //basic planet info: 
    // Diameter: 
    // Orbital period:
    // Mean orbital speed: (average)
    // Max surface temperature: 
    // Min surface temperature: 
    // Moons: 
    //basic moon info: 
    //Primary body:
    //Diameter: 
    //Orbital period:
    //Mean orbital speed:
    //Max surface temperature:
    //Min surface temperature:
    //sun
    SolarSystem.sunInfo = `
        Diameter: 1.392.700 km
        Surface temperature: 5498°C / 5772K
        Core temperature: 15,6 mil. K

    `;
    SolarSystem.sunText = "The center of our solar system also holds over 99% of its mass, with half of that mass being held by only 1,5% of the sun's volume in its core. In mythology, the sun has always been revered and sometimes feared for the power it holds over human life, being our primary source of light, warmth and being our oldest way to tell time.";
    //mercury
    SolarSystem.mercuryInfo = `
        Diameter: 4878 km
        Orbital period: 88 earth days
        Mean orbital speed: 47,36 km/s
        Max surface temperature: 427°C / 700K
        Min surface temperature: -170°C / 100K
        Moons: 0


    `;
    SolarSystem.mercuryText = "As the smallest planet in our solar system, mercury is smaller than some of the other planet's moons. Some scientists even theorize that it used to be the moon of venus, hence those two being the only moonless planets in our solar system. Mercury is named after the roman god of trade, thieves and travel.";
    //venus
    SolarSystem.venusInfo = `
        Diameter: 12.103 km
        Orbital period: 225 earth days
        Mean orbital speed: 35,02 km/s
        Max surface temperature: 482°C / 755K
        Min surface temperature: 438°C / 711K
        Moons: 0

    `;
    SolarSystem.venusText = "The atmosphere of Venus is composed of 96.5% carbon dioxide and 3.5% nitrogen, with other gases like sulfur dioxide, water and argon being found in traces. So despite venus being similar in size and density to earth it is extremly toxic for terrestial life, on top of its atmosphere being much heavier and it being covered in rivers of lava. Venus is named after the roman goddess of beauty and love.";
    //earth + moon
    SolarSystem.earthInfo = `
        Diameter: 12.756 km
        Orbital period: 365 earth days
        Mean orbital speed: 29,78 km/s
        Max surface temperature: -89°C / 184K
        Min surface temperature: 57°C / 330K
        Moons: 1

    `;
    SolarSystem.earthText = "Dubbed 'The Blue Planet', 70% of earth's surface is covered in oceans. It is the only planet in our solar system confirmed to harbour life, likely due to the fact that it is the only planet with liquid water found on its surface. In multiple belief systems throughout human history the earth has been personified as a goddess of life and mother of nature.";
    SolarSystem.moonInfo = `
        Primary body: Earth
        Diameter: 3474 km
        Orbital period: 28 earth days
        Mean orbital speed: 1.022 km/s
        Max surface temperature: 117°C / 390K
        Min surface temperature: -214°C / 95K

    `;
    SolarSystem.moonText = "As the brightest body in our night sky, the moon has always held cultural and spiritual significance, like being the basis for our modern calendar, being important in various archaic rituals and beliefs, and often being portrayed as a direct counterpart or accessory to the sun itself. Its gravity is also responsible for our ocean's tides.";
    //mars + moons
    SolarSystem.marsInfo = `
        Diameter: 6794 km
        Orbital period: 687 earth days
        Mean orbital speed: 24,07 km/s
        Max surface temperature: 20°C / 293K
        Min surface temperature: -153°C / 
        Moons: 2

    `;
    SolarSystem.marsText = "With its red color stemming from the iron oxide in its atmosphere and surface, it is no surprise Mars was named after the roman god of war. Though it is a dry desert planet today, there is plenty of geographical evidence suggesting there was once an abundance of liquid water, like lake beds, river valleys, and deltas. Its moons are named after the sons of the greek god of war, Ares.";
    SolarSystem.phobosInfo = `
        Primary body: Mars
        Measurements: 28 km x 22 km x 18 km
        Orbital period: 0,3 earth days
        Mean orbital speed: 2,139 km/s
        Max surface temperature: -5°C / 163K
        Min surface temperature: -110°C / 268K

    `;
    SolarSystem.phobosText = "Since its discovery in 1877, Phobos has been the setting for multiple pieces of media, like a map in the video game 'Doom'. Its most striking feature is the crater 'Stickney' with a diameter of 9 km. The greek word 'phobos' translates to 'fear'";
    SolarSystem.deimosInfo = `
        Primary body: Mars
        Measurements: 15 km x 12 km x 10.4 km
        Orbital period: 1,2 earth days
        Mean orbital speed: 1,351 km/s
        Surface temperature: -40°C / 233K

    `;
    SolarSystem.deimosText = "Despite being the smaller one of Mars' two moons, Deimos was discovered first. Since Phobos is close enough to be outshone by Mars, Deimos was discovered 6 days earlier. Its name translates to 'terror";
    //jupiter + moons
    SolarSystem.jupiterInfo = `
        Diameter: 142.800 km
        Orbital period: 11,9 earth years
        Mean orbital speed: 13,06 km/s
        Surface temperature: -108°C / 165K
        Moons: 95

    `;
    SolarSystem.jupiterText = " ";
    SolarSystem.ioInfo = `
        Primary body: Jupiter
        Diameter: 3642 km
        Orbital period: 1,8 earth days
        Mean orbital speed: 17,34 km/s
        Surface temperature: -143°C / 130K

    `;
    SolarSystem.ioText = "";
    SolarSystem.europaInfo = `
        Primary body: Jupiter
        Diameter: 3121,6 km
        Orbital period: 3.5 earth days
        Mean orbital speed: 13,74 km/s
        Max surface temperature: -133°C / 140K
        Min surface temperature: -223°C / 50K

    `;
    SolarSystem.europaText = "";
    SolarSystem.ganymedeInfo = `
        Primary body: Jupiter
        Diameter: 5262 km
        Orbital period: 7,1 earth days
        Mean orbital speed: 10,88 km/s
        Max surface temperature: / 160K
        Min surface temperature: / 90K

    `;
    SolarSystem.ganymedeText = "";
    SolarSystem.callistoInfo = `
        Primary body: Jupiter
        Diameter: 4820 km
        Orbital period: 16.7 earth days
        Mean orbital speed: 8,2 km/s
        Surface temperature: / 134K

    `;
    SolarSystem.callistoText = "";
    //saturn + moons
    SolarSystem.saturnInfo = `
        Diameter: 120.000 km
        Orbital period: 29,5 earth years
        Mean orbital speed: 9,68 km/s
        Surface temperature: -139°C / 134K
        Moons: 146

    `;
    SolarSystem.saturnText = "";
    SolarSystem.titanInfo = `
        Primary body: Saturn
        Diameter: 5150 km
        Orbital period: 16 earth days
        Mean orbital speed: 5,57 km/s
        Surface temperature: / 90K

    `;
    SolarSystem.titanText = "";
    SolarSystem.prometheusInfo = `
        Primary body: Saturn
        Measurements: 126 km x 80 km x 60 km
        Orbital period: 0,61 earth days
        Mean orbital speed: 16,53 km/s

    `;
    SolarSystem.prometheusText = "";
    //uranus
    SolarSystem.uranusInfo = `
        Diameter: 52,4 km
        Orbital period: 84 earth years
        Mean orbital speed: 6,81 km/s
        Surface temperature: -197°C / 76K
        Moons: 28

    `;
    SolarSystem.uranusText = "";
    SolarSystem.oberonInfo = `
        Primary body: Uranus
        Diameter: 1522,8 km
        Orbital period: 13,5 earth days
        Mean orbital speed: 3,15 km/s
        Surface temperature: / 70K

    `;
    SolarSystem.oberonText = "";
    SolarSystem.titaniaInfo = `
        Primary body: Uranus
        Diameter: 1577,8 km
        Orbital period: 8,7 earth days
        Mean orbital speed: 3,64 km/s
        Surface temperature: / 70K

    `;
    SolarSystem.titaniaText = "";
    //neptun
    SolarSystem.neptunInfo = `
        Diameter: 48.400 km
        Orbital period: 164,8 earth years
        Mean orbital speed: 5,5 km/s
        Surface temperature: -201°C / 72K
        Moons: 16

    `;
    SolarSystem.neptunText = "";
    SolarSystem.tritonInfo = `
        Primary body: Neptun
        Diameter: 2707 km
        Orbital period: 5,8 earth days
        Mean orbital speed: 4,39 km/s
        Surface temperature: -235°C / 38K

    `;
    SolarSystem.tritonText = "";
    //pluto
    SolarSystem.plutoInfo = `
        Diameter: 2374 km
        Orbital period: 247,4 earth years
        Mean orbital speed: 4,67 km/s
        Max surface temperature: -235°C / 38K
        Min surface temperature: -248°C / 24K
        Moons: 5

    `;
    SolarSystem.plutoText = "";
    SolarSystem.charonInfo = `
        Primary body: Pluto
        Diameter: 1212 km
        Orbital period: 6,4 earth days
        Mean orbital speed: 0,223 km/s
        Max surface temperature: -213°C / 60K
        Min surface temperature: -258°C / 15K

    `;
    SolarSystem.charonText = "";
    //sources
    //https://www.rmg.co.uk/stories/topics/solar-system-data
    //wikipedia
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=info.js.map