import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Test in useFetchGifs hook", () => {
  const category = "31 minutos";
  test("should return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs(category));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return the gifs array and set isLoading to false", async () => {
    const { result } = renderHook(() => useFetchGifs(category));
    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
