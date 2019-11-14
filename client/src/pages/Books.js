import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Form from '../components/Form';
import { List, ListItem } from '../components/List';
import DeleteBtn from '../components/DeleteBtn';
import SaveBtn from '../components/SaveBtn';
import API from '../utils/API';


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
            console.log(this.state.googleQuery)
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
        console.log("saveBook firing ", googleBook)
        const saveJasonBookData = {
            bookid: googleBook.id,
            title: googleBook.volumeInfo.title,
            author: googleBook.volumeInfo.publisher,
            previewlink: googleBook.volumeInfo.previewLink,
            description: googleBook.volumeInfo.description,
            saved: true
          };
          console.log('saveJason ', saveJasonBookData)
          API.saveBook(saveJasonBookData)
        //   .then(res => {
        //       console.log('res', res)
        //   })
        //   .catch(err => {
        //       console.log(err)
        //   })
    }

    handleSubmit = queryStr =>{
        console.log('Ive been called', queryStr);
        // console.log(this.state.gBooks)
        this.setState({ googleQuery: queryStr.searchWord }, () => {
            this.loadGoogleBooks();
        })

    }

    render() {
        console.log('render ', this.state)
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>React Google Books Search</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <h4>Book Search</h4>
                        <Form onSubmit={this.handleSubmit} name1={'hello'} />
                    </Col>
                </Row>
                <Row>

                    <Col size="md-12">
                        <h4>Results</h4>

                        {/* if/then/else conditional for List. loop through each index in books array */}
                        {!this.state.gBooks.length ? (
                            <h3>Uh-Oh No Books Found. Try Again</h3>
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
                                                <SaveBtn onClick={()=>this.saveBook(book)}/> <DeleteBtn />
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