const express = require("express")
const routes = express.Router();

const MultasController = require("./controllers/MultasController")

routes.get("/multas", MultasController.index)
routes.post("/multas", MultasController.store)
routes.get("/multas/:id", MultasController.show)
routes.put("/multas/:id", MultasController.update)
routes.delete("/multas/:id", MultasController.destroy)

module.exports = routes