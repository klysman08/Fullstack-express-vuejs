# Configurações iniciais para backend com Express

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
npm install uuid
npm install @types/uuid -D
```

```bash
 npm run dev
```
