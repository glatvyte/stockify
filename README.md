# Stockify
A webpage created using **"Finnhub" APIs** to search and see companies' **stock prices** and **their history in the diagram** while logging user actions in the **backend** service and saving it into **MongoDB**.

Deployed with Netlify:   Deployment features front end features only. In order to review the back end part - please download the repo and use the commmands described in [Running the project](#running-the-project) section to set it up on your local machine.



## Table of contents

* [Webpage Demo](#webpage-demo)
* [Description](#description)
* [Technology Stack](#technology-stack)
* [Dependencies](#dependencies)
* [Running the project](#running-the-project)

## Webpage Demo

## Description
This project includes:
#### Front-end 
* Search field to search company by its' symbol, e.g. AAPL (where AAPL = Apple Inc.);
* Ability to choose searched company by clicking on the company name and look into stock price history diagram. Default date range is set to 7 days but user can change it using a date picker;
* Search input has a validation to allow only letters including space, up to 35 characters;
* Error message for invalid input field apears in red above the input field;
* Search result is listed as a tile below with the company profile data: *name*, *country*, *currency*, *web URL*;
#### Back-end 
* Created Node.js application to log user' actions such as 1) *a name of selected company* and 2) *company stock price history for a selected date range* into a console and save it into a **MongoDB**.

#### Testing
* Some components are covered with unit tests.


	
## Technology Stack
Stockify webpage is created with:
* React
* Node.js
* MongoDB
* Express
* Mongoose

## Dependencies
* Semantic UI;
* Custom styling done with SASS;
* Diagram done by using [Recharts](https://recharts.org/en-US/) library;
* "Finnhub" APIs: <br/>
  1. https://finnhub.io/docs/api/company-profile2 - company search by symbol. 
  2. https://finnhub.io/docs/api/stock-candles - stock price history.

	
## Running the project
#### API Key access:
* Get your own API Key [here](https://finnhub.io/docs/api/introduction);
* Create ```.env``` file in root folder and place your API Key there.

#### Front-end
Inside the ```client``` directory: <br />

* ```npm install``` <br/>
* ```npm start``` <br />
Open http://localhost:3000 to view in the browser.


#### Back-end
Inside the ```server``` directory and in a separate terminal window start back-end server:<br/>
* ```node index.js``` <br />


In order to launch the MongoDB you need to have [MongoDB](https://www.mongodb.com/) installed.<br/>
In a separate terminal window: <br/>
* ```mongo```





