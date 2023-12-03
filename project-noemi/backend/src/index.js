import express from 'express'
const app = express()
const port = 3333

import routes from '../src/routes.js'
import '../src/config/dbConfig.js'
import cors from 'cors'

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(routes)



app.listen(port, () => {
    console.log(`Back inicializado e escutando a porta ${port}`);
  });
  