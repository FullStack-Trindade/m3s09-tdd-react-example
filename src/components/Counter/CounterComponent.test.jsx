import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { CounterComponent } from "./CounterComponent";

describe("Suite de testes do CounterComponent", () => {
  beforeEach(() => {
    render(<CounterComponent />);
  });
  it("Componente esta sendo exibido em tela", () => {
    const component = screen.getByTestId("counter-testid");
    expect(component).toBeInTheDocument();
  });
  it("Componente possui botão com o titulo Clique aqui", () => {
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Clique aqui");

    // const button = screen.getByText(/'Clique aqui'/);
    // expect(button).toBeInTheDocument();
  });
  it("Componente inicializa com o valor zero", () => {
    const value = screen.getByTestId("counter-value");
    expect(value).toHaveTextContent("0");
  });

  it("Clique no botão esta alterando contador", () => {
    const button = screen.getByText(/Clique aqui/);
    fireEvent.click(button);
    const value = screen.getByTestId("counter-value");
    expect(value).toHaveTextContent("1");
  });
});
