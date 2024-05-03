describe("Inheritance", () => {
  // parent classnya
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  class Manager extends Employee {}
  class Director extends Manager {}

  it("should support ", () => {
    const employee = new Employee("Fadly");
    console.log(employee.name);
    const manager = new Manager("Tono");
    console.log(manager.name);
    const director = new Director("John");
    console.log(director.name);
  });
});
