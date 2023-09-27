## Testes Unitarios (UNIT)

- Testam a menor unidade do codigo

## Teste Integação

- E quando se faz o teste integrado entre componentes ou funções

## Teste Ponta a Ponta (E2E)

- Que simula ações do usuário

## Nomenclatura dos arquivos de testes

`*.spec.js`
<br>
`*.test.js`

## Instalando as dependencias para testes

`npm install vitest @testing-library/jest-dom @testing-library/react @testing-library/user-event jsdom -D`

## Configuração de testes com vitest

Acessar o arquivo `vite.config.js` e alterar para o sesguinte codigo:

```
/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
```
