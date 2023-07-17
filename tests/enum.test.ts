import { Customer, CustomerType } from "../src/enum";

describe("Enum", () => {
  it("Should support in typescript", function () {
    const customer: Customer = {
      id: 1,
      name: "Hafiz",
      type: CustomerType.GOLD,
    };
    console.info(customer);
  });
});
