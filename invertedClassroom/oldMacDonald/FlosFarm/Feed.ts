namespace OldMacDonald {

    export class Feed {

        name: string;
        amount: number;
        maxamount: number;
        minamount: number;

        constructor(_name: string, _amount: number, _maxamount: number, _minamount: number) {

            this.name = _name;
            this.amount = _amount;
            this.maxamount = _maxamount;
            this.minamount = _minamount;

        }

        //reduces the amount of food in silo
        reducefeed(_amount: number, _amountfeed: number): void {

            this.amount = _amount - _amountfeed;
            console.log(this.name + " left: " + String(this.amount));
            console.groupEnd();

        }

        refillSilo(_amount: number, _maxamount: number): void {

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

}