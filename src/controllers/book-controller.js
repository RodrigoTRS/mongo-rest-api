import { author } from "../models/Author.js";
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

    static async getByPublisher(req, res) {
        try {
            const { publisher } = req.query
            const booksByPublisher = await book.find({ publisher })
            res.status(200).json(booksByPublisher)
        } catch(err) {
            console.error(err)
            res.status(500).json({
                message: "Server failed to fetch a Book."
            });
        }
    }

    static async create(req, res) {
        const newBook = req.body;
        try {
            const findAuthor = await author.findById(newBook.author)
            const completeBook = {...newBook, author: {...findAuthor._doc}}
            await book.create(completeBook);
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
