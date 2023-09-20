# Contributing to mathlib-n

Thank you for considering contributing to mathlib-n! We welcome your contributions to make this library even better.

Before you start contributing, please take a moment to read through this guide to understand the process and our expectations for contributors.

## Code of Conduct

Please note that we have a [Code of Conduct](osc/CODE_OF_CONDUCT.md) that we expect all contributors and participants to follow. By participating in this project, you agree to abide by its terms.

## How to Contribute

1. Fork the Repository: Start by forking the mathlib-n repository to your own GitHub account.
2. Clone the Repository: Clone your forked repository to your local development environment using the following command:
3. Create a Branch: Create a new branch for your contribution with a descriptive name, for example:
4. Make Changes: Implement your changes or additions to the library. Be sure to follow the project's [coding conventions and style](#fundamental-rules-for-writing-code).
5. Run Tests: After finishing your changes, run the test suite to ensure that all tests pass. If you are adding new functionality, please include tests for your code in test folder.
6. Commit Changes: Commit your changes with clear and concise commit messages. Please follow the [commit message guidelines](#commit-message-guidelines) below.
7. Push Changes: Push your changes to your forked repository on GitHub:
8. Create a Pull Request: Open a Pull Request (PR) from your forked repository to the `main` branch of the mathlib repository. Provide a detailed description of your changes in the PR description.
9. Review and Feedback: Be prepared to receive feedback and be open to making necessary adjustments based on the review. Your contribution will be reviewed by project maintainer.
10. Merge: Once your PR is approved and passes automated tests, it will be merged into the main repository.

## Commit Message Guidelines

- Use clear and concise commit messages.
- Start the message with a verb in the imperative tense (e.g., "Add", "Fix", "Update" ,"Refactor").
- Keep commits focused on a single change or task.
- Reference issues or pull requests if relevant (e.g., "Fix #123," "Closes #456").

## Fundamental Rules for writing code

- All code must be written using nodejs.
- important lines needs a proper comment in English. Like decliration of variables, functions, different parts of code etc.
- some additional information about the code should be written in the top of the file as comment.eg:

  ```js
  /*
  Title : [file name].js
  Author : [your name]
  Description : [short description about the perpose of the file]
  Date : [creation date of the file as [day monthName, year]]
  */
  ```

- put the code in osc folder and make a pull request.
- All code must be written in a separate file according to the context. If they are related to each other, it will be marged in a single file.
- require `.localhandelar.js` file in your code to get the `error` and `record` function.
  - error function:
    It is used to throw an error. It takes 3 mandatory parameters and 2 optional parameters.
    - type: It is used to specify the type of input expected from user. It is a string. eg:`"a number"` or `"an array of numbers"` etc.
    - place: It is used to specify the input name. which wrong input caused the error. It is a string. eg:`"number1"` or `"array"` etc.
    - name: It is used to specify the name of the function in which the error occured. It is a string. eg:`"add"` or `"sub"` etc. **Don't need to add () sign after function name**
    - ErrorType: It is used to specify the type of error. It is a Error Constructor. eg:`TypeError` or `RangeError` etc. **Defult is TypeError**
    - customString : If you want to tell some more about input to user then put them into it. It is a string. eg:`"It should be a number"` or `"It should be a number greater than 0"` etc. **Defult is ""**
  - record function:
    It is used to record the data in the database. It takes 3 mandatory parameters and last one is optional parameter if you want to hide it from record (but not recommended).
    - answer: Put the result into it. It will return the result according to the mood of calculation has set in the database.
    - input: Put the input(s) here. If they are more than one then put them into an array.
    - from: Put the name of the function from which the result is coming. It is a string. eg:`"add"` or `"sub"` etc.
- If you want to use any other function from any other file then use `require` function.
- export your function using `module.exports`.

## Code Quality and Tests

- Ensure your code adheres to the existing coding style and conventions.
- Check every input for proper type, range, and constraints.<block style="color:red">_Very important_</block>
- Write unit tests for new code and make sure all tests pass before submitting a PR.
- Run linting and formatting tools (e.g., ESLint, Prettier) to maintain code quality.

## Reporting Issues

If you find a bug, have questions, or want to suggest an improvement, please create an issue on the GitHub repository. Provide detailed information about the problem or suggestion to help us address it effectively.

Thank you for your contributions to mathlib-n. We appreciate your help in making this library a valuable resource for the community!
