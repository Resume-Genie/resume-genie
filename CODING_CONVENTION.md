# Resume Genie Coding Conventions

This document outlines the coding conventions and guidelines to be followed when working on the Resume Genie project. Adhering to these conventions ensures consistency, readability, and maintainability of the codebase.

<br>

## Table of Contents

<ul>
  <li><a href="#general-guidelines">General Guidelines</a></li>
  <li><a href="#file-organization">File Organization</a></li>
  <li><a href="#naming-conventions">Naming Conventions</a></li>
  <li><a href="#code-formatting">Code Formatting</a></li>
  <ul>
    <li><a href="#javaScript/typeScript">JavaScript/TypeScript</a></li>
    <li><a href="#tailwind-css">Tailwind CSS</a></li>
    <li><a href="#jsx/css">JSX/CSS</a></li>
  </ul>
  <li><a href="#comments-and-documentation">Comments and Documentation</a></li>
  <li><a href="#modularity-and-separation-of-concerns">Modularity and Separation of Concerns</a></li>
  <li><a href="#error-handling">Error Handling</a></li>
  <li><a href="#code-structure-and-organization">Code Structure and Organization</a></li>
</ul>

<br>

<h3 id='general-guidelines'>🔯 General Guidelines</h3>

- Use meaningful and descriptive variable, function, and class names that are descriptive and self-explanatory.
- Write code that is easy to understand and maintain.
- Modularize the code and follow separation of concerns.
- Keep lines of code reasonably short (preferably less than 80 characters) to enhance readability.
- Comment your code when necessary to provide clarity and context.
- Use Prettier for better and easy Formatting

<br>

<h2 id="file-organization">🗃 File Organization</h2>

- Organize files and directories in a logical and consistent manner.
- Use meaningful names for directories and files.
- Separate concerns by organizing files based on their functionality or feature.

<br>

<h2 id="naming-conventions">📛 Naming Conventions</h2>

- Use descriptive and meaningful names for variables, functions, classes, and components.
- Follow camel case naming convention for variables and functions (e.g., `myVariable`, `calculateSum()`).
- Use PascalCase for class and component names (e.g., `MyClass`, `MyComponent`).
- Avoid using single character names or abbreviations that may not be clear to others.
- Be consistent with naming conventions throughout the codebase.

<br>

<h2 id="code-formatting">📝 Code Formatting</h2>

- Follow the indentation style consistently (e.g., 2 spaces or tabs).
- Use consistent spacing around operators and between code blocks.
- Break long lines of code into multiple lines for readability.
- Use proper alignment for code blocks to improve readability.
- Be consistent with line breaks and empty lines for better code structure.
- Use consistent and clear formatting throughout the codebase.

  <h3 id='javaScript/typeScript'>JavaScript/TypeScript</h3>

  - Use camelCase for variable and function names.
  - Use PascalCase for class and component names.
  - Use single quotes ('') for string literals unless interpolation is required.
  - Prefer arrow functions (`() => {}`) over traditional function expressions.
  - Use template literals (\`\`) for concatenating strings when necessary.
  - Prefer `const` for declaring variables unless the value needs to be reassigned.
  - Use destructuring where appropriate to simplify code.
  - Avoid unnecessary or redundant code and imports.
  - Follow best practices and conventions for React components, Redux state management, and other libraries used in the project.

  <h3 id='tailwind-css'>Tailwind CSS</h3>

  - Use Tailwind CSS for styling components and layouts.
  - Follow the utility-first approach and utilize Tailwind CSS classes directly in your JSX.
  - Avoid writing custom CSS whenever possible to leverage the built-in Tailwind CSS utilities.
  - Organize your styles by using the `className` prop or by applying multiple utility classes to an element.
  - Reuse existing Tailwind CSS classes instead of creating new ones whenever possible.
  - Follow the responsive design principles provided by Tailwind CSS for handling different screen sizes.

  <h3 id='jsx/css'>JSX/CSS</h3>

  - Use proper indentation and formatting for JSX markup.
  - Use lowercase for JSX tags and attributes.
  - Use double quotes ("") for attribute values.
  - Prefer CSS classes for styling over inline styles.
  - Follow a consistent and scalable CSS architecture (e.g., BEM, SMACSS, or your preferred methodology).

<br>

<h2 id="comments-and-documentation">✍ Comments and Documentation</h2>

- Write clear and concise comments to explain complex logic, provide context, or document any assumptions.
- Avoid excessive comments that state the obvious or duplicate the code's functionality.
- Use inline comments sparingly and only when necessary.
- Write self-explanatory code and prioritize readability over excessive commenting.
- Document public APIs and functions using JSDoc or similar documentation standards.

<br>

<h2 id="modularity-and-separation-of-concerns">☹ Modularity and Separation of Concerns</h2>

- Follow the principles of modularity and separation of concerns.
- Break down complex tasks into smaller functions or components.
- Aim for single responsibility for each function or component.
- Encapsulate related functionality into separate modules or files.
- Keep functions and components focused and avoid bloating them with unrelated tasks.

<br>

<h2 id="error-handling">💥 Error Handling</h2>

- Implement proper error handling throughout the codebase.
- Use appropriate error handling mechanisms like try-catch blocks or error handlers.
- Provide clear error messages that help in identifying and resolving issues.
- Avoid using generic error messages that do not provide enough information.
- Handle and log errors appropriately for debugging and troubleshooting purposes.

<br>

<h2 id="code-structure-and-organization">👓 Code Structure and Organization</h2>

- Maintain a consistent code structure and organization throughout the project.
- Group related functions or methods together.
- Keep related files in the same directory or module.
- Use meaningful directory and file names that reflect their purpose or functionality.
- Avoid code duplication and strive for reusable and modular code.

---

Following these coding conventions ensures that the Resume Genie codebase remains consistent and maintainable. Adhering to these guidelines also helps in collaboration and makes it easier for developers to understand and contribute to the project.

Remember to consistently apply these conventions to both new code and when making updates to existing code. This ensures a cohesive codebase and a smoother development experience for everyone involved.

**Happy coding! 💖**
