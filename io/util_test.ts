// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import { test, assert } from "../testing/mod.ts";
import { copyBytes } from "./util.ts";

test(function testCopyBytes() {
  let dst = new Uint8Array(4);

  dst.fill(0);
  let src = Uint8Array.of(1, 2);
  let len = copyBytes(dst, src, 0);
  assert(len === 2);
  assert.equal(dst, Uint8Array.of(1, 2, 0, 0));

  dst.fill(0);
  src = Uint8Array.of(1, 2);
  len = copyBytes(dst, src, 1);
  assert(len === 2);
  assert.equal(dst, Uint8Array.of(0, 1, 2, 0));

  dst.fill(0);
  src = Uint8Array.of(1, 2, 3, 4, 5);
  len = copyBytes(dst, src);
  assert(len === 4);
  assert.equal(dst, Uint8Array.of(1, 2, 3, 4));

  dst.fill(0);
  src = Uint8Array.of(1, 2);
  len = copyBytes(dst, src, 100);
  assert(len === 0);
  assert.equal(dst, Uint8Array.of(0, 0, 0, 0));

  dst.fill(0);
  src = Uint8Array.of(3, 4);
  len = copyBytes(dst, src, -2);
  assert(len === 2);
  assert.equal(dst, Uint8Array.of(3, 4, 0, 0));
});
