import { getGifs } from "../../helpers/getGifs";

describe("Test with getGifs fetch", () => {
  test("should get ten elements", async () => {
    const gifs = await getGifs("spinetta");
    expect(gifs.length).toBe(10);
  });
  test("should get zero elements", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
