"use strict";
describe("Array", () => {
    it("Should same with javascript", () => {
        const names = ["Hafiz", "Nisa", "Aziz"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it("Should support readonly array", () => {
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = "Main gim";
    });
    it("Should support tuple", function () {
        const person = ["Hafiz", "Aziz", 25];
        console.info(person);
        //person[0] = "Budi";
    });
});
