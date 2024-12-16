export namespace DicePotential {
    console.log("Hello there")
    export function strategy(_score: number[], _active: number, _potential: number): boolean {
        
        const p: number = _potential;
        if (p >= 10) {
            return Math.random() < 0.2;
        }
        else {
            return true
        }

    }
}