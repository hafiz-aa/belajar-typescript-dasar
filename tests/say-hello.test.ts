import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  it("Should return hello Hafiz", () => {
    expect(sayHello("Hafiz")).toBe("Hello Hafiz");
  });
});
