import CelularSchema from "../models/CelularSchema.js"

async function create(request, response) {
    const {marca, modelo, memoria, lançamento} = request.body

    if(!marca || !modelo || !memoria || !lançamento){
        return response.status(400).json({error: 'preencha tudo'})
    }

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

async function deletePhone(request, response){
    const {id} = request.params

    const celularDeleted = await CelularSchema.findOneAndDelete({_id: id})

    if(celularDeleted){
        return response.json(celularDeleted)
    }
    return response.status(401).json({error: 'não foi encontrado o celular com esse id'})
}

async function update(request, response){
    const {id} = request.params
    const {marca} = request.body
    const {modelo} = request.body
    const {memoria} = request.body
    const {lançamento} = request.body

    const celular = await CelularSchema.findOne({_id: id})

    if(celular.marca || celular.modelo || celular.memoria || celular.lançamento){
        celular.marca = marca
        celular.modelo = modelo
        celular.memoria = memoria
        celular.lançamento = lançamento
        await celular.save()
    }
    return response.json(celular)
}

export default {create, read, deletePhone, update}