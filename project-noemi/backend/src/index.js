import express from 'express'
const app = express()
const port = 3333

import '../src/config/dbConfig.js'

app.use(express.json())

app.get('/', (request, response) => {
    return response.json({
        ano:2023
    })
})

app.listen(port, () => {
    console.log(`Back inicializado e escutando a porta ${port}`);
  });
  