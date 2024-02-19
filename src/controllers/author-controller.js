import { author } from "../models/Author.js"

export class AuthorController {

    static async getAll(req, res) {
        try {
            const authors = await author.find({});
            res.status(200).json(authors);
        } catch(err) {
            console.error(err)
            res.status(500).json({
                message: "Server failed to fetch all Authors."
            });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params
            const author = await author.findById(id);
            res.status(200).json(author);
        } catch(err) {
            console.error(err)
            res.status(500).json({
                message: "Server failed to fetch an Author."
            });
        }
    }

    static async create(req, res) {
        try {
            await author.create(req.body);
            res.status(201).end();
        } catch(err) {
            console.error(err)
            res.status(500).json({
                message: "Server failed to create a new Author."
            })
        } 
    }

    static async update(req, res) {
        try {
            const { id } = req.params
            await author.findByIdAndUpdate(id, req.body);
            res.status(204).end();
        } catch(err) {
            console.error(err)
            res.status(500).json({
                message: "Server failed to update an Author."
            });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params
            await author.findByIdAndDelete(id);
            res.status(204).end();
        } catch(err) {
            console.error(err)
            res.status(500).json({
                message: "Server failed to delete an Author."
            });
        }
    }
}
