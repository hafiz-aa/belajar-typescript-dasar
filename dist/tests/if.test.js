"use strict";
describe("If Statement", () => {
    it("Should support if statement in typescript", function () {
        const examValue = 90;
        if (examValue > 80) {
            console.info("Good");
        }
        else if (examValue > 60) {
            console.info("Not Bad");
        }
        else {
            console.info("Try Again");
        }
    });
    it("Should support tenary operator", function () {
        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Good";
        console.info(say);
    });
});
