#Configurações iniciais para backend com Express

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

```bash
microframework backend utilizando node
npm install express

necessario para o typescript instalado
npm install @types/express
```
