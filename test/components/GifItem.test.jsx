const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe("Test in GifItem", () => {
  const title = "title item";
  const url =
    "https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ";
  test("should match the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("should be display the title", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should display an image with url and alt especified", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug()
    // expect(screen.getByRole('img').src).toBe(url)

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
});
