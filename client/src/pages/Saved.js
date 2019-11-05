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
    title: '',
    author: '',
    description: '',
    image: '',
    link:'',
    loading: false,
    isProblem: false
  }

  componentDidMount() {
    this.loadBooks();

  }

  loadBooks() {
    this.setState({ loading: true, isProblem: false }, () => {
      API.getBooks().then(res => {
        this.setState({ books: res.data, loading: false });
        console.log(this.state.books)
      }).catch(err => {
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
            <h4>Results</h4>

            {/* if/then/else conditional for List. loop through each index in books array */}
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem>
                    <ViewBtn />
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>0 Results</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
