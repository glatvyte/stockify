# Stockify

A webpage created using **"Finnhub" APIs** to search and see companies' **stock prices** and **their history in the diagram** while logging user actions in the **backend** service and saving it into **MongoDB**.

## Table of contents

- [Webpage Demo](#webpage-demo)
- [Description](#description)
- [Technology Stack](#technology-stack)
- [Dependencies](#dependencies)
- [Running the project](#running-the-project)

## Webpage Demo

![Demo](https://user-images.githubusercontent.com/97436827/184552294-283d45e6-cae8-46cc-885f-bc5dfb47b988.gif)

## Description

This project includes:

#### Front-end

- Search field to search company by its' symbol, e.g. AAPL (where AAPL = Apple Inc.). User can search by clicking `Search` button or pressing `Enter` on the keyboard.
- Ability to choose searched company by clicking on the company name and look into stock price history diagram. Default date range is set to 7 days but user can change it by using a date picker;
- Search input has a validation to allow only letters including space, up to 35 characters;
- Error message for invalid input field apears in red above the input field;
- Search result is listed as a tile below with the company profile data: _name_, _logo_, _country_, _currency_, _web URL_;
- Webpage layout is responsive.

#### Back-end

- Created Node.js application to log user' actions such as 1) _a name of selected company_ and 2) _company stock price history for a selected date range_ into a console and save it into a **MongoDB**.

#### Testing

- Some components are covered with unit tests.

## Technology Stack

Stockify webpage is created with:

- React
- Node.js
- MongoDB
- Express
- Mongoose

## Dependencies

- Semantic UI;
- Custom styling done with SASS;
- Diagram done by using [Recharts](https://recharts.org/en-US/) library;
- "Finnhub" APIs: <br/>
  1. https://finnhub.io/docs/api/company-profile2 - company search by symbol.
  2. https://finnhub.io/docs/api/stock-candles - stock price history.

## Running the project

#### API Key access:

- Get your own API Key [here](https://finnhub.io/docs/api/introduction);
- Create `.env` file in `client` directory and place your API Key there. The .env file should look like this:<br />
  `REACT_APP_API_KEY = 'xxxxxxxxxxxx'`<br />
  `GENERATE_SOURCEMAP=false`

#### Front-end

Inside the `client` directory: <br />

- `npm install` <br/>
- `npm start` <br />
  Open http://localhost:3000 to view in the browser.

#### Back-end

Inside the `server` directory and in a separate terminal window:<br/>

- `npm install` <br/>
- `node index.js` <br />

In order to launch the MongoDB you need to have [MongoDB](https://www.mongodb.com/) installed.<br/>
In a separate terminal window: <br/>

- `mongo`

#### Tests

In order to perform tests go to the `client` directory: <br />

- `npm test` <br />
