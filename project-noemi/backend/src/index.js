const express = require('express')
const app = express()
const port = 3333

app.use(express.json())

app.get('/', (request, response) => {
    return response.json({
        ano:2023
    })
})

app.listen(port)