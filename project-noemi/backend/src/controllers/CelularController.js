import CelularSchema from "../models/CelularSchema.js"

async function create(request, response) {
    const {marca, modelo, memoria, lançamento} = request.body

    const celularCreated = await CelularSchema.create({
        marca,
        modelo,
        memoria,
        lançamento
    })

    return response.json(celularCreated)
}

async function read(request, response) {
    const celularList = await CelularSchema.find()

    return response.json(celularList)
} 

export default {create, read}