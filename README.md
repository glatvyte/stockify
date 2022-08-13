# Stockify
A webpage created using **"Finnhub" APIs** to search and see companies' **stock prices** and **their history in the diagram** while logging user actions in the **backend** service and saving into **Mongo DB**.

Deployed with Netlify:   Deployment features front end features only. In order to review the back end part - please download the repo and use the commmands described in [Running the project](#running-the-project) section to set it up on your local machine.



## Table of contents

* [Webpage Demo](#webpage-demo)
* [Description](#description)
* [Technology Stack](#technology-stack)
* [Dependencies](#dependencies)
* [Running the website](#running-the-website)

## Webpage Demo

## Description
This project includes:
#### Front-end 
- Search field to search company by its' symbol, e.g. AAPL (where AAPL = Apple Inc.);
- Ability to choose searched company by clicking on the company name and look into stock price history diagram. Default date range is set to 7 days but user can change it using date picker;
- Search input has validation to allow only letters including space, up to 35 characters;
- Error message for invalid input field apears in red above the input field;
- Search result is listed as tile below with company profile data: name, country, currency, web URL;
#### Back-end 
- Created node.js application to log user actions such as 1) name of selected company and 2) company stock price history for a selected date range into console and save it into **MongoDB**.

	
## Technology Stack
Stockify is created with:
* React
* Semantic UI
* Custom styling done with SASS
* Node.js
* MongoDB
* Express
* Mongoose
* Axios
* Cors

## Dependencies
* Diagram done by using Recharts library
* "Finnhub" API requires finnhub-stocks library
* API Key --------add info
	
## Running the project
I #### Front-end
Inside the ```client``` directory:
```npm start```

```
$ cd ../l
$ npm install
$ npm start
```
