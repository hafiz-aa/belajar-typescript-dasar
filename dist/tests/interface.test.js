describe("Interface", () => {
    it("Should support interface typescript", () => {
        const seller = {
            id: 1,
            name: "Toko XYZ",
            nib: "1390",
            npwp: "12121",
        };
        seller.name = "Toko Hfz";
        console.info(seller);
    });
    it("Should support function interface", () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it("Should support indexable interface", function () {
        const names = ["Hafiz", "Aziz", "Lexa"];
        console.info(names);
    });
    it("Should support indexable interface for non number index", function () {
        const dictionary = {
            name: "Hafiz",
            address: "Indonesia",
        };
        expect(dictionary["name"]).toBe("Hafiz");
        expect(dictionary["address"]).toBe("Indonesia");
    });
    it("Should support extend interface", function () {
        const employee = {
            id: "1",
            name: "Hafiz",
            division: "IT",
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Aziz",
            division: "IT",
            numberOfEmloyees: 8,
        };
        console.info(manager);
    });
    it("Should support function in interface", function () {
        const person = {
            name: "Hafiz",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("Budi"));
    });
    it("Should support intersection type", function () {
        const domain = {
            id: "1",
            name: "Hafiz",
        };
        console.info(domain);
    });
    it("Should support type assertion", function () {
        const person = {
            name: "Hafiz",
            age: 28,
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
