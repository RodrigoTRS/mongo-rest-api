import express from "express"
import { AuthorController } from "../controllers/author-controller.js";


export const authorRoutes = express.Router();

authorRoutes.get("/authors", AuthorController.getAll)
authorRoutes.post("/authors", AuthorController.create)
authorRoutes.get("/authors/:id", AuthorController.getById)
authorRoutes.put("/authors/:id", AuthorController.update)
authorRoutes.delete("/authors/:id", AuthorController.delete)
