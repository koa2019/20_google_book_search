import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Books() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Lets Find You Some Books</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default Books;