namespace Modifiers {
    console.log("script loaded successfully");

    enum TYPE {
        MYSTERY,
        ROBOT,
        SPACESHIP,
        WEAPON,
        FAILURE 
    }

    abstract class TestObject {
        public name: string;
        public active: boolean;
        private value: number;
        

        constructor(_name: string, _value: number) {
            this.name = _name;
            this.value = _value;
            this.active = false;
        }


        public activate(): void {
            if (this.active == false) {
                this.active = true
            }
        }
    

        abstract build(): void


    }
    
    class Prototype extends TestObject {
        protected type: TYPE = TYPE.MYSTERY

        constructor(_name: string, _value: number) {
            super(_name, _value);

            this.type = TYPE.ROBOT;

        }

        build(): void {
            switch(this.type){
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


}