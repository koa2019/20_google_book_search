import axios from 'axios';

// export an object with a "search" method that searches the google API for the passed query
// exported different methods requesting & posting new data to mongo database
export default {

    // The getGoogle method retrieves books from the server
    // It accepts a "query" or term to search the book api for
    getGoogle: function (query) {
        return axios.get("/api/googleBooks", { params: { q: query } });
    },
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};