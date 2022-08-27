import express from "express";

const app = express();

app.listen("3333", () => {
    console.log("Server started on port 3333!");
});

// criando um método get
app.get("/users", (request, response) => {
    console.log("Listagem de usuários");

    response.json(["Klysman", "Hataro", "Sakamoto", "Kaguya"]);
});

// criando um método post
app.post("/users", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso!" });
});

// criando um método put
app.put("/users/:id", (request, response) => {
    const { id } = request.params;

    return response.json({ message: `Usuário ${id} atualizado com sucesso!` });
});

// criando um método delete
app.delete("/users/:id", (request, response) => {
    const { id } = request.params;

    return response.json({ message: `Usuário ${id} deletado com sucesso!` });
});
