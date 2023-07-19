import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Tests in <GifGrid/>", () => {
  const category = "Dragon ball";
  test("should display Cargando... message", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("should display items after useFetchGifs is execute", () => {
    const gifs = [
      {
        id: "abc",
        title: "Goku",
        url: "http://localhost/goku.jpg",
      },
      {
        id: "drf",
        title: "kaiosama",
        url: "http://localhost/kaiosama.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
