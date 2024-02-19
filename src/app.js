import express from "express"
import { dbConnect } from "./lib/mongoose.js"
import { routes } from "./routes/index.js"

const connection = await dbConnect()

connection.on("error", (err) => {
    console.error(err);
})

connection.once("open", () => {
    console.log("Connection started...");
})

export const app = express();
routes(app);


// app.delete('/books/:id', (req, res) => {
//     const { id } = req.params
//     const index = id - 1;
//     books.splice(index, 1)

//     res.status(204).end()
// })
