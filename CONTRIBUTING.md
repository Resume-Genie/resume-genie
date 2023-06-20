# Contributing to ResumeGenie

We appreciate your interest in contributing to Resume Genie! Your contributions can help make our open-source resume builder software even better. Please read through the following sections to understand how you can contribute to the project.

We love your help! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Submitting a fix
- Proposing new features
- Becoming a contributor

<br>

<h2 id='table-of-contents'>📑 Table of Contents</h2>
<ul>
  <li><a href="#bug-reports">Bug Reports and Feature Requests</a></li>
  <ul>
    <li><a href="#existing-issues">Check Existing Issues</a></li>
    <li><a href="#issue-submission">Issue Submission</a></li>
    <li><a href="#issue-discussion">Issue Discussion</a></li>
    <li><a href="#issue-labels">Issue Labels</a></li>
  </ul>
  <li><a href="#prs">Pull Requests</a></li>
  <ul>
    <li><a href="#fork-the-repository">Fork the Repository</a></li>
    <li><a href="#set-up-your-local-environment">Set Up Your Local Environment</a></li>
    <li><a href="#create-a-new-branch">Create a New Branch</a></li>
    <li><a href="#make-changes">Make Changes</a></li>
    <li><a href="#test-your-changes">Test Your Changes</a></li>
    <li><a href="#commit-and-push">Commit and Push</a></li>
    <li><a href="#submitting-a-pull-request">Submitting a Pull Request</a></li>
    <li><a href="#pull-request-review">Pull Request Review</a></li>
    <li><a href="#merge-and-deployment">Merge and Deployment</a></li>
  </ul>
  <li><a href="#license">License</a></li>
</ul>

<br>

<h2 id='bug-reports'>🐛 Bug Reports and Feature Requests</h2>

If you encounter a bug while using Resume Genie or have a feature request in mind, please follow these steps:

<h3 id='existing-issues'>1. Check Existing Issues:</h3>

Before submitting a new issue, please search through the existing issues on our [GitHub repository](https://github.com/Gautam25Raj/resume-genie) to ensure that the bug or feature request hasn't been reported or requested already. If you find a related issue, you can provide additional information or add a "+1" reaction to indicate your interest in it.

<h3 id='issue-submission'>2. Issue Submission:</h3>

If you couldn't find a related issue, go ahead and submit a new one. To create a new issue, click on the "Issues" tab in the Resume Genie repository and select "New Issue". Clearly describe the bug or feature request, providing as much relevant information as possible. Include the following details:

- **Bug Reports**:

  - Describe the observed behavior and explain why you believe it is a bug.
  - Provide steps to reproduce the bug if you can reliably replicate it.
  - Include any error messages, stack traces, or logs related to the issue.
  - Mention the version of Resume Genie and any other relevant software or libraries being used.

- **Feature Requests**:
  - Clearly describe the desired functionality or feature.
  - Explain why you believe it would be valuable for Resume Genie.
  - Provide any additional context, use cases, or examples that can help the maintainers understand your request.

<h3 id='issue-discussion'>3. Issue Discussion:</h3>

Engage in the discussion on the issue thread by providing additional information or clarifications if requested by maintainers or other contributors. Feel free to share your thoughts, suggestions, or alternative approaches related to the reported bug or feature request. Your input will help us better understand the issue or feature request.

<h3 id='issue-labels'>4. Issue Labels:</h3>

The maintainers may apply labels to categorize and prioritize the issues. These labels help in organizing and tracking the progress of issues. If you notice any relevant labels missing from an issue, feel free to suggest them or discuss them in the issue thread.

<br>

<h2 id='prs'>🙋‍♂️ Pull Requests</h2>

We welcome and encourage contributions through pull requests. If you have a code fix, improvement, or new feature to propose, follow these steps:

<h3 id='fork-the-repository'> 1. Fork the Repository:</h3>

Start by forking the Resume Genie repository to your GitHub account. This will create a copy of the repository under your account.

<h3 id='set-up-your-local-environment'> 2. Set Up Your Local Environment:</h3>

Clone the forked repository to your local machine and follow the installation instructions provided in the project's [Developer's Guide](DEVELOPER.md). This will set up the necessary dependencies and get you ready to work on the project.

- **Clone** the forked repo
- Install the dependencies
- Run the project
  
<h3 id='create-a-new-branch'> 3. Create a New Branch:</h3>

Create a new branch for your contribution. Use a descriptive branch name that reflects the nature of your work.

```
# Create a new branch
$ git branch <branch-name>

# Switch to the newly created branch
$ git checkout <branch-name>
```

**Note: Replace <branch-name> with a descriptive name for your branch.**

After running these commands, you will have created a new branch with a name of your choice and switched to that branch. You can then make your changes and commit them to this branch.

<h3 id='make-changes'> 4. Make Changes:</h3>

Implement your changes or additions in the appropriate files within the project. Ensure that your code follows the existing coding style and conventions [Developer's Guide](DEVELOPER.md).

<h3 id='test-your-changes'> 5. Test Your Changes:</h3>
Thoroughly test your changes to ensure they work as intended and do not introduce any new issues.

<h3 id='commit-and-push'> 6. Commit and Push:</h3>

Commit your changes with clear and concise commit messages. Push the changes to your forked repository.

```
# Add the changes to the staging area
$ git add .

# Commit the changes with a descriptive message
$ git commit -m "Your commit message"

# Push the changes to the remote repository
$ git push origin <branch-name>
```

After running these commands, your changes will be committed with the specified message and pushed to the remote repository in the specified branch.

<h3 id='submitting-a-pull-request'> 7. Submitting a Pull Request:</h3>

Go to the original Resume Genie repository and locate the "Pull Requests" tab. Click on "New Pull Request" and provide a clear title and description for your pull request. Reference any related issues if applicable. Include the following points in your pull request:

- Describe the purpose and scope of your changes.
- Explain the problem you're addressing or the feature you're adding.
- Provide a high-level overview of the changes made.
- Include any relevant code snippets, if applicable, to showcase the specific changes made.

<h3 id='pull-request-review'> 8. Pull Request Review:</h3>

Your pull request will undergo review by the project maintainers. Be responsive to feedback and address any requested changes promptly. Discuss and collaborate with the maintainers to ensure the quality and coherence of your contribution.

**Note: After a pull request has been open for over 30 days with no activity or response from the author, it'll be automatically marked as stale. We might fork your changes and merge the changes ourselves. Since GitHub tracks contributions by commits, you will be credited.**

<h3 id='merge-and-deployment'> 9. Merge and Deployment:</h3>

Once your pull request has been approved, it will be merged into the `main` branch. The changes will be incorporated into future releases of Resume Genie.

<br>

---

Thank you for your contributions to Resume Genie! We value your time and effort in helping us improve our open-source resume builder software. Together, we can make Resume Genie a more powerful and user-friendly tool for creating outstanding resumes.

If you have any further questions, feel free to reach out to us through the issue tracker or other communication channels provided in the project's README file.

**Happy contributing! 💖**

<h2 id='license'>License</h2>

By contributing, you agree that your contributions will be licensed under its [MIT License](LICENSE).
