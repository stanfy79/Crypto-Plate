
# Crypto-Plate

Welcome to Crypto-Plate!

This repository contains the source code for a website that embeds Wormhole multichain swap functionality, provides platforms where you can earn crypto, and displays real-time chart data for Solana (SOL). This README provides instructions on how to build and launch the application.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Using the Application](#using-the-application)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (version 14.x or later)
- npm (version 6.x or later)
- Git
- Basic understanding of web development and JavaScript

## Installation

To install the application, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/stanfy79/Crypto-Plate
    ```

2. Navigate to the project directory:
    ```bash
    cd Crypto-Plate
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

There's no necessary configuration.

## Running the Application

To run the application locally, use the following command:
```bash
npm run dev
```
or
```bash
npm start
```

This will start a development server, and you can view the application in your browser at [http://localhost:5173](http://localhost:5173).

## Using the Application

### Header Navigation

- The navigation bar contains various pages, each with a particular focus.

### Real-time Market Data Chart

- The application features a real-time market data chart with multiple coins that you can select from.

### Home Page Top Stories

- This section provides recent crypto-related news feeds.

### Earn Page

- Provides listings of platforms where you can earn crypto.

### Multi Swap

- On the multi swap, users can convert tokens from one blockchain to another. Here's a step-by-step guide:

  #### Sending End
  - Select the network you want to swap the token from.
  - Select the asset you want to swap and specify the amount of tokens you want to swap (USD).

  #### Receiving End
  - Repeat the same steps as in the sending end.

  **Note:** Don't forget to connect your wallet!

## Contributing

Contributions are always welcome! Please follow these steps to contribute:

1. Fork the repository.

2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Make your changes.

4. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```

5. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```

6. Open a pull request.

For any questions or suggestions, feel free to open an issue or contact the project maintainers. Thank you for using our application!
