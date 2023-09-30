# MathLib-n: A Powerful Node.js Math Library

**MathLib-n** is a versatile Node.js library that empowers your applications with a rich set of mathematical functions and utilities. It simplifies common mathematical operations, making it an indispensable addition to your Node.js projects for everyday problem-solving.

## Version

- [GitHub Repository](https://github.com/marufHasan24/mathlib.git): Latest unstable version
- npm: 4.0.31-beta (Stable version, recommended)

**MathLib-n** is your trusted math companion, ready to tackle a wide range of everyday challenges, including:

- Determining if a number is odd, prime, and more.
- Managing memory data as arrays or individual values, with options to recall or delete memories by user-defined names.
- Solving quadratic equations (ax^2 + bx + c = 0) and linear equations (ax + by = c).
- Measuring area, length, angles, and more for various shapes using only their vertex points.
- Providing access to 23 essential mathematical constants.

These are just a glimpse of the library's capabilities, as it offers over 100 features and constants, including built-in Math object functions.

## Installation

You can effortlessly install **MathLib-n** using npm, yarn, or bower:

```bash
npm install mathlib-n
```

or

```bash
yarn add mathlib-n
```

or

```bash
bower install mathlib-n
```

## Getting Started

Once **MathLib-n** is in your project, you can dive into its capabilities like this:

```javascript
// Import the MathLib-n module
const mathlib = require("mathlib-n");

// Example usage of MathLib-n functions
const sum = mathlib.add(5, 3); // Returns 8
const product = mathlib.mul(4, 2); // Returns 8
const difference = mathlib.sub(5, 3); // Returns 2
const quotient = mathlib.div(4, 2); // Returns 2

// Explore other powerful functions offered by MathLib-n
```

## Key Functions

Here's a taste of the functions provided by **MathLib-n**:

- `fact(n)`: Calculates the factorial of a number.
- `linearEq(a, b, x)`: Solves linear equations of the form ax + b = 0 for x.
- `age(birthYear, birthMonth, birthDate, [dateArray])`: Calculates a person's age based on their birthdate.
- `qudrt(a, b, c)`: Solves quadratic equations of the form ax^2 + bx + c = 0 for x.
- `avg(numbers)`: Computes the average of an array of numbers.
- `logx(base, value)`: Calculates logarithms with a specified base.
- `rootx(base, value)`: Finds roots with a specified base.
- `fract(numerator, denominator)`: Retrieves the fractional representation of a number.
- `mathlib`: An object housing mathematical constants and helper functions.
- `Vector`: A class for handling vectors.
- `Matrix`: A class for working with matrices.
- `length`: Provides the length of the MathLib object.
- `info`: Displays insightful information about the library.
- `add(a, b[, more])`: Adds two or more numbers.
- `mul(a, b[, more])`: Multiplies two or more numbers.
- `sub(a, b[, more])`: Subtracts two or more numbers.
- `div(a, b[, more])`: Divides two or more numbers, and more.

In total, **MathLib-n** boasts over 130 functions and constants to elevate your mathematical endeavors.

## Explore the API

For an in-depth look at the available functions and comprehensive usage guidelines, refer to the [API Documentation](https://marufhasan24.github.io/mathlib_wiki/wiki.html).

## Examples

We've included a set of usage examples in the test folder. To run these examples, simply execute the following command:

```bash
npm run examples --prefix node_modules/mathlib-n
```

## License

**MathLib-n** is released under the MIT License. For full details, check out the LICENSE file.

## Get in Touch

If you have questions, bug reports, feature requests, or need general assistance, don't hesitate to reach out at <gamerid703@gmail.com>, or create an issue on the GitHub repository.

## Troubleshooting

### Fixing Memory Issues

Ensure you avoid using synchronous loops like `for` or `while` loops with asynchronous `memo()`. Doing so can lead to memory issues. If you encounter memory problems, you can resolve them using the following command:

```bash
npm run fix-memo --prefix node_modules/mathlib-n
```

This command includes a helpful animation that provides insights into your current mode, status, and the number of records and trashes. You can skip the animation by pressing `ctrl + c` (Windows) or `cmd + c` (Mac).

### Switching Modes

**MathLib-n** offers two modes: "science" and "fix" (abbreviated as `sci` and `fix`). You can also specify the number of decimal places with the "status" parameter.

To switch modes, use this command:

```bash
npm run modechanger --prefix node_modules/mathlib-n
```

Alternatively, you can change the mode programmatically:

```javascript
const mathlib = require("mathlib-n");
mathlib.getmode(); // Get the current mode
mathlib.setmode("fix", 2); // Set the mode to "fix" with 2 decimal places
```

Again, the command includes an informative animation that you can skip if needed.

## Stay Informed

For a detailed version history and updates, refer to the [History](https://marufhasan24.github.io/mathlib_wiki2/index.html#changeLog) section.

## Keywords

- math
- mathlib-n
- mathLib
- math library
- mathlib
- mathlibjs
- mathjs

## Documentation

For extensive documentation, visit the [MathLib-n Documentation](https://marufhasan24.github.io/mathlib_wiki2/wiki.html).

**Additional Notes**:

- `math.length`: Retrieves the length of the Math object.
- `math.mathlib()`: A fun function with terminal animation, providing valuable mode and file information.
- `math.recList`: Returns an array of recorded file names.

## License

MIT License

## Version History

Current Version: 4.0.31-beta

For a complete version history, refer to the [History](https://marufhasan24.github.io/mathlib_wiki/history.html) page.

This revised documentation aims to provide clarity and enhance the overall presentation of your MathLib-n library. Feel free to customize it further to match your preferences.
