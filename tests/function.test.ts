describe("Function", function () {
  it("Should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Hafiz")).toBe("Hello Hafiz");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Hafiz");
  });

  it("Should support default value", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }
    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Hafiz")).toBe("Hello Hafiz");
  });

  it("Should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("Should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }
    expect(sayHello("Hafiz")).toBe("Hello Hafiz");
    expect(sayHello("Hafiz", "Aziz")).toBe("Hello Hafiz Aziz");
  });
});
