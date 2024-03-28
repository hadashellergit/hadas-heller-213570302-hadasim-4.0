install in server side:
npm install mysql
npm install express
npm install axios
npm install cors
npm install mysql@latest
npm install helmet
npm install morgan
npm install multer

install in client side:
npm install axios
npm install react-chartjs-2 chart.js
# npm install chartjs-adapter-date-fns


# Architectural Specification

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



