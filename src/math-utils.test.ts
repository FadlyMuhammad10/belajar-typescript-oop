export namespace MathUtils {
  export const phi: number = 3.14;
  export function sum(...values: number[]): number {
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  }
}
