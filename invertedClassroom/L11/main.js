"use strict";
var Modifiers;
(function (Modifiers) {
    console.log("script loaded successfully");
    let TYPE;
    (function (TYPE) {
        TYPE[TYPE["MYSTERY"] = 0] = "MYSTERY";
        TYPE[TYPE["ROBOT"] = 1] = "ROBOT";
        TYPE[TYPE["SPACESHIP"] = 2] = "SPACESHIP";
        TYPE[TYPE["WEAPON"] = 3] = "WEAPON";
        TYPE[TYPE["FAILURE"] = 4] = "FAILURE";
    })(TYPE || (TYPE = {}));
    class TestObject {
        constructor(_name, _value) {
            this.name = _name;
            this.value = _value;
            this.active = false;
        }
        activate() {
            if (this.active == false) {
                this.active = true;
            }
        }
    }
    class Prototype extends TestObject {
        constructor(_name, _value) {
            super(_name, _value);
            this.type = TYPE.MYSTERY;
            this.type = TYPE.ROBOT;
        }
        build() {
            switch (this.type) {
                case TYPE.ROBOT:
                    console.log("You have built a robot prototype");
                    break;
                case TYPE.SPACESHIP:
                    console.log("You have built a spaceship prototype");
                    break;
                case TYPE.WEAPON:
                    console.log("You have built a weapon prototype");
                    break;
                case TYPE.FAILURE:
                    console.log("Your prototype was a failure");
                    break;
            }
        }
    }
})(Modifiers || (Modifiers = {}));
//# sourceMappingURL=main.js.map