import React, {Component} from "react";
import {graphql} from "react-apollo";
import {getBooksQuery} from "../queries/queries";

//Components
import BookDetails from "./BookDetails";

class BookList extends Component {
  state = {
    selectedBook: null
  };

  displayBooks = () => {
    const {data} = this.props;
    return data.loading ? (
      <div>Loading...</div>
    ) : (
      data.books.map(book => (
        <li key={book.id} onClick={e => this.setState({selectedBook: book.id})}>
          {book.name}
        </li>
      ))
    );
  };

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selectedBook} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
