describe("Type Alias", () => {
    it("Should support in typescript", function () {
        const category = {
            id: "1",
            name: "Handphone",
        };
        const product = {
            id: "2",
            name: "OnePlus",
            price: 13000000,
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
