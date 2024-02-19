import express from "express"
import { booksRoutes } from "./book-routes.js"
import { authorRoutes } from "./author-routes.js";

export const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Node Courese"));

    
    app.use(
        express.json(),
        booksRoutes,
        authorRoutes
    );
}
