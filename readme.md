# deno-hashids

Generate short unique ids from integers.

## example

```typescript
import { Hashids } from "https://deno.begin.com/hashids@latest/mod.ts";

let hashids = new Hashids("my salt");
let value = hashids.encode(Date.now());

console.log(value, hashids.decode(value));
```

## api

```typescript
type Hashids {
  constuctor(salt?:string, length?:number, alphabet?:string);
  encode(...args:number[]):string;
  decode(value:string):number[];
}
```

> This project is a fork of [Hashids.js 1.2.1](https://github.com/niieani/hashids.js)
