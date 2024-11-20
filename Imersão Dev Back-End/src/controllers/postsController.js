import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função para obter todos os posts do banco de dados
    const posts = await getTodosPosts();
    // Envia uma resposta com status 200 (sucesso) e os posts no formato JSON
    res.status(200).json(posts);
}


