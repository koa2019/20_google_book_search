import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Form from '../components/Form';
import { List, ListItem } from '../components/List';
import DeleteBtn from '../components/DeleteBtn';
import SaveBtn from '../components/SaveBtn';
import API from '../utils/API';


class Books extends Component {

    state = {
        gBooks: [],
        googleQuery: '',
        loading: false,
        isProblem: false
    }

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    loadGoogleBooks() {
        this.setState({ loading: true, isProblem: false }, () => {
            console.log(this.state.googleQuery)
            API.getGoogle(this.state.googleQuery)
                .then(res => {
                    this.setState({ gBooks: res.data });
                    console.log(this.state.gBooks)
                })
                .catch(err => {
                    console.log(err)
                    this.setState({ loading: false, isProblem: true });
                });
        });
    }

    handleInputChange() {

    }

    handleSubmit(queryStr) {
        console.log('Ive been called', queryStr);
        // console.log(this.state.gBooks)
        this.setState({ googleQuery: queryStr.searchWord }, () => {
            this.loadGoogleBooks();
        })

    }

    render() {
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
                        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                        {/* <form onSubmit={this.handleSubmit}> */}

                        {/* include validation with required or other standard HTML validation rules */}
                        {/* <input name="searchWord" placeholder='Book title' value={this.state.googleQuery} onChange={this.handleInputChange} />
                            <button type="submit">Submit</button>
                        </form> */}
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
                                            <ListItem key={book.items.id}>
                                                <h4>Title: {book.items.volumeInfo.title}</h4>
                                                <h5>Authors:</h5>
                                                <p>{book.items.volumeInfo.authors}</p>
                                                <h5>Description: </h5>
                                                <p>{book.items.volumeInfo.authors.description}</p>
                                                <SaveBtn /> <DeleteBtn />
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