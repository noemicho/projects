
//mongodb+srv://noemicho:<581fa6d9-18c3-48ce-ade7-4e978da3088e>@cluster0.bynfaw4.mongodb.net/?retryWrites=true&w=majority

import mongoose from 'mongoose'

const dbConfig = 'mongodb+srv://noemicho:EQj9Regtb1pTE1vZ@cluster0.bynfaw4.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'

const connection = mongoose
    .connect(dbConfig)
    .then(() => {
        console.log("Conectado ao MongoDB")
      })
      .catch((err) => {
        console.error("Erro de conexão com o MongoDB: ", err)
        process.exit()
      })

export default connection