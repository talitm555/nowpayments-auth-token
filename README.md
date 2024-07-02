# nowpayments-auth-token

A simple API in NodeJS and ExpressJS to ship bearer token to third parties without giving them your Now Payments Account credentials.

This project is a simple Node.js and Express.js application that provides a GET API to authenticate and create a bearer token using the NowPayments API. The API requires an API key in the header for authentication.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/talitm555/nowpayments-auth-token.git
    cd nowpayments-auth-token
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    NOWPAYMENTS_EMAIL=your_email@example.com
    NOWPAYMENTS_PASSWORD=your_password

    API_KEY=your_api_key
    
    NOWPAYMENTS_API_URL=https://api-sandbox.nowpayments.io/v1 # Dev URL
    #NOWPAYMENTS_API_URL=https://api.nowpayments.io/v1 # Prod URL

    PORT=3000
    ```

    Replace the placeholder values with your actual NowPayments account email, password, set your own API key for this API, and the NowPayments API URL.

### Running the Server

Start the server by running:

```bash
node index.js
```

The server will start on port 3000 by default. You can change the port by setting the PORT environment variable in your .env file.

## Usage

### Get Bearer Token

* URL: `/auth/token`
* Method: `GET`
* Headers:

```json
x-api-key: your_api_key
```

* Response:

`200 OK` if successful

```json
x-api-key: your_api_key
```

`401 Unauthorized` if the API key is missing or invalid

`500 Internal Server Error` if there is an error creating the bearer token

### Example Request

You can test the API using `curl`:

```bash
curl -H "x-api-key: your_api_key" http://localhost:3000/auth/token
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
