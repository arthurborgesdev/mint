# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

# mint

> Classified advertisement global website for mint condition products

## Goals

- Provide a low-code platform relying on lots of pre-existing tools, frameworks and services, to create a scalable product for people to sell used parts and products seamlessly.

- Teach me about AWS products, React, Machine Learning, and web product development that needs to evolve fast

- Be a useful tool for people to find good deals around the world, that compete with local prices

- Collect anonymous selling and buying data from users and create a database to be used to create ML models

## Tech stack and tools

- React (for the front-end) -> create-react-app

- AWS S3 (to host the front-end code)

- AWS Lambda (to program back-end logic in Node.js)

- AWS Step Functions to visualize lambda functions and orchestrate them, helping build the serveless application

- AWS DynamoDB (to store the data into objects format)

- AWS (...) tool related to Machine Learning

- Algolia or alike service as search related tool

- ... other tools that appear during development, test and production

- Browser Geolocation + another solution to always get the Country of the user upon clicking to see the contact information of the product

- https://lite.ip2location.com/ could be a solution

## Flow/Use cases

- Journey for non-logged users:

  - User enters into website and can browse list of products using a search tool without the need to login

  - User can browse products and, if interested in buying, click on a button to display the provided contact information (the information stating that the user already visualized this data for that product will be saved as a cookie, preventing him or her to click again, but always showing it for that specifically product upon every visualization for that user)

  - Upon clicking the button, data is saved into server adding 1 point of interest to that product (Maybe should be interesting to register the location - State and City from that user. It's better to do that using a ip geolocation api automatically instead of requiring the user to accept the geolocation prompt)


- Journey for registering user:

  - He or She needs to provide: 
    - Name (first or full)
    - email
    - Country (they need to search it on a select input)
    - password
    - prefered contact info (text field, can be updated when he or she needs it)

  - A logged user can showcase its products for free, putting photos, description, title, contact information and price. He or She only needs to create a profile.

- The service will be always free for everyone

- Journey for the logged buyer:

  - When a logged/registered user tries to buy from another registered user, both the information from countries will be recorded correctly


# IP Geolocation API Test MVP

- Spawn a single React functional component with a button to show a user contact info when clicked and store the front end code on AWS S3 (simple react/preact app)

- Create a user with profile with a single product on AWS DynamoDB

- Create a function to backup the functionality of the button click and handle it using the DynamoDB, retrieving the contact info and saving the user information on the product array, passing Geolocation Data

- ... others will appear during test
