describe("Loop", () => {
  it("Should support for loop statement", function () {
    const names: string[] = ["Hafiz", "Aziz", "Reyhan"];

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

  it("Should support while loop statement", function () {
    let counter: number = 0;
    while (counter < 10) {
      console.info(counter);
      counter++;
    }
  });

  it("Should support do while loop statement", function () {
    let counter: number = 0;

    do {
      console.info(counter);
      counter++;
    } while (counter < 10);
  });

  it("Should support break and continue", function () {
    let counter: number = 0;

    do {
      counter++;

      if (counter == 10) {
        break;
      }

      if (counter % 2 == 0) {
        continue;
      }
      console.info(counter);
    } while (true);
  });
});
