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

Check out the live demo: [The African House](#)

## Features

- User authentication (register, login)
- View, create, update, and delete menu items
- Place and manage orders
- Responsive design
- Interactive animations with AOS (Animate On Scroll)

## Tech Stack

**Frontend:**
- React
- TailwindCSS
- AOS (Animate On Scroll)
- React Router

**Backend:**
- Node.js
- Express
- PostgreSQL

**Miscellaneous:**
- JWT for authentication
- bcrypt for password hashing
- dotenv for environment variables

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
