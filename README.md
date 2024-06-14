# Request-Logs

Request-Logs is a lightweight Node.js application designed to log every HTTP request made to your server. It helps developers monitor and analyze incoming traffic by generating detailed log files for each request. This tool is ideal for debugging, performance monitoring, and security auditing, providing comprehensive insights into your server's activity.

## Features

- Logs details of every HTTP request including headers, method, URL, timestamp, and client IP address.
- Generates structured log files for each day, facilitating easy analysis and troubleshooting.
- Simple integration with existing Node.js applications.
- Customizable logging options to suit various use cases.
- Lightweight and efficient, ensuring minimal impact on server performance.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/nerdy-nakul/Request-Logs.git
    cd Request-Logs
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

To start logging HTTP requests, you can run the application in different modes:

- **Production Mode:**
    ```bash
    npm start
    ```

- **Development Mode (with nodemon):**
    ```bash
    npm run dev
    ```

Make sure to replace `server.js` with the filename where your server logic resides.

## How It Works

The application listens for incoming HTTP requests and logs relevant details to a file. Each log entry includes:

- **Request Time**: Timestamp when the request was received.
- **Request Method**: HTTP method used (e.g., GET, POST).
- **Request Pathname**: URL path requested.
- **Request Host**: Hostname of the server.
- **Request IP**: IP address of the client making the request.
- **Request Headers**: Headers sent with the request.
- **Query Parameters**: Query parameters included in the URL.

Logs are stored in the `logs` directory within the project, organized by date (`logFile - YYYY-MM-DD.txt`).

## Contributing

### Contributions are Welcome!

We appreciate contributions to make Request-Logs even better! If you have any suggestions, enhancements, or bug fixes, please follow these steps:

1. **Create an Issue**: First, create an issue to discuss the change you propose. This allows us to coordinate and provide feedback.
   
2. **Fork the Repository**: Fork the repository to your own GitHub account.

3. **Clone the Repository**: Clone the repository to your local machine.

    ```bash
    git clone https://github.com/yourusername/Request-Logs.git
    cd Request-Logs
    ```

4. **Create a Branch**: Create a new branch to work on your feature, enhancement, or bug fix.

    ```bash
    git checkout -b feature-name
    ```

5. **Make Changes**: Make your changes, ensuring to follow the coding style and conventions used in the project.

6. **Test Your Changes**: Run tests if they exist to ensure your changes didn't break anything.

7. **Commit Your Changes**: Commit your changes and write a descriptive commit message.

    ```bash
    git commit -m 'Add feature: describe your changes'
    ```

8. **Push to the Branch**: Push your changes to your forked repository on GitHub.

    ```bash
    git push origin feature-name
    ```

9. **Submit a Pull Request**: Go to the original repository on GitHub and create a pull request with your changes.

10. **Feedback and Iteration**: Participate in the discussion on your pull request. You may need to make further changes based on feedback before your contribution is accepted.

We look forward to your contributions and appreciate your help in improving Request-Logs!

---

If you have any questions or need clarification on contributing, feel free to open an issue or contact the project maintainers.

## Contact

For questions or suggestions regarding this project, feel free to open an issue or contact me.

---
