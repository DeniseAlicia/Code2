export namespace Flo {
    export function strategy(_score: number[], _active: number, _potential: number): boolean {
        return Math.random() < 0.33; 
    }
}