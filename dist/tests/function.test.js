"use strict";
describe("Function", function () {
    it("Should support in typescript", function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Hafiz")).toBe("Hello Hafiz");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Hafiz");
    });
});
