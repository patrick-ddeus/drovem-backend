import express from "express";
import cors from "cors";
import "dotenv/config";
import IndexRouter from "./routes/index.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(IndexRouter)

const porta = process.env.PORT || 5000;

app.listen(porta, () => console.log(`
    🚀 Servidor iniciado na porta ${porta}
`));
