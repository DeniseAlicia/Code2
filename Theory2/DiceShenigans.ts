export namespace DicePotential {
    console.log("Hello there")
    export function strategy(_score: number[], _active: number, _potential: number): boolean {
        
        return Math.random() < 0.8;

    }
}