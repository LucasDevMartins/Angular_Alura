import conectarAoBanco from '../config/dbConfig.js'

// Estabelece a conexão com o banco de dados MongoDB usando a string de conexão fornecida pela variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Seleciona o banco de dados específico "imersao-instabytes"
export default async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes")

    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts")

    // Retorna todos os documentos (posts) da coleção como um array de objetos
    return colecao.find().toArray()
}