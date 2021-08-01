# ainda-presta
Marketplace for used parts and products

## Goals

- Provide a low-code platform relying on lots of pre-existing tools, frameworks and services, to create a scalable product for people to sell used parts and products seamless.

- Teach me about AWS products, React, Machine Learning, and web product development that needs to evolve fast

- (Maybe) be a useful tool for brazilian people and compete with existing platforms

- (Future maybe) collect anonymous selling and buying data from users and create a database to be used to create ML models

- (Far future maybe) sell the insights from the data in a monthly plan to entrepreneurs interested in improve or expand their business

## Tech stack and tools

- React (for the front-end)

- AWS S3 (to host the front-end code)

- AWS Lambda (to program back-end logic in Node.js)

- AWS Step Functions to visualize lambda functions and orchestrate them, helping build the serveless application

- AWS DynamoDB (to store the data into objects format)

- AWS (...) tool related to Machine Learning

- Algolia or alike service as search related tool

- ... other tools that appear during development, test and production

## Flow/Use cases

- User enters into website and can browse list of products using a search tool without the need to login
- User can check products and, if interested in buying, click on a button to display the telephone number (the information stating that the user already visualized the phone for that product will be save as a cookie, prevented him or her to click again, but always showing the phone for that specifically product upon every visualization)
- Upon clicking the button, data is saved into server adding 1 point of interest to that product (Maybe should be interesting registering the location - State and City from that user. It's better to do that using a ip geolocation api automatically instead of requiring the user to accept the geolocation prompt)

- A logged user can showcase its products for free, putting photos, description, title, phone number and price. He or She only needs to create a profile with name, phone number and CEP
- The service will be always free for everyone

