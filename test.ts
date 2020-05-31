import { Hashids } from "./mod.js";

Deno.test("encode one", () => {
  let hashid = new Hashids();
  console.log(hashid.encode(Date.now()));
});

Deno.test("encode and decode", () => {
  const hashids = new Hashids(
    undefined,
    undefined,
    '!@#$%^&*()_~`=-,.<>/?";:\|][{}',
  );
  const randvalue1 = Date.now();
  const randvalue2 = ~~(Math.random() * 10);
  const value = hashids.encode(randvalue1, randvalue2);
  console.log(
    [randvalue1, randvalue2],
    "-->",
    value,
    "-->",
    hashids.decode(value),
  );
});
