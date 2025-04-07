import express, { response } from 'express'
//sempre tem que armazenar em uma variavel quando baixar um "modulo"

const app = express()
app.use(express.json())


app.get(`/characteres/`, (req, res) => {
    const { id, name, race, ki, maxKi, gender } = req.query
    console.log(id, name, race, ki, maxKi, gender)
    res.status(200).json(id, name, race, ki, maxKi, gender) //faz a requisção!!
})

app.listen(3333, () => {
    console.log('Servidor iniciado em http://localhost:3333')
})

