describe("Union Type", () => {
  it("Should support union in typescript", function () {
    let sample: number | string | boolean = "Hafiz";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);

    //sample = [];
  });

  it("Should process the union type", () => {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process(100)).toBe(102);
    expect(process("Hafiz")).toBe("HAFIZ");
    expect(process(true)).toBe(false);
  });
});
