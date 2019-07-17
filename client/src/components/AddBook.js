import React, {Component} from "react";
import {gql} from "apollo-boost";
import {graphql} from "react-apollo";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
  displayAuthors() {
    const {data} = this.props;
    return data.loading ? (
      <option disabled>Loading Authors... </option>
    ) : (
      data.authors.map(author => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ))
    );
  }

  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label>Book Name:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select Author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
