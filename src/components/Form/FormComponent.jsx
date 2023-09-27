import { useState } from "react";

export const FormComponent = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleInput = ({ target }) => {
    const { value, name } = target;
    setData({ ...data, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={submit} data-testid="form-testid">
      <input
        type="text"
        onChange={handleInput}
        placeholder="Digite seu nome"
        name="name"
      />
      <input
        type="email"
        onChange={handleInput}
        placeholder="Digite seu email"
        name="email"
      />
      <button type="submit" disabled={!data.email.length || !data.name.length}>
        Enviar
      </button>

      {(!data.email.length || !data.name.length) && (
        <p>Campos não foram preenchidos</p>
      )}
    </form>
  );
};
