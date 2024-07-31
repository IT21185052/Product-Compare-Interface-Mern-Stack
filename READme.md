# Phone Comparison Interface

This project is a web application designed to compare mobile phones based on their specifications. Built using the MERN stack (MongoDB, Express.js, React, Node.js), it allows users to search for and compare different phone models.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Components](#components)
- [Technologies](#Technologies)
- [Improve Code Quality & Standards](#ImproveCodeQuality&Standardss)
- [Contributing](#Contributing)

## Features

- Search for mobile phones and compare their specifications.
- View detailed specifications including network, launch details, body dimensions, display type, platform, etc.
- View images of the phones and YouTube thumbnails for related videos.
- Toggle between different comparison modes.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v12 or higher)
- npm (v6 or higher)
- MongoDB (v4 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone 
    ```

2. Navigate to the project directory:
    ```sh

    cd compare-app
    ```

3. Install the dependencies for both backend and frontend:
    ```sh
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

### Running the Application

1. Start the MongoDB server:
    ```sh
    mongod
    ```

2. Add data to the database:
    ```sh
    cd backend
    node seed.js
    ```

3. Start the frontend development server:
    ```sh
    cd ../frontend
    npm start
    ```

The application should now be running at `http://localhost:3000`.

4. Start the backend server:
    ```sh
    cd backend
    node index.js
    ```

The application should now be running at `http://localhost:3000`.

## Usage

- Use the search bar to look for specific phone models.
- The main interface will display two columns for comparing the specifications of two different phones.
- Toggle between different comparison modes using the provided switch.

## Components

### `PhoneComparison`

This is the main component that renders the phone comparison interface.

### `SearchContainer`

Handles the search functionality and updates the phone data.

### `CompareModeSwitch`

Allows users to toggle between different comparison modes.

### `TextBox`

Displays additional information or notes related to the phones.


## Technologies

- Node.js 
- ReactJS
- Express.js
- MongoDB 

## Improve Code Quality & Standards

-  Added clear and descriptive variable names.
-  Added comments to explain each section of the code.
-  Ensured consistent indentation and spacing for better readability.
-  Removed unnecessary variable assignments.

## Contributing

Dhananjaya Yapa
