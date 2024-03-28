# ex1 - For the twittertower ex i used c# 

# x2 - Hmo corona managment system

## Overview

The system architecture follows a Model-View-Controller (MVC) pattern, where the application is divided into three main components: models, views, and controllers. Additionally, services are used to encapsulate business logic and interact with models.

## Folder Structure

The project has the following folder structure:

- **server**: Contains the backend code written in Node.js.
  - **controllers**: Contains the controller logic for handling HTTP requests.
  - **models**: Contains the data models representing the database schema.
  - **routes**: Contains the routing logic to map HTTP requests to controller actions.
  - **uploads**: Used to store uploaded files.
  - **config**: Contains the db.js.
  - **services**: Contains the business logic encapsulated in service modules.
- **client**: Contains the frontend code written in React.


## Backend Architecture

### Controllers

Controllers handle incoming HTTP requests, process them, and return appropriate responses. They act as intermediaries between the client and the server's business logic.

### Models

Models represent the data entities in the system and interact directly with the database. They encapsulate database operations such as querying and updating data.

### Routes

Routes define the API endpoints and map them to corresponding controller actions. They serve as a bridge between incoming requests and controller methods.

### Services

Services contain the application's business logic and perform operations that involve multiple models or complex processing. They abstract away the details of data manipulation from controllers.

## Frontend Architecture

The frontend is built using React, a JavaScript library for building user interfaces. React components are organized into a component tree and render based on the application state.

## Database Schema

The database schema consists of the following tables:

- **personaldata**: Stores information about members, including their personal details and uploaded images.
- **coronadata**: Stores data related to COVID-19 tests and recovery dates for members.
- **vaccinations**: Records vaccination details for members.

## Development Tools and Technologies

- **Node.js**: Used for building the server-side logic.
- **Express.js**: Provides a framework for building RESTful APIs in Node.js.
- **React**: Used for building the frontend user interface.
- **MySQL**: The chosen relational database management system for storing application data.

## database diagram
![Alt text](/theReadMeImg/sqlDiagram.png "Optional title")

## in order to get started run the sql query (in createDataBase.sql) in the server terminal , then run ` node server.js` in the server and `npm start` in the client

**install in server side:**
- npm install mysql
- npm install express
- npm install axios
- npm install cors
- npm install mysql@latest
- npm install helmet
- npm install morgan
- npm install multer

**install in client side:**
- npm install axios
- npm install react-chartjs-2 chart.js
- npm install chartjs-adapter-date-fns


## the member list is displayed with the user data and two options, uplaoding img ot posting a vaccination data
![Alt text](/theReadMeImg/memberTable.png "Optional title")
 
 ## vaccination data womdow will apear for user to use
![Alt text](/theReadMeImg/vaccination.png "Optional title")

## the ui user can post corona data positive test date and recovery (or only positve test date)
![Alt text](/theReadMeImg/coronaEvent.png "Optional title")

## there will be dislayed a graph with the count of sick patients for the past 30 days
![Alt text](/theReadMeImg/chart.png "Optional title")

## and a pie chart of the ercantage of un vaccinated members out of the members
![Alt text](/theReadMeImg/unVaccinated.png "Optional title")

## the dashboard
![Alt text](/theReadMeImg/dashBoard.png "Optional title")





