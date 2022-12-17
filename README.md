Games world:

Single Page Application, created as Angular for the client side, Node.js for server side, and using MongoDB for Data Base.



Information:

The app works as blog for games with basic funcionality. Every user who is not logged in have access to "Home, Catalog, Details,
Login and Register". Every logged in user have access to "Profile, Catalog, Create, Edit and Edit profile".

TechStack:

Client side - Angular CLI: 14.2.8, TypeScript: 4.7-.2
Server side - Node: 17.2.0, ExpressJS: 4.18.2, bcrypt: 5.1.0, jsonwebtoken: 8.5.1, mongoose: 6.7.4, nodemon: 2.0.20, jwt-decode: 3.1.2



Setup:

To run the rest service, in directory "server" open cmd and run:
  $npm install "to install all dependencies"
  $npm start "to start the server"

To run the app, in directory "gamesWorld" open cmd and run:
  $npm install "to install all dependencies"
  $ng server "to start the application"
  
The server will run at port "3000", and the app will run at port "4200".
