# Architecture

Resume Genie is built using a modern and scalable architecture to ensure maintainability, extensibility, and performance. This document provides an overview of the system architecture and its components.

<br>

## Table of Contents

- [Introduction](#introduction)
- [High-Level Architecture](#high-level-architecture)
- [Frontend Architecture](#frontend-architecture)
  - [Components](#components)
  - [Pages](#pages)
  - [Assets](#assets)
  - [Styles](#styles)
  - [Store](#store)
  - [Services](#services)
  - [Utils](#utils)
  - [Entry Points](#entry-points)
- [Backend Architecture](#backend-architecture)
  - [Config](#config)
  - [Middleware](#middleware)
  - [Models](#models)
  - [Util](#util)
  - [Routes](#routes)
  - [Services](#services-1)
  - [Entry Point](#entry-point)
- [Conclusion](#conclusion)

<br>

## Introduction

The Architecture.md file provides an overview of the system architecture for Resume Genie, explaining the high-level architecture, directory structure, and the architecture of the frontend and backend components.

<br>

## High-Level Architecture

Resume Genie follows a client-server architecture, with the client implemented as a web application and the server providing the necessary backend services. The web application is built using React for the user interface, while the server is implemented using Node.js and Express.js.

The project root directory (`resume-genie/`) contains the frontend, backend, and docs directories.

The **frontend** directory contains the source code for the web application's frontend. It includes the `src` directory, which further contains subdirectories for components, pages, assets, styles, store, services, and utilities. The `App.js` file serves as the entry point for the frontend application, while the `index.js` file is responsible for rendering the application.

The **backend** directory holds the source code for the server-side backend. It includes the `src` directory, which contains subdirectories for config, middleware, models, util, routes, services, and the `app.js` file as the entry point for the backend application.

The **docs** directory contains various documentation files, including the Architecture.md, Contributing.md, DevelopersGuide.md, and README.md.

The `.gitignore` file is used to specify which files and directories should be ignored by version control.

<br>

## Frontend Architecture

The frontend architecture of Resume Genie is based on the React framework. It follows a component-based approach and utilizes various supporting folders and files for seamless development and maintenance, where each component represents a specific part of the user interface. Redux Toolkit is used for state management, allowing for a centralized and predictable state management approach.

- **src**: The root directory for the frontend source code.
  - **components**: Contains reusable UI components.
  - **pages**: Contains the different pages of the application.
  - **assets**: Contains static assets such as images, icons, and fonts.
  - **styles**: Contains global styles and CSS modules for component-specific styling.
  - **store**: Contains Redux store configuration, actions, and reducers.
  - **services**: Contains utility functions and services used across the application.
  - **utils**: Contains helper functions and utility modules.
  - **App.js**: The entry point of the application.
  - **index.js**: Renders the App component and mounts it to the DOM.

### Components

The `components` directory contains reusable UI components used throughout the application. These components are designed to be modular, making it easier to build and maintain the user interface.

### Pages

The `pages` directory contains individual page components that represent different sections and views of the application. Each page component serves as a container for relevant components and manages the page-level logic.

### Assets

The `assets` directory stores static assets such as images, icons, and fonts used in the application.

### Styles

The `styles` directory includes CSS or SCSS files used for styling the components and pages of the application.

### Store

The `store` directory holds the Redux store configuration and related files. It manages the application state and facilitates data flow between components.

### Services

The `services` directory contains modules responsible for making API calls and handling data communication with the server.

### Utils

The `utils` directory includes utility functions and helper modules used across the frontend application.

### Entry Points

The `App.js` file serves as the entry point for the frontend application, where the main React component is defined and the application is bootstrapped. The `index.js` file is responsible for rendering the application in the browser.

<br>

## Backend Architecture

The backend architecture of Resume Genie is built using Node.js and Express.js. It follows a layered architecture, separating concerns into different layers for better modularity and testability. The backend provides various APIs for user authentication, resume generation, and data storage.

- **src**: The root directory for the backend source code.
  - **config**: Contains configuration files for the backend, such as database configuration and environment variables.
  - **middleware**: Contains custom middleware functions used in request processing.
  - **models**: Contains the database models or schemas used in the application.
  - **util**: Contains utility functions and modules used across the backend.
  - **routes**: Contains the route handlers and API endpoints.
  - **services**: Contains business logic and services that interact with databases or external APIs.
  - **app.js**: The entry point of the backend application.

### Config

The `config` directory contains configuration files and modules that manage application-level settings and environment variables.

### Middleware

The `middleware` directory holds the custom middleware functions used to handle specific tasks such as authentication, error handling, and request parsing.

### Models

The `models` directory includes the data models and database schema definitions used by the application. It encapsulates the data structure and provides an interface to interact with the database.

### Util

The `util` directory contains utility modules and functions used across the backend application, providing common functionalities and reusable code snippets.

### Routes

The `routes` directory defines the API routes for various endpoints and connects them to the corresponding controller functions.

### Services

The `services` directory includes modules responsible for handling business logic, data processing, and interfacing with external services or databases.

### Entry Point

The `app.js` file serves as the entry point for the backend application, where the Express.js server is configured and initialized.

<br>

## Conclusion

The Architecture.md file provides a high-level overview of the system architecture for Resume Genie. Understanding the directory structure and the frontend and backend architectures is crucial for developers contributing to the project or seeking to extend its functionality.
