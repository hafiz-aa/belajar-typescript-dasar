import { Seller } from "../src/seller";

describe("Interface", () => {
  it("Should support interface typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko XYZ",
      nib: "1390",
      npwp: "12121",
    };
    seller.name = "Toko Hfz";

    console.info(seller);
  });
});
