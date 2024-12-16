export var DicePotential;
(function (DicePotential) {
    console.log("Hello there");
    function strategy(_score, _active, _potential) {
        const p = _potential;
        if (p >= 10) {
            return Math.random() < 0.2;
        }
        else {
            return true;
        }
    }
    DicePotential.strategy = strategy;
})(DicePotential || (DicePotential = {}));
//# sourceMappingURL=DiceShenigans.js.map