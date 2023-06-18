# Developer Guide

## 🏃‍♀️ Running Project in Local

Ensure that you have Node.js installed on your machine. You can download the latest version from the official Node.js website: https://nodejs.org

- **Fork** the repo
  - For more information **How to fork a repo** refer: [Fork Guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

- **Clone** the forked repo

  - For more information **How to clone a repo** refer: [Clone Guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

    ```
    $ git clone https://github.com/Gautam25Raj/resume-genie.git
    ```

- Navigate into the project's directory & Install the dependencies.

  - Front-End

    ```
    $ cd client
    $ npm install
    ```

  - Back-End

    ```
    $ cd backend
    $ npm install
    ```

- Setup **Environment Variable**:

  - Create a .env file in both folder front-end and back-end of the project and set the necessary environment variables. Refer to the [Environment Variable](ENVIRONMENT.md) for the required environment variables.

- Start the development server & Run the following command to run the project in your local computer.

  - Front-End

    ```
    $ cd client
    $ npm start
    ```

  - Back-End

    ```
    $ cd backend
    $ npm start
    ```

  This command will start the development server, and you should see output indicating that the server is running.

- Open your web browser and navigate to [localhost:3000](http://localhost:3000) to run Front-End and Back-End on [localhost:8000](http://localhost:8000).

You have now successfully set up and run the Resume Genie project on your local machine.

<br>

**Note: The above instructions assume that the project uses `npm` as the package manager. If you're using `yarn`, replace `npm` with `yarn` in the commands.**

<br>

## 👨‍💻 Coding Style and Guidelines

To maintain consistency and readability across the codebase, we follow the following coding style and guidelines for Resume Genie:

### General Guidelines

- Use meaningful and descriptive variable, function, and class names.
- Write code that is easy to understand and maintain.
- Keep lines of code reasonably short (preferably less than 80 characters) to enhance readability.
- Comment your code when necessary to provide clarity and context.
- Use Prettier for better and easy Formatting

### Indentation and Formatting

- Use spaces for indentation with a consistent indentation level of 2 spaces.
- Use spaces around operators for better readability.
- Use consistent and clear formatting throughout the codebase.

### JavaScript/TypeScript

- Use camelCase for variable and function names.
- Use PascalCase for class and component names.
- Use single quotes ('') for string literals unless interpolation is required.
- Prefer arrow functions (`() => {}`) over traditional function expressions.
- Use template literals (\`\`) for concatenating strings when necessary.
- Prefer `const` for declaring variables unless the value needs to be reassigned.
- Use destructuring where appropriate to simplify code.
- Avoid unnecessary or redundant code and imports.
- Follow best practices and conventions for React components, Redux state management, and other libraries used in the project.

### Tailwind CSS

- Use Tailwind CSS for styling components and layouts.
- Follow the utility-first approach and utilize Tailwind CSS classes directly in your JSX.
- Avoid writing custom CSS whenever possible to leverage the built-in Tailwind CSS utilities.
- Organize your styles by using the `className` prop or by applying multiple utility classes to an element.
- Reuse existing Tailwind CSS classes instead of creating new ones whenever possible.
- Follow the responsive design principles provided by Tailwind CSS for handling different screen sizes.

### JSX/CSS

- Use proper indentation and formatting for JSX markup.
- Use lowercase for JSX tags and attributes.
- Use double quotes ("") for attribute values.
- Prefer CSS classes for styling over inline styles.
- Follow a consistent and scalable CSS architecture (e.g., BEM, SMACSS, or your preferred methodology).

<br>

### 🧢 Basic Git Commands Guidelines

- Check out a new branch if you want to, based and name it to what you intend to do:

  ```
  $ git checkout -b BRANCH_NAME
  ```

- **Commit** your changes

  - Please provide a git message that explains what you've done
  - Commit to the forked repository
    ```
    $ git commit -am 'Add some proper message'
    ```

- **Push** to the branch

  ```
  $ git push origin BRANCH_NAME
  ```

- Make a pull request
  - **Please do apply labels to pull request.**

Once done, we will review the changes and merge to <code>main</code> branch

<br>

These guidelines are meant to ensure consistent and maintainable code throughout the project. When contributing to Resume Genie, please follow these coding style and guidelines to help maintain a clean and cohesive codebase.

If you have any questions or need clarification on any specific coding style aspect, feel free to reach out to the project maintainers.

**Happy contributing! 💖**
