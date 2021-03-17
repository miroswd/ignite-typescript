# TypeScript - Nodejs

Node não interpreta ts, por isso devemos transpilar pra js

```shell
yarn add typescript -D
yarn tsc --init # inicializa o ts, para criar as configs
# outDir - definimos uma pasta para onde os js serão armazenados
yarn tsc # toda vez q alterar o arquivo, precisa rodar o tsc
```

### Instalando ferramenta para transpilar ao salvar o arquivo

```shell
yarn add ts-node-dev -D
```

### no package.json

```json
"scripts": {
    "dev":"ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  }
```

- transpile-only: não exibe erros ao desenvolver o código, somente no build pra prod
- ignore-watch node_modules: não verifica as alterações na node_modules
- respawn: sempre é feito o reload ao alterar o código