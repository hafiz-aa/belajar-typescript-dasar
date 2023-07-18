import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";

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

  it("Should support function interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("Should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Hafiz", "Aziz", "Lexa"];
    console.info(names);
  });

  it("Should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Hafiz",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Hafiz");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  it("Should support extend interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Hafiz",
      division: "IT",
    };
    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Aziz",
      division: "IT",
      numberOfEmloyees: 8,
    };
    console.info(manager);
  });
});
