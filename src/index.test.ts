import { add } from "./index";

describe("add", () => {
  it("should return 3 when called with 1 and 2", () => {
    expect(add(1, 2)).toStrictlyEqual(3);
  });
});
