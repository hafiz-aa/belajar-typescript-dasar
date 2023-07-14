describe("Array", () => {
  it("Should same with javascript", () => {
    const names: string[] = ["Hafiz", "Nisa", "Aziz"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });
  it("Should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    // hobbies[0] = "Main gim";
  });

  it("Should support tuple", function () {
    const person: readonly [string, string, number] = ["Hafiz", "Aziz", 25];

    console.info(person);

    //person[0] = "Budi";
  });
});
