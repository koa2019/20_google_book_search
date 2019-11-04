import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Form from '../components/Form';
import { List, ListItem } from '../components/List';
import DeleteBtn from '../components/DeleteBtn';


class Books extends Component {

    state = {
        books: [],
        title: ''
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
                        <Form />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <h4>Results</h4>

                        {/* if/else conditional for List */}
                        {this.state.books.length ? (
                            <List>

                                {/* loop through each index in books array */}
                                {this.state.books.map(book => (
                                    <ListItem>
                                        <DeleteBtn />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>0 Results</h3>
                            )}


                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Books;