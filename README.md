# TypeScript - Nodejs

Node não interpreta ts, por isso devemos transpilar pra js

```shell
yarn add typescript -D
yarn tsc --init # inicializa o ts, para criar as configs
# outDir - definimos uma pasta para onde os js serão armazenados
yarn tsc # toda vez q alterar o arquivo, precisa rodar o tsc
```