# Resume Genie Environment Variables Setup Guide

This guide provides instructions on setting up the development environment for the project.To run this project, you need `.env` files in your `frontend` and `backend` folders. Add the following environment variables to your .env file: 

<br>

## Front-End Environment Variables

`REACT_APP_ENV` : development || production

`REACT_APP_SERVER_DOMAIN` : Your development environment server domain

`REACT_APP_PROD_SERVER_DOMAIN` : Your production environment Domain

<br>

## Back-End Environment Variables

`PORT` : 8000

`NODE_ENV` : development || production

`MONGO_URI` : Your Mongo Uri for defining connections between application and MongoDB database.

`JWT_SECRET` : Your JWT secret key. Ex-AnythingYouLinkAndThisShouldBeSecret

`EMAIL` : Your development environment email from which you you to send emails.

`PASSWORD` : Your development environment email's password.

`PROD_EMAIL` : Your production environment email from which you you to send emails.

`PROD_PASSWORD` : Your production environment email's password.


