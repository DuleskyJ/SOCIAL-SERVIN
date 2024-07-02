# Social Network API
Description
This project is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The API is built using Express.js for routing, a MongoDB database, and the Mongoose ODM. This application demonstrates the use of NoSQL databases in managing large amounts of unstructured data, as commonly required in social network platforms.

## Table of Contents
Installation
Usage
API Endpoints
Models
Technical Acceptance Criteria
Walkthrough Video
License

## Installation
Clone the repository:

git clone https://github.com/your-github-username/social-network-api.git
cd social-network-api

## Install dependencies:

npm install
Set up environment variables:
Create a .env file in the root directory and add the following:

MONGODB_URI=mongodb://localhost:27017/socialnetwork
Start the server:

nodemon server.js
Usage
Use Insomnia or any API client to test the API endpoints. Below are the main endpoints available:

API Endpoints
Users
GET all users:

URL: http://localhost:3007/api/users
Method: GET
GET single user by ID:

URL: http://localhost:3007/api/users/:userId
Method: GET
POST create a new user:

URL: http://localhost:3007/api/users
Method: POST
Body:
json
Copy code
{
  "username": "joemama",
  "email": "joemama@gmail.com"
}
PUT update user by ID:

URL: http://localhost:3007/api/users/:userId
Method: PUT
Body:
json
Copy code
{
  "username": "newUsername",
  "email": "newEmail@gmail.com"
}
DELETE remove user by ID:

URL: http://localhost:3007/api/users/:userId
Method: DELETE
POST add a friend to a user's friend list:

URL: http://localhost:3007/api/users/:userId/friends/:friendId
Method: POST
DELETE remove a friend from a user's friend list:

URL: http://localhost:3007/api/users/:userId/friends/:friendId
Method: DELETE
Thoughts
GET all thoughts:

URL: http://localhost:3007/api/thoughts
Method: GET
GET single thought by ID:

URL: http://localhost:3007/api/thoughts/:thoughtId
Method: GET
POST create a new thought:

URL: http://localhost:3007/api/thoughts
Method: POST
Body:
json
Copy code
{
  "thoughtText": "This is a test thought.",
  "username": "joemama",
  "userId": "60d0fe4f5311236168a109ca"
}
PUT update thought by ID:

URL: http://localhost:3007/api/thoughts/:thoughtId
Method: PUT
Body:
json
Copy code
{
  "thoughtText": "Updated thought text"
}
DELETE remove thought by ID:

URL: http://localhost:3007/api/thoughts/:thoughtId
Method: DELETE
POST add a reaction to a thought:

URL: http://localhost:3007/api/thoughts/:thoughtId/reactions
Method: POST
Body:
json
Copy code
{
  "reactionBody": "This is a test reaction.",
  "username": "janedoe"
}
DELETE remove a reaction from a thought:

URL: http://localhost:3007/api/thoughts/:thoughtId/reactions/:reactionId
Method: DELETE
Models
User Model
username: String, unique, required, trimmed
email: String, required, unique, must match a valid email address
thoughts: Array of _id values referencing the Thought model
friends: Array of _id values referencing the User model (self-reference)
Virtuals:
friendCount: retrieves the length of the user's friends array field on query
Thought Model
thoughtText: String, required, must be between 1 and 280 characters
createdAt: Date, set default value to the current timestamp, use a getter method to format the timestamp on query
username: String, required
reactions: Array of nested documents created with the reactionSchema
Virtuals:
reactionCount: retrieves the length of the thought's reactions array field on query
Reaction Schema (Subdocument)
reactionId: Use Mongoose's ObjectId data type, default value is set to a new ObjectId
reactionBody: String, required, 280 character maximum
username: String, required
createdAt: Date, set default value to the current timestamp, use a getter method to format the timestamp on query
Technical Acceptance Criteria
Uses the Mongoose package to connect to a MongoDB database.
Includes User and Thought models outlined in the Challenge instructions.
Includes schema settings for User and Thought models as outlined in the Challenge instructions.
Includes Reactions as the reaction field's subdocument schema in the Thought model.
Uses functionality to format queried timestamps properly.

## Walkthrough Video :

## License
This project is licensed under the MIT License.
