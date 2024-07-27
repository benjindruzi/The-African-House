# The African House

The African House is a web application that showcases the rich culinary heritage of African cuisine. This project is built with React for the frontend and Node.js with Express for the backend, along with a PostgreSQL database.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Demo

Live demo coming soon...

## Features

- User authentication (register, login)
- View menu items
- Place orders

## Tech Stack

**Frontend:**
- React
- TailwindCSS
- React Router

**Backend:**
- Node.js
- Express
- PostgreSQL

**Miscellaneous:**
- JWT for authentication
- bcrypt for password hashing

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/benjindruzi/The-African-House.git
    cd The-African-House
    ```

2. Install the dependencies for both frontend and backend:
    ```bash
    cd server
    npm install
    cd ../
    npm install
    ```

## Running the Application

### Backend

1. Set up the PostgreSQL database and configure the environment variables (see below).
2. Start the backend server:
    ```bash
    cd server
    npm start
    ```

### Frontend

1. In the root directory of the project, start the frontend:
    ```bash
    npm start
    ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Environment Variables

Create a `.env` file in the `server` directory and add the following environment variables:

```plaintext
DB_USER=your_db_user
DB_HOST=your_db_host
DB_DATABASE=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=your_db_port
JWT_SECRET=your_jwt_secret

## Screenshots

Here are some screenshots of the application:

### Home Page
[![Home Page](https://i.postimg.cc/vDDbjnm5/Screenshot-1.png)](https://postimg.cc/vDDbjnm5)
[![Home Page](https://i.postimg.cc/YjVMwS4Z/Screenshot-2.png)](https://postimg.cc/YjVMwS4Z)

### About Us Page
[![About Us Page](https://i.postimg.cc/MM3xH69c/Screenshot-3.png)](https://postimg.cc/MM3xH69c)

### Menu Page
[![Menu Page](https://i.postimg.cc/30yhDsqt/Screenshot-4.png)](https://postimg.cc/30yhDsqt)

