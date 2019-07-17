import React, {Component} from "react";
import {graphql, compose} from "react-apollo";
import {getAuthorsQuery, addBookMutation} from "../queries/queries";

class AddBook extends Component {
  state = {
    name: "",
    genre: "",
    authorId: ""
  };

  displayAuthors = () => {
    const data = this.props.getAuthorsQuery;
    return data.loading ? (
      <option disabled>Loading Authors... </option>
    ) : (
      data.authors.map(author => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ))
    );
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const {name, genre, authorId} = this.state;
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={this.handleChange}
          />
        </div>

        <div className="field">
          <label>Author:</label>
          <select name="authorId" value={authorId} onChange={this.handleChange}>
            <option>Select Author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
  graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);
