import mongoose from "mongoose"

const celularSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    memoria: String,
    lançamento: String
})

export default mongoose.model('Celular', celularSchema)