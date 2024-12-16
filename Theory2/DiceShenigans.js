export var DicePotential;
(function (DicePotential) {
    console.log("Hello there");
    function strategy(_score, _active, _potential) {
        return Math.random() < 0.8;
    }
    DicePotential.strategy = strategy;
})(DicePotential || (DicePotential = {}));
//# sourceMappingURL=DiceShenigans.js.map