import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Configura o middleware para permitir que a aplicação receba dados no formato JSON
    app.use(express.json());
    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
}

export default routes;
