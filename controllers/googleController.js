import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books/v1/volumes/?q=';
// const APIKEY = '&key=' + process.env.APIKEY;
const limit = '&limit=10';

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    findBooks: function(query) {
        let url = BASEURL + query + limit;
        console.log(url);
        return axios.get(url);
    }
};