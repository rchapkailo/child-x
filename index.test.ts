import { describe, expect, it } from "bun:test";

import { getRepoInfo } from "./index";

describe("getRepoInfo", () => {
  it("returns repo info for child-x", () => {
    const info = getRepoInfo();
    expect(info.name).toBe("child-x");
    expect(info.deps).toEqual(["@rchapkailo/shared"]);
  });
});