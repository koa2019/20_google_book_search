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
    this.loadSavedBookList();

  }

  loadSavedBookList() {
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

  deleteBook =(id) => {
    API.deleteBook(id)
    .then(res => this.loadSavedBookList())
    .catch(err => console.log('Err deleting book'))
  }

  render() {
    console.log('render() state ======== ', this.state)
    return (
      <Container>
        <Row>
        <Col size="col-md-12 mx-auto">
            <Jumbotron>
              <h4 className="text-center">Saved Book List</h4>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <Col size="col-md-12 mx-auto">
            <h4 className="text-center">Saved Books</h4>

            {/* if/then/else conditional for List. loop through each index in books array */}
            {!this.state.books.length ? (
              <h3 className="text-center">0 Saved Books</h3>
            ) : (
                <List>
                  {this.state.books.map(book => {
                    return (
                      <ListItem key={book._id}>
                        <img src={book.image} alt={"book thumbnail"} />
                        <h4>Title: {book.title}</h4>
                        <h5>Authors:</h5>
                        <p>{book.authors}</p>
                        <h5>Description: </h5>
                        <p>{book.description}</p>
                        <ViewBtn id={book.bookid} /> 
                        <DeleteBtn onClick={() => this.deleteBook(book._id)}/>
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
