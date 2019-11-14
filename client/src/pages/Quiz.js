// dependencies
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Quiz extends Component {

    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="sm-12">
                <Jumbotron>
                  <h1>Which Political Candidate Are You Most Like?</h1>
                </Jumbotron>
                {/* if/then/else conditional for List. loop through each index in questions array */}
                {/* {!this.state.questions.length ? (
                  <h3>Uh-Oh Error Loading Questions</h3>
                ) : (
                    <List>
                      {this.state.questions.map(question => {
                        return (
                          <ListItem key={question.id}>
                            <h4>{question.name}</h4>
                            <p>{question.qq}</p> */}
                            {/* <SaveBtn /> <DeleteBtn /> */}
                          {/* </ListItem>
                        );
                      })}
                    </List>
                  )} */}
              </Col>
            </Row>
          </Container>
        );
      }
    }
    
    export default Quiz;