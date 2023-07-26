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
});
