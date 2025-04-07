import express, { response } from 'express'
//sempre tem que armazenar em uma variavel quando baixar um "modulo"

const app = express()

app.use(express.json())

//Requisao a API
//1 Metodos
//1.1 GET -> Buscar recurso/dados
//1.2 POST -> Cadastrar recursos/dados
//1.3 PUT -> Atualiza recurso/dados
//1.4 PATCH ->  Atualiza UM DADO
//1.5 DELETE -> Deleta um recurso/dados

//2. Formas de fazer requisição
//2.1 -> Query Params -> /projetos?nome=web&author=Caio
//2.1.1 - Metodo HTTP GET
//2.2 -> Route params -> /projeto/10
//2.2.1 - Metodo HTTP GET, PUT, PATCH, DELETE
//2.3 -> Body params -> {nome='Carlos', idade=33}
//2.3.1 - Metodo HTTP POST, PUT, PATCH
//3. RESPOSTA HTTP CODE

// :3333/projetos?nome=node&author=caio

app.get(`/characteres/`, (req, res) => {
    const { id, name, race, ki, maxKi, gender } = req.query
    console.log(id, name, race, ki, maxKi, gender)
    res.status(200).json(id, name, race, ki, maxKi, gender) //faz a requisção!!
})
//Body params - 3333/projetos
// app.post('/projetos', (req, res) => {
//     const { nome, autor, info } = req.body
//     console.log(nome, autor, info)
//     res.status(201).json(['Projeto 1', 'Projeto 2', 'Projeto 3']) // Adiciona mais um projeto, "posta"
// })
// app.put('/projetos', (req, res) => {
//     res.status(200).json(['Projeto 88', 'Projeto2', 'Projeto 3']) // <- Exemplos, o projeto 1 atualizou para o 88
// })
// //Route PARAMS = 3333/projetos/10
// app.delete('/projetos/:id', (req, res) => {
//     const { id } = req.params
//     console.log(id)
//     res.status(201).json(['Projeto 2', 'Projeto 3']) //Deletou o projeto 88
// })

app.listen(3333, () => {
    console.log('Servidor iniciado em http://localhost:3333')
})

