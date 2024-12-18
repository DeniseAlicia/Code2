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
    //venus
    SolarSystem.venusInfo = `
    Diameter: 12.103 km <br> Orbital period: 225 earth days <br> Mean orbital speed: 35,02 km/s <br> Max surface temperature: 482°C / 755K <br> Min surface temperature: 438°C / 711K <br> Moons: 0

    `;
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
    SolarSystem.jupiterText = "The biggest planet in our solar system is a gas giant, meaning that it is mostly composed of gases like helium, methane and hydrogen, although there are likely ammonia crystals present in its atmosphere, giving the brighter zones their color. Jupiter's name comes from the roman king of sky and thunder, as well as the king of the god. Juno.";
    SolarSystem.ioInfo = `
    Primary body: Jupiter
    Diameter: 3642 km
    Orbital period: 1,8 earth days
    Mean orbital speed: 17,34 km/s
    Surface temperature: -143°C / 130K

    `;
    SolarSystem.ioText = "Io is the most geologically active object in our solar system, with more than 400 volcanoes all over its surface, and many mountains, some even higher than Earth's Mount Everest. All the volcanic activity produces a large gas torus around Jupiter. In greek mythology, Io is one of the 'lovers' of Zeus, the greek counterpart to Juno. ";
    SolarSystem.europaInfo = `
    Primary body: Jupiter
    Diameter: 3121,6 km
    Orbital period: 3.5 earth days
    Mean orbital speed: 13,74 km/s
    Max surface temperature: -133°C / 140K
    Min surface temperature: -223°C / 50K

    `;
    SolarSystem.europaText = "Not to be confused with one of Earth's continents, Europa, like all four Gallilean moons of Jupiter, is named after a 'lover' of Zeus. It has the smoothest surface out of any object in our solar system, which is explanined by the fact that its outer layer is entirely made of water with an ice crust on top. There could theoretically be extraterrestial life in the ocean underneath the ice, but it would most likely be single cell organisms.";
    SolarSystem.ganymedeInfo = `
    Primary body: Jupiter
    Diameter: 5262 km
    Orbital period: 7,1 earth days
    Mean orbital speed: 10,88 km/s
    Max surface temperature: -113°C / 160K
    Min surface temperature: -183°C / 90K

    `;
    SolarSystem.ganymedeText = "Ganymede is not only the largest satellite of Jupiter, but the largest one in the entire solar system. Like Europa, Ganymede likely also has subsurface oceans, although might be not only topped by, but also layered with ice sheets. Ganymede is the only of the four Gallilean moons that had its english spelling changed from the original latin one, its inspiration being the trojan prince Ganymedes.";
    SolarSystem.callistoInfo = `
    Primary body: Jupiter
    Diameter: 4820 km
    Orbital period: 16.7 earth days
    Mean orbital speed: 8,2 km/s
    Surface temperature:-139°C / 134K

    `;
    SolarSystem.callistoText = "Callisto's surface is completely covered in impact craters, and with no signs of geological activity on this moon, was likely primarily shaped by said impacts. That makes Callisto's not only the most cratered surface in the solar system, but also its oldest. ";
    //saturn + moons
    SolarSystem.saturnInfo = `
    Diameter: 120.000 km
    Orbital period: 29,5 earth years
    Mean orbital speed: 9,68 km/s
    Surface temperature: -139°C / 134K
    Moons: 146

    `;
    SolarSystem.saturnText = "Being called the 'ring planet', Saturn is most famous for its extensive ring system spanning more than 100.000 rings consisting of billions of dust particles, rocks and ice crystals. Saturn's namesake is the roman god of time, wealth and agriculture.";
    SolarSystem.titanInfo = `
    Primary body: Saturn
    Diameter: 5150 km
    Orbital period: 16 earth days
    Mean orbital speed: 5,57 km/s
    Surface temperature: -183°C / 90K

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
    SolarSystem.uranusText = "One of the most interesting thing about this ice giant is its rotation axis, which almost points at the sun, meaning uranus 'rolls' along its orbit, unlike almost all other planets in our solar system. The prevalent theory for that phenomenon is that very early in its lifecycle, Uranus collided with a rock the size of earth, which tilted it in it's modern position. In greek mythology, Uranus was the personification of the sky.";
    SolarSystem.oberonInfo = `
    Primary body: Uranus
    Diameter: 1522,8 km
    Orbital period: 13,5 earth days
    Mean orbital speed: 3,15 km/s
    Surface temperature: -203°C / 70K

    `;
    SolarSystem.oberonText = "";
    SolarSystem.titaniaInfo = `
    Primary body: Uranus
    Diameter: 1577,8 km
    Orbital period: 8,7 earth days
    Mean orbital speed: 3,64 km/s
    Surface temperature: -203°C / 70K

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
    SolarSystem.neptunText = "Named after the roman god of the sea, you would think that neptune's surface is covered in vast oceans, but it is actually an ice giant, like uranus, and is mostly composed of gases. Although its atmosphäre contains 80% hydrogen, so maybe it still counts. The other 20% are made of helium and traces of other gases.";
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
    SolarSystem.plutoText = "Although Pluto was officially stripped of its 'planet' title by the IAU in 2006, many still consider this dwarf planet a real member of our plantary solar system family. It also 'rolls' on its side like uranus, but there is no clear theroy as to why that is. Plutos surface is almost entirely made of nitrogen ice. Fitting for a (dwarf) planet named after the roman ruler of the underworld.";
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