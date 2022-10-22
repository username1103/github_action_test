import mysql2 from "mysql2/promise";
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

test("env check", async () => {
  // given
  console.log({
    host: process.env.MYSQL_HOSTNAME,
    port: parseInt(process.env.MYSQL_PORT, 10),
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
  const conn = await mysql2.createConnection({
    host: process.env.MYSQL_HOSTNAME,
    port: parseInt(process.env.MYSQL_PORT, 10),
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  // when
  const [result] = await conn.query(`SELECT 1`);

  // then
  await conn.end();
  expect(result[0]["1"]).toEqual(1);
});
