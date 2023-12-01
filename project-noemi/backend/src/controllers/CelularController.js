import CelularSchema from "../models/CelularSchema.js"

async function create(request, response) {
    const {marca, modelo, memoria, lançamento} = request.body

    console.log(marca)
    console.log(modelo)
    console.log(memoria)
    console.log(lançamento)
}

export default {create}