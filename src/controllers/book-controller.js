import { book } from "../models/Book.js"

export class BookController {

    static async getAll(req, res) {
        try {
            const books = await book.find({});
            res.status(200).json(books);
        } catch(err) {
            console.error(err)
            res.status(500).json({
                message: "Server failed to fetch all Books."
            });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params
            const book = await book.findById(id);
            res.status(200).json(book);
        } catch(err) {
            console.error(err)
            res.status(500).json({
                message: "Server failed to fetch a Book."
            });
        }
    }

    static async create(req, res) {
        try {
            await book.create(req.body);
            res.status(201).end();
        } catch(err) {
            console.error(err)
            res.status(500).json({
                message: "Server failed to create a new Book."
            })
        } 
    }

    static async update(req, res) {
        try {
            const { id } = req.params
            await book.findByIdAndUpdate(id, req.body);
            res.status(204).end();
        } catch(err) {
            console.error(err)
            res.status(500).json({
                message: "Server failed to update a Book."
            });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params
            await book.findByIdAndDelete(id);
            res.status(204).end();
        } catch(err) {
            console.error(err)
            res.status(500).json({
                message: "Server failed to delete a Book."
            });
        }
    }
}
