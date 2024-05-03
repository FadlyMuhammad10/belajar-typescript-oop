describe("Visibility", () => {
  class Counter {
    protected counter: number = 0;

    increment(): void {
      this.counter++;
    }
    getCounter(): number {
      return this.counter;
    }
  }
  class DoubleCounter extends Counter {
    increment(): void {
      this.counter += 3;
    }
  }

  it("should support private", () => {
    const counter = new Counter();

    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });
  it("should support protected", () => {
    const counter = new DoubleCounter();

    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });
});
