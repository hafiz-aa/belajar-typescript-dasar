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
});
