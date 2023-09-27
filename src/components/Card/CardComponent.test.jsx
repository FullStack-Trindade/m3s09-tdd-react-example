import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CardComponent } from "./CardComponent";
import { beforeEach, describe, expect, it } from "vitest";

describe("Suite de testes no caso de sucesso", () => {
  beforeEach(() => {
    render(<CardComponent />);
  });

  it("Componente esta sendo renderizado na tela", () => {
    const component = screen.getByTestId("card-testid");
    expect(component).toBeInTheDocument();
  });

  it("Esta redirecionando para o GitHub", () => {
    const githubLink = screen.getByTestId("github-link");
    expect(githubLink).toHaveAttribute("href", "https://github.com");
  });

  it("Esta redirecionando para o Linkedin", () => {
    const linkedinLink = screen.getByTestId("linkedin-link");
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com");
  });

  it("Esta exibindo o titulo do card correto", () => {
    const titulo = screen.getByText(/Robert Santos/);
    expect(titulo).toBeInTheDocument();
  });

  /** Para pular um teste */
  it.skip("Botão esta habilitado", () => {
    const button = screen.getByText("Adicionar");
    expect(button).not.toHaveAttribute("disabled");
  });
});
