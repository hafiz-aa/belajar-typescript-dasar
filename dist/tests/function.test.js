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
    it("Should support default value", function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Hafiz")).toBe("Hello Hafiz");
    });
    it("Should support rest parameter", function () {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it("Should support optional parameter", function () {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Hafiz")).toBe("Hello Hafiz");
        expect(sayHello("Hafiz", "Aziz")).toBe("Hello Hafiz Aziz");
    });
    it("Should support function overloading", function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("hafiz")).toBe("HAFIZ");
    });
    it("Should support function parameter", function () {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("Hafiz", toUpper)).toBe("Hello HAFIZ");
        // Anonymous function
        expect(sayHello("Hafiz", function (name) {
            return name.toUpperCase();
        })).toBe("Hello HAFIZ");
        // Arrow function
        expect(sayHello("Hafiz", (name) => name.toUpperCase())).toBe("Hello HAFIZ");
    });
});
