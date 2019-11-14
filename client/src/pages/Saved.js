import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from '../components/List';
import DeleteBtn from '../components/DeleteBtn';
import ViewBtn from '../components/ViewBtn';
import API from '../utils/API';

class Saved extends Component {

  state = {
    books: [],
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


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Book List</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h4>Saved Books</h4>

            {/* if/then/else conditional for List. loop through each index in books array */}
            {!this.state.books.length ? (
              <h3>0 Results</h3>
            ) : (
                <List>
                  {this.state.books.map(book => {
                    return (
                      <ListItem key={book._id}>
                        <h4>Title: {book.title}</h4>
                        <h5>Authors:</h5>
                        <p>{book.author}</p>
                        <h5>Description: </h5>
                        <p>{book.synopsis}</p>
                        <ViewBtn /> <DeleteBtn />
                      </ListItem>
                    );
                  })}
                </List>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
