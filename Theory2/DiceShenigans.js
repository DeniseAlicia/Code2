"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DicePotential = void 0;
var DicePotential;
(function (DicePotential) {
    console.log("Hello there");
    function strategy(_score, _active, _potential) {
        return Math.random() < 0.5;
    }
    DicePotential.strategy = strategy;
})(DicePotential || (exports.DicePotential = DicePotential = {}));
//# sourceMappingURL=DiceShenigans.js.map