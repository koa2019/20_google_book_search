import axios from 'axios';

// export an object with a "search" method that searches the google API for the passed query
// exported different methods requesting & posting new data to mongo database
export default {

    // The getGoogle method retrieves books from google API
    // It accepts a query str from frontend to search google book api for
    getGoogle: function (query) {
        return axios.get(`/api/googleBooks/${query}`);
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