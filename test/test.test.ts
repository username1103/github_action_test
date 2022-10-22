import { sum } from "../src/index";

test("1+1 = 2", async () => {
  // given
  const a = 1;
  const b = 1;

  // when
  const result = sum(a, b);

  // then
  expect(result).toEqual(2);
});
