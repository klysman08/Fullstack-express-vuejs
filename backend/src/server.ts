import express from "express";
import { v4 as uuid } from "uuid";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // Permite consultas de diferentes dominios

app.listen("3333", () => {
    console.log("Server started on port 3333!");
});

/* tipos de parâmetros */
// Query params: para filtros em informações
// Route params: para identificar recursos (atualizar/deletar)
// Body: para criar ou editar informações nas requisições sem necessidade de alterar a url

/* [
    "Klysman",
    "Hataro",
    "Sakamoto",
    "Kaguya",
    "Hizuru",
    "Ushio",
    "Mio",
] */
interface User {
    id: string;
    name: string;
    email: string;
}

const users: User[] = [
    {
        id: uuid(),
        name: "Klysman",
        email: "klsyamn",
    },
];

// criando um método get
app.get("/users", (request, response) => {
    console.log("Listagem de usuários");
    response.json(users);
});

// criando um método post
app.post("/users", (request, response) => {
    // recebendo os dados do usuário
    const { name, email } = request.body;
    const user = { id: uuid(), name, email };
    // salvando os dados do usuário na base de dados
    users.push(user);
    // retornando os dados do usuário
    return response.json(user);
});

// criando um método put
app.put("/users/:id", (request, response) => {
    // recebendo os dados do usuário
    const { id } = request.params;
    const { name, email } = request.body;
    // buscando o usuário na base de dados
    const userIndex = users.findIndex((user) => user.id === id);
    // se o usuário não existir, retornar erro
    if (userIndex < 0) {
        return response.status(404).json({ error: "User not found!" });
    }
    // atualizando os dados do usuário
    users[userIndex] = { id, name, email };
    // retornando os dados do usuário
    return response.json(users[userIndex]);
});

// criando um método delete
app.delete("/users/:id", (request, response) => {
    // recebendo os dados do usuário
    const { id } = request.params;
    // localizando o usuário na base de dados
    const userIndex = users.findIndex((user) => user.id === id);
    // se o usuário não existir, retornar erro
    if (userIndex < 0) {
        return response.status(404).json({ error: "User not found!" });
    }
    // removendo o usuário da base de dados
    users.splice(userIndex, 1);
    // retornando uma mensagem de sucesso
    return response.status(204).send();
});
