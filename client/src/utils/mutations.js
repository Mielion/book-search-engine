import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          link
          title
          image
          description
          bookId
          authors
        }
      }
    }
  }
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      bookCount
      username
      email
      savedBooks {
        bookId
        description
        image
        link
      }
    }
  }
}
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($book: BookInput) {
    saveBook(book: $book) {
      _id
      bookCount
      username
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
    _id
    bookCount
    username
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;
