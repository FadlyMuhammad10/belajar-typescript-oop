describe("Instance Of", () => {
  class Employe {}
  class Manager {}

  const budi = new Employe();
  const eko = new Manager();

  it("should have problem using typeof", () => {
    console.info(typeof budi);
    console.info(typeof eko);
  });
  it("should support instanceof", () => {
    expect(budi instanceof Employe).toBe(true);
    expect(budi instanceof Manager).toBe(false);
    expect(eko instanceof Employe).toBe(false);
    expect(eko instanceof Manager).toBe(true);
  });
});
