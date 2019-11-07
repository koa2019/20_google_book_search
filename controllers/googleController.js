const axios = require('axios');

// Export an object with a "search" method that searches the Giphy API for the passed query
module.exports = {
    getGoogle: function (req, res) {

        // let query = req.params;
        // const BASEURL = 'https://www.googleapis.com/books/v1/volumes/?q=';
        // const APIKEY = '&key=' + process.env.APIKEY;
        // let url = BASEURL + query + APIKEY;
        // console.log(query);

        let search = req.params.query;
        console.log(search)
        let url = "https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=" + process.env.APIKEY;
        console.log(url);

        axios.get(url)
            .then(booksResults => {
                console.log(booksResults)
                res.json(booksResults)
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(422);
            })
    }
};