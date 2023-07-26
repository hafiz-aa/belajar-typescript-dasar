"use strict";
describe("If Statement", () => {
    // If Statement
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
    // Tenary Operator
    it("Should support tenary operator", function () {
        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Good";
        console.info(say);
    });
    // Switch Statement
    it("Should support switch statement", function () {
        function sayHello(name) {
            switch (name) {
                case "Hafiz":
                    return "Hi Hafiz";
                case "Aziz":
                    return "Hi Aziz";
                default:
                    return "Hello";
            }
        }
        console.info(sayHello("Hafiz"));
        console.info(sayHello("Aziz"));
        console.info(sayHello("X"));
    });
});
