import express from "express"
import CelularController from "./controllers/celularController.js"

const routes = express.Router()

//Rota Celulares
routes.post('/celulares', CelularController.create)
routes.get('/celulares', CelularController.read)

export default routes