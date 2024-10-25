"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    class Feed {
        constructor(_name, _amount, _maxamount, _minamount) {
            this.name = _name;
            this.amount = _amount;
            this.maxamount = _maxamount;
            this.minamount = _minamount;
        }
        //reduces the amount of food in silo
        reducefeed(_amount, _amountfeed) {
            this.amount = _amount - _amountfeed;
            console.log(this.name + " left: " + String(this.amount));
            console.groupEnd();
        }
        refillSilo(_amount, _maxamount) {
            if (_amount >= _maxamount) {
                console.log(this.name + "-silo is full"); //the way this code currently works, this message will never appear
            }
            else if (_amount <= this.minamount) {
                _amount = _maxamount;
            }
            else {
                this.amount += 1;
            }
        }
    }
    OldMacDonald.Feed = Feed;
})(OldMacDonald || (OldMacDonald = {}));
//# sourceMappingURL=Feed.js.map