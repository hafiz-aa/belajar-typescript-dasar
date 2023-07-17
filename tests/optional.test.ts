describe("Optional", () => {
  it("Should support null and undefined typescript", () => {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    }
    sayHello("Hafiz");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
