import React, { Component } from "react";
import useForm from "react-hook-form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import Form from '../components/Form';
import { List, ListItem } from '../components/List';
import DeleteBtn from '../components/DeleteBtn';
import API from '../utils/API';


class Books extends Component {



    state = {
        books: [],
        googleSearch: '',
        loading: false,
        isProblem: false
    }

    componentDidMount() {
        this.loadThis();

    }

    loadThis() {
        this.setState({ loading: true, isProblem: false }, () => {
            API.getBooks(this.state.books)
                .then(res => {
                    this.setState({ books: res.data, loading: false });
                    console.log(this.state.books)
                })
                .catch(err => {
                    console.log(err)
                    this.setState({ loading: false, isProblem: true });
                });
        });
    }

    loadGoogleBooks() {
            API.getGoogle(this.state.googleSearch)
                .then(res => {
                    this.setState({ books: res.data });
                    console.log(this.state.books)
                })
                .catch(err => {
                    console.log(err)
                    this.setState({ loading: false, isProblem: true });
                });
    }

    handleChange() {

    }

    handleSubmit(event) {
        event.preventDefault();
        this.loadGoogleBooks();
        console.log(this.state.books)

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
                        {/* <Form /> */}
                        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                        <form onSubmit={this.handleSubmit}>

                            {/* include validation with required or other standard HTML validation rules */}
                            <input name="searchWord" placeholder='Book title' value={this.state.googleSearch} onChange={this.handleChange} />

                            <button type="submit">Submit</button>
                        </form>
                    </Col>
                </Row>
                <Row>

                    <Col size="md-12">
                        <h4>Results</h4>

                        {/* if/then/else conditional for List. loop through each index in books array */}
                        {/* {!this.state.books.length ? (
                            <h3>0 Results</h3>
                        ) : (
                                <List>
                                    {this.state.books.map(book => {
                                        return (
                                            <ListItem>
                                                <DeleteBtn />
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            )} */}
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Books;