import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategry } from "../../src/components/AddCategry";

describe("Tests in <AddCategry/>", () => {
  const inputText = "kaiosama";
  test("should change the input text", () => {
    render(<AddCategry onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputText } });

    expect(input.value).toBe(inputText);
  });

  test("should execute onNewCategory() if ipunt has a valid value", () => {
    const onNewCategory = jest.fn();

    render(<AddCategry onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputText } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputText);
  });

  test('should not execute onNewCategory if input text is empty', ()=>{
    const onNewCategory = jest.fn()
    const inputTextValue = ''
    render( <AddCategry onNewCategory={onNewCategory} /> )
    const input = screen.getByRole('textbox')

    fireEvent.input( input, { target: {value: inputTextValue} } )
    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect( onNewCategory ).not.toHaveBeenCalled()

  })
});
