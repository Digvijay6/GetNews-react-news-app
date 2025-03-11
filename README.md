# GetNews React News App

GetNews is a React-based web application that aggregates and displays the latest news articles across various categories, including Business, Entertainment, Health, Science, Sports, and Technology. The app offers users an intuitive interface to stay updated on current events.

## Features

- **Category-Based News**: Browse news articles categorized into Business, Entertainment, Health, Science, Sports, and Technology.
- **Pagination**: Navigate through multiple pages of news articles seamlessly.
- **Loading Indicator**: A top-loading bar indicates data fetching status for a smooth user experience.

## Component Structure

This project demonstrates the use of both class-based components and functional components with React Hooks:

- **Class-Based Components**: Traditional React components using ES6 classes.
- **Functional Components with Hooks**: Modern React components utilizing Hooks (`useState`, `useEffect`, etc.) to manage state and side effects.

This hybrid approach showcases the evolution of React components and provides insights into both paradigms.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Digvijay6/GetNews-react-news-app.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd GetNews-react-news-app
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the development server**:
   ```bash
   npm start
   ```
   This command runs the app in development mode. Open http://localhost:3000 to view it in your browser.

2. **Build for production**:
   ```bash
   npm run build
   ```
   This command builds the app for production, optimizing the build for the best performance.

## Deployment

This application can be deployed using GitHub Pages. Ensure the homepage field in your package.json is set to:

```json
"homepage": "https://your-username.github.io/GetNews-react-news-app"
```

Then, run:

```bash
npm run deploy
```

This will deploy the app to GitHub Pages.

## Important Note on NewsAPI Usage

The app utilizes NewsAPI to fetch news articles. However, NewsAPI's free Developer plan restricts requests from deployed applications due to CORS policy limitations. This means that while the app functions correctly in development (e.g., on localhost), it may encounter issues when deployed.

To address this, consider the following approaches:

1. **Set Up a Backend Proxy**: Create a simple server (e.g., using Node.js and Express) to act as an intermediary between your React app and NewsAPI. This server would handle API requests and relay data to your frontend.
2. **Upgrade to a Paid Plan**: NewsAPI's paid plans offer more flexibility, including CORS support for deployed applications. Review their pricing details for more information.
3. **Use Alternative News APIs**: Explore other news APIs that offer more lenient CORS policies or are tailored for frontend applications.

For more insights on this issue, refer to this StackOverflow discussion.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.