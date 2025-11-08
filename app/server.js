import express from "express";
import cors  from "cors";

// minhas rotas
import clientesRouter from "./src/routes/clientes.route.js";
import veiculosRouter from "./src/routes/veiculos.route.js";
// -------------------

const app = express();

app.use(clientesRouter);
app.use(veiculosRouter);

app.use(cors());

// dizendo pro express que vamos trabalhar json
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Servidor Node.js rodando através do Nginx!");
});

app.listen(3000, () => {
  console.log("Servidor Node rodando na porta 3000");
});

