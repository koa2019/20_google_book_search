const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookid: { type: String, required: true },
    title: { type: String, required: true },
    authors: { type: String, required: true },
    link: String,
    description: String,
    image: String,
    saved: String,
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
