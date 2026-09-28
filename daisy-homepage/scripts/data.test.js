import test from "node:test";
import assert from "node:assert/strict";
import { getMix, priorities } from "../js/data.js";
test("mixer changes only at the specified boundaries", () => {
  assert.equal(getMix(0).title, getMix(33).title);
  assert.equal(getMix(34).title, getMix(66).title);
  assert.equal(getMix(67).title, getMix(100).title);
  assert.notEqual(getMix(33).title, getMix(34).title);
  assert.notEqual(getMix(66).title, getMix(67).title);
});
test("every desk choice includes a concrete tradeoff", () => {
  assert.equal(Object.keys(priorities).length, 3);
  for (const choice of Object.values(priorities)) {
    for (const key of ["label", "title", "description", "tradeoff"])
      assert.ok(choice[key].length > 10);
  }
});
