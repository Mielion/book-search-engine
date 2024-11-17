# Book Search Engine

## Table of Contents

- Description
- Features
- Technologies Used
- Installation
- Usage
- Screenshots
- Deployment
- License
- Questions

### Description
The Book Search Engine is a web application that allows users to search for books using the Google Books API. Users can also save books to their personal profile after signing up or logging into the application. This project demonstrates a combination of modern web development technologies, including GraphQL for querying, a React-based front-end, and a Node.js/Express.js back-end.

### Features

- Search for books using keywords.
- View detailed information about books, including title, authors, description, and more.
- Create an account to save your favorite books.
- Remove saved books from your profile.
- Responsive design for mobile and desktop devices.

### Technologies Used

- Front-End: React, Apollo Client, Bootstrap
- Back-End: Node.js, Express.js, MongoDB, GraphQL
- Authentication: JSON Web Tokens (JWT)
- API: Google Books API
  
### Installation

Clone the repository:
```
git clone https://github.com/Mielion/book-search-engine.git
```
Navigate to the project directory:
```
cd book-search-engine
```
Install dependencies for both the server and client:
```
npm install
cd client && npm install
```
Add a .env file in the root directory with the following keys:
```
MONGODB_URI=your_mongodb_connection_string
SECRET=your_jwt_secret
```
### Usage

1. Start the development server:
``` 
npm start
```
2.Open your browser and navigate to:
```
API server running on port 3001!
Use GraphQL at http://localhost:3001/graphql
```

### Screenshots

Homepage:
![image](https://github.com/user-attachments/assets/2c77cc82-54b8-4631-b29d-afa233473d24)


Search Results:
![image](https://github.com/user-attachments/assets/c2a6bade-979b-4766-853b-4854682b437e)


### Deployment:
Preview the app at: [Book-search-engine](https://book-search-engine-qwjw.onrender.com)

### License
This project is licensed under the MIT License.

### Questions
For any questions or feedback, please reach out:

GitHub: https://github.com/Mielion
Email:melena0816@gmail.com
