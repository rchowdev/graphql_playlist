import {gql} from "apollo-boost";

//Get All Books Information
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
//Get Single Book Information
const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
export {getAuthorsQuery, getBookQuery, getBooksQuery, addBookMutation};
