import express from "express"
import celularController from "./controllers/celularController.js"

const routes = express.Router()

//Rota Celulares
routes.get('/celulares', celularController.create)

export default routes