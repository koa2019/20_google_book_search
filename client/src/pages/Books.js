import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import Form from '../components/Form';
import { List, ListItem } from '../components/List';
import SaveBtn from '../components/SaveBtn';
import API from '../utils/API';
import ViewBtn from "../components/ViewBtn";


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gBooks: [],
            googleQuery: '',
            loading: false,
            isProblem: false
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    loadGoogleBooks() {
        this.setState({ loading: true, isProblem: false }, () => {
            // console.log(this.state.googleQuery)
            API.getGoogle(this.state.googleQuery)
                .then(res => {
                    // console.log('res ', res.data)
                    this.setState({ gBooks: res.data });
                    // console.log(this.state.gBooks)
                })
                .catch(err => {
                    console.log(err)
                    this.setState({ loading: false, isProblem: true });
                });
        });
    }

    saveBook(googleBook) {
        // console.log("saveBook firing ", googleBook)
        const saveJasonBookData = {
            bookid: googleBook.id,
            title: googleBook.volumeInfo.title,
            authors: googleBook.volumeInfo.publisher,
            link: googleBook.volumeInfo.previewLink,
            description: googleBook.volumeInfo.description,
            image: googleBook.volumeInfo.imageLinks.thumbnail,
            saved: true
          };
          console.log('saveBook variable ', saveJasonBookData)
          API.saveBook(saveJasonBookData)
          .then(res => {
              console.log('API.saveBook promise> res', res)
          })
          .catch(err => {
              console.log(err)
          })
    }

    
    handleSubmit = queryStr => {

        console.log('handleSubmit() queryStr ', queryStr);

        this.setState({ googleQuery: queryStr.searchWord }, () => {
            console.log('handleSubmit .setState googleQuery ')

            // function called to set/save google search results to gBooks
            this.loadGoogleBooks();
        })

    }

    render() {
        console.log('inside render() this.state ', this.state)
        return (
            <Container>
                <Row>
                <Col size="col-md-12 mx-auto">
                        <Jumbotron>
                            <h1>React Google Books Search</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                <Col size="col-md-12 mx-auto text-center">
                        <h4>Book Search</h4>
                        <Form onSubmit={this.handleSubmit} />
                    </Col>
                </Row>
                <Row>

                <Col size="col-md-12 mx-auto">
                        <h4 className="text-center">Search Results</h4>

                        {/* Ternary if/then/else conditional for List. loop through each index in books array */}
                        {!this.state.gBooks.length ? (
                            <h3 className="text-center">Start Searching for Your Next Book</h3>
                        ) : (
                                <List>
                                    {this.state.gBooks.map(book => {
                                        return (
                                            <ListItem key={book.id}>
                                                <h4>Title: {book.volumeInfo.title}</h4>
                                                <h5>Authors:</h5>
                                                <p>{book.volumeInfo.authors}</p>
                                                <h5>Description: </h5>
                                                <p>{book.volumeInfo.description}</p>
                                                <ViewBtn link={"https://books.google.com/books?id=" + book.id}/>
                                                <SaveBtn onClick={()=>this.saveBook(book)}/> 
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            )}
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Books;