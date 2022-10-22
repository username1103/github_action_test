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

test("실패 테스트 1+1 = 3", async () => {
  // given
  const a = 1;
  const b = 1;

  // when
  const result = sum(a, b);

  // then
  expect(result).toEqual(3);
});

test("env check", async () => {
  // given

  console.log(process.env.MYSQL_HOSTNAME);
  // when
  // then
});
