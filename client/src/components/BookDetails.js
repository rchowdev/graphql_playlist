import React, {Component} from "react";
import {graphql} from "react-apollo";
import {getBookQuery} from "../queries/queries";

class BookDetails extends Component {
  displayBookDetails = () => {
    const {book} = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <h3>Other books by {book.author.name}:</h3>
          <ul className="other-books">
            {book.author.books.map(book => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>Select a book from the list</div>;
    }
  };

  render() {
    return <div id="book-details">{this.displayBookDetails()}</div>;
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
