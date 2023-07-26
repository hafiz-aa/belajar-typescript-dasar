"use strict";
describe("Loop", () => {
    it("Should support for loop statement", function () {
        const names = ["Hafiz", "Aziz", "Reyhan"];
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        for (const name of names) {
            console.info(name);
        }
        for (const index in names) {
            console.info(names[index]);
        }
    });
    it("Should support while loop statement", function () {
        let counter = 0;
        while (counter < 10) {
            console.info(counter);
            counter++;
        }
    });
    it("Should support do while loop statement", function () {
        let counter = 0;
        do {
            console.info(counter);
            counter++;
        } while (counter < 10);
    });
});
