"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CanSortWithOneSwap_1 = __importDefault(require("../components/CanSortWithOneSwap"));
describe("CanSortWithOneSwap", () => {
    it("should return true for already sorted array", () => {
        const sortedArray = [1, 2, 3, 4, 5];
        expect((0, CanSortWithOneSwap_1.default)(sortedArray)).toBe(true);
    });
    it("should return true for array that can be sorted with one swap", () => {
        const arrayWithOneSwap = [1, 3, 2, 4, 5];
        expect((0, CanSortWithOneSwap_1.default)(arrayWithOneSwap)).toBe(true);
    });
    it("should return false for array that cannot be sorted with one swap", () => {
        const arrayWithMultipleMismatches = [1, 5, 3, 4, 8, 2];
        expect((0, CanSortWithOneSwap_1.default)(arrayWithMultipleMismatches)).toBe(false);
    });
    it("should return true for array with a single element", () => {
        const singleElementArray = [1];
        expect((0, CanSortWithOneSwap_1.default)(singleElementArray)).toBe(true);
    });
    it("should return false for empty array", () => {
        const emptyArray = [];
        expect((0, CanSortWithOneSwap_1.default)(emptyArray)).toBe(true);
    });
});
