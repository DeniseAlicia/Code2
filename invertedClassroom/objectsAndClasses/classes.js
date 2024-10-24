"use strict";
var Classes;
(function (Classes) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    const v1 = new Vector(5, -208);
    console.log(v1);
    v1.scale(-3);
    console.log(v1);
})(Classes || (Classes = {}));
//# sourceMappingURL=classes.js.map