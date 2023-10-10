import { makeSecret } from "../src/makeSecret.js";

test("Should return secret with empty prefix if source is empty", () => {
  const input = "";
  const output = makeSecret(input);
  const expected = "0x" + "0".repeat(8);
  expect(output.slice(0, 10)).toBe(expected);
});

test("Should return secret with correct prefix", () => {
  const input = "blockful.io";
  const output = makeSecret(input);
  const expected = "0xa6831fd7";
  expect(output.slice(0, 10)).toBe(expected);
});
