import CanSortWithOneSwap from "../components/CanSortWithOneSwap";

describe("CanSortWithOneSwap", () => {
  it("should return true for already sorted array", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    expect(CanSortWithOneSwap(sortedArray)).toBe(true);
  });

  it("should return true for array that can be sorted with one swap", () => {
    const arrayWithOneSwap = [1, 3, 2, 4, 5];
    expect(CanSortWithOneSwap(arrayWithOneSwap)).toBe(true);
  });

  it("should return false for array that cannot be sorted with one swap", () => {
    const arrayWithMultipleMismatches = [1, 5, 3, 4, 8, 2];
    expect(CanSortWithOneSwap(arrayWithMultipleMismatches)).toBe(false);
  });

  it("should return true for array with a single element", () => {
    const singleElementArray = [1];
    expect(CanSortWithOneSwap(singleElementArray)).toBe(true);
  });

  it("should return false for empty array", () => {
    const emptyArray: number[] = [];
    expect(CanSortWithOneSwap(emptyArray)).toBe(true);
  });
});
