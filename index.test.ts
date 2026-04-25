import { describe, expect, it } from "bun:test";

import { getRepoName } from "./index";

describe("getRepoName", () => {
  it("returns child-x", () => {
    expect(getRepoName()).toBe("child-x");
  });
});