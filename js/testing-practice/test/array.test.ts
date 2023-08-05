import { analyzeArray } from "../src/array.util";

describe("Array", () => {
  test("analyze array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
    expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toStrictEqual({
      average: -4,
      min: -8,
      max: -1,
      length: 6,
    });
    expect(analyzeArray([])).toStrictEqual({
      average: NaN,
      min: NaN,
      max: NaN,
      length: 0,
    });
  });
});
