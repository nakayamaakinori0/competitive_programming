import { main } from "./main";

describe("test of main", () => {
  test("test1", () => {
    const input = ["6 4", " ####", " #..#", " #..#", " ####", " #.##", " ####"];
    const result = main(input);
    expect(result).toBe("1");
  });

  // test("test2", () => {
  //   const input = ["helloWorld"];
  //   const result = main(input);
  //   expect(result).toBe("helloWorld");
  // });
});
