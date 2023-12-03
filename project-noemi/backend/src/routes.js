import express from "express"
import CelularController from "../src/controllers/CelularController.js"


const routes = express.Router()

//Rota Celulares
routes.post('/home/celulares', CelularController.create)
routes.get('/home/celulares', CelularController.read)
routes.delete('/home/celulares/:id', CelularController.deletePhone)
routes.patch('/home/celulares/:id', CelularController.update)

export default routes