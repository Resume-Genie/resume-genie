# Contributing to ResumeGenie
We love your help! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Submitting a fix
- Proposing new features
- Becoming a contributor

**Note: Please do apply labels to pull request.**

## Submitting changes

- **Fork** the repo

- **Clone** the forked repo
  ```
  $ git clone ResumeGenie
  ```
  
- Install the dependencies
  ```
  $ npm install
  ```
  
- Check out a new branch based and name it to what you intend to do:
  ```
  $ git checkout -b BRANCH_NAME
  ```
  
- Setup **Environment Variable**: [Environment Variable](Environment_Variable)
  
- Run the project <br />
  - Front-End
    ```
    $ cd client
    $ npm start
    ```
  - Back-End
    ```
    $ cd server
    $ npm start
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

## Use a Consistent Coding Style
As this is mostly templating we don't have many linting rules, but please

* Use 2 spaces for indentation rather than tabs
* Keep it tidy and easily understandable
* Use Prettier for better and easy Formatting

## License
By contributing, you agree that your contributions will be licensed under its [MIT License](LICENSE).
