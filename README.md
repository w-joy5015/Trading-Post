# Trading Post

_Practice trading stocks with up to date pricing information, but without the risk_

The Trading Post is a hobby project created by web developer Joy Wang using Alpha Vantage API, which provides up to date stock pricing information, to implement a simple web-based stock portfolio app.

The deployed verson can be found at https://the-trading-post.herokuapp.com/

## Technologies:

Javscript, React, Redux, Express, Sequelize, Heroku, PostgreSQL

## App features:

To explore the app without making a real user account, there are two demo accounts:
email: cody@email.com | password: 123
email: murphy@email.com | password: 123

All new users start off with a balance of $50,000. Users can search for stocks by their ticker symbol and will see the current price per share it is listed as. They may enter whole number shares they would like to buy, but will only be able to purchase the share(s) if they have enough balance.

Users will be able to see the current value of the shares that they own under the "Portfolio" tab.

Users will also be able to see a list of all the transactions they have made under the "Transactions" tab.

## To run the app locally:

Note: this app runs on a PostgreSQL database, therefore users seeking to run this app locally will need PostgreSQL

1.  Fork and clone the repository. Then in the terminal, run `npm install` to install dependancies

2.  Run `createdb the_trading_post` and `createdb the_trading_post-test` if you would like to run test specs as well

3.  To start the server, run `npm run start-dev`. It may take a moment as webpack is creating a bundle.js file at this step. When it says "Mixing it up on port 8080" you can navigate to `localhost:8080` in your browser to see the application running

4.  To run tests, run `npm run test`
