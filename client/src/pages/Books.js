import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Form from '../components/Form';
import { List, ListItem } from '../components/List';


function Books() {
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
                <Form/>
            </Col>
            </Row>
            <Row>
            <Col size="md-12">
                <h4>Results</h4>
                <List>
                    <ListItem>

                    </ListItem>
                </List>
            </Col>
            </Row>
        </Container>
    );
}

export default Books;