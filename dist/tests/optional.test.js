"use strict";
describe("Optional", () => {
    it("Should support null and undefined typescript", () => {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Hafiz");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
