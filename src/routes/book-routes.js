import express from "express"
import { BookController } from "../controllers/book-controller.js"

export const booksRoutes = express.Router();

booksRoutes.get("/books", BookController.getAll)
booksRoutes.get("/books/search", BookController.getByPublisher)
booksRoutes.get("/books/:id", BookController.getById)
booksRoutes.post("/books", BookController.create)
booksRoutes.put("/books/:id", BookController.update)
booksRoutes.delete("/books/:id", BookController.delete)
