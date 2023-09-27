import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { FormComponent } from "./FormComponent";

describe("Suite de testes caso formulario seja preenchido corretamente", () => {
  beforeEach(() => {
    render(<FormComponent />);
  });
  it("Formulario esta sendo renderizado em tela", () => {
    const form = screen.getByTestId("form-testid");
    expect(form).toBeInTheDocument();
  });
  it("Formulario possui campo nome", () => {
    const input = screen.getByPlaceholderText("Digite seu nome");
    expect(input).toBeInTheDocument();
  });
  it("Formulario possui campo email", () => {
    const input = screen.getByPlaceholderText("Digite seu email");
    expect(input).toBeInTheDocument();
  });
  it("Formulario possui botão submit", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Envio do formulario sendo feito com sucesso", () => {
    const button = screen.getByText(/Enviar/);
    const inputNome = screen.getByPlaceholderText("Digite seu nome");
    const inputEmail = screen.getByPlaceholderText("Digite seu email");

    fireEvent.input(inputNome, { target: { value: "Teste" } });
    fireEvent.input(inputEmail, { target: { value: "teste@teste.com.br" } });
    fireEvent.click(button);

    expect(button).not.toBeDisabled();

    // const errorMessage = screen.queryByText("Campos não foram preenchidos");
    // expect(errorMessage).not.toBeInTheDocument();
  });
});

describe("Suite de testes caso campos do formulário não sejam preenchidos", () => {
  beforeEach(() => {
    render(<FormComponent />);
  });
  it("Formulario esta sendo renderizado em tela", () => {
    const form = screen.getByTestId("form-testid");
    expect(form).toBeInTheDocument();
  });
  it("Formulario possui campo nome", () => {
    const input = screen.getByPlaceholderText("Digite seu nome");
    expect(input).toBeInTheDocument();
  });
  it("Formulario possui campo email", () => {
    const input = screen.getByPlaceholderText("Digite seu email");
    expect(input).toBeInTheDocument();
  });
  it("Formulario possui botão submit", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Exibe um erro no envio do formulario", () => {
    const errorMessage = screen.getByText("Campos não foram preenchidos");
    expect(errorMessage).toBeInTheDocument();
  });

  it("Exibe um erro no nome pois não foi preenchido", () => {
    const inputEmail = screen.getByPlaceholderText("Digite seu email");
    fireEvent.input(inputEmail, { value: "teste@test.com" });

    const errorMessage = screen.getByText("Campos não foram preenchidos");
    expect(errorMessage).toBeInTheDocument();
  });

  it("Exibe um erro no email pois não foi preenchido", () => {
    const inputNome = screen.getByPlaceholderText("Digite seu nome");
    fireEvent.input(inputNome, { value: "Teste" });

    const errorMessage = screen.getByText("Campos não foram preenchidos");
    expect(errorMessage).toBeInTheDocument();
  });
});
