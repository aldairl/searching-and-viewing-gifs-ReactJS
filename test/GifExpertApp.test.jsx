import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Test in <GifExpertApp.jsx/>", () => {
  test("should match the snapshop", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });
});
