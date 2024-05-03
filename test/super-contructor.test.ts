describe("Super Contructor", () => {
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  class Employee extends Person {
    departement: string;
    constructor(name: string, departemenet: string) {
      super(name);
      this.departement = departemenet;
    }
  }

  it("should support ", () => {
    const employee = new Employee("Eko", "IT");
    console.info(employee);
  });
});
