import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Testing useFetchGifs hook", () => {
  test("should the initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("spinetta")
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should return an images array and the loading value should be false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("spinetta")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
