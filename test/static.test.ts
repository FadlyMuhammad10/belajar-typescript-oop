describe("Static", () => {
  class Configuration {
    static NAME: string = "Belajar Typescript OOP";
    static VERSION: Number = 1.0;
    static AUTHOR: string = "Fadly Muhammad";
  }
  class MathUtils {
    static sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
  }

  it("should support", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });
  it("should support static method", () => {
    console.info(MathUtils.sum(1, 2, 3));
  });
});
