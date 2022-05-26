import express from "express";
import cors from "cors";
import books from "./books.js";

const app = express(); // instanciranje aplikacije
const port = 8080; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

app.get("/books", (req, res) => res.send(books));

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
