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

# Tests

Create tests using Jest since the beginning