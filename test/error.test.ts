describe("Error Handling", () => {
  class ValidationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }
  function DoubleIt(value: number): number {
    if (value < 0) {
      throw new ValidationError("Value can not less 0");
    } else {
      return value * 2;
    }
  }

  it("should support", () => {
    try {
      const result = DoubleIt(-2);
      console.info(result);
    } catch (e) {
      if (e instanceof ValidationError) {
        console.info(e.message);
      }
    }
  });
});
