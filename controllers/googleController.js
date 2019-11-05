const axios = require('axios');

const BASEURL = 'https://www.googleapis.com/books/v1/volumes/?q=';
// const APIKEY = '&key=' + process.env.APIKEY;
const limit = '&limit=10';

// Export an object with a "search" method that searches the Giphy API for the passed query
module.export = {
    getGoogle: function (query) {
        let url = BASEURL + query + limit;
        console.log(query);

        axios.get(url, { params: req.query })
            .then(({ data: { booksResults } }) => {
                console.log(booksResults)
                res.json(booksResults)
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            })
    }
};