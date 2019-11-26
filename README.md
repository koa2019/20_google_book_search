
# React Google Book Search

Search for any book by it's title via Google Books API. App returns a list of results that match your search query. Click View to see a book on on Google.com or click the Save Button to save it list. 

Checkout which books are saved to your list by clicking the Saved Navbar link. Don't want a book on your saved list anymore? Click the Delete button & POOF it's done.

Enjoy

Heroku link: https://google-books-search-20.herokuapp.com/

## Starting the app locally

npm install
run mongod in separate terminal window
node script/seedDb.js
npm run start

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

