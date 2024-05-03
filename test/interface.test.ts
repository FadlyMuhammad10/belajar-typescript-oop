describe("Inheritance Interface", () => {
  interface HasName {
    name: string;
  }
  interface CanSayHallo {
    sayHallo(name: string): void;
  }

  class Person implements HasName, CanSayHallo {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    sayHallo(name: string): void {
      console.info(`Hallo ${name} , My name is ${this.name}`);
    }
  }

  it("should support ", () => {
    const person = new Person("Budi");

    person.sayHallo("Tono");
  });
});
