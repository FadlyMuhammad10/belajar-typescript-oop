describe("Method Overriding", () => {
  class Employe {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employe {
    sayHello(name: string): void {
      super.sayHello(name);
      console.info("And, i am your manager");
    }
  }

  it("should support ", () => {
    const employee = new Employe("Ujer");
    employee.sayHello("Ney");

    const manager = new Manager("Ujer");
    manager.sayHello("Ney");
  });
});
