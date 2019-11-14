// dependencies
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class UserProfile extends Component {

    render() {
        return (

            <Container>
                <Jumbotron>
                    <h1>Left Right Match</h1>
                </Jumbotron>
                <Row>
                    <Col size="sm-12">
                        <div className="card">
                            <div className="card-header"><h1>User Name</h1></div>
                            <div className="card-body">
                                <p>insert profile image here</p>
                                <p>* User details</p>
                                <p>* Match Results</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UserProfile;