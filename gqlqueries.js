mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        bookCount
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