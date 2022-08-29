# Backend com Express

```bash
npm init -y
```

```bash
npm install typescript ts-node-dev -D
```

configurar o packege.json com o seguinte comando:

```bash
"dev": "ts-node-dev --quiet --clear ./src/server.ts"
```

criar arquivo de configuracao do typescript

```bash
npx tsc --init

ativar os recursos:
"rootDir": "./",
"outDir": "./"
```

microframework backend utilizando node

```bash
npm install express
npm install @types/express
```

para iniciar o servidor na porta 3333

```bash

const app = express();

app.listen("3333", () => {
    console.log("Server started on port 3333!");
});

```

```bash
Pacotes:
npm install:

uuid -> gerar ids unicos para cadastro de objetos
@types/uuid -D -> para types em TS
cors  -> permite a comunicação do backend e frontend no localhost
@types/cors  -> para types em TS
```

```bash
 npm run dev
```

# Frontend com Vue.js

## Packages

```
normalize.css
axios
```

## Project setup

```
npm install


```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
