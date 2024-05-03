import { MathUtils } from "../src/math-utils.test";

describe("Namespace", () => {
  it("should support", () => {
    console.info(MathUtils.phi);
    console.info(MathUtils.sum(1, 2, 3, 4, 5));
  });
});
