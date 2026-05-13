# Playwright Authentication Tests

Small test automation project built with Playwright and TypeScript to validate the login functionality of https://the-internet.herokuapp.com/login.

## Project Setup Instructions

Clone the repository:

```bash
git clone https://github.com/Jcontreras06/playwright-auth-tests.git
```

Navigate to the project folder:

```bash
cd playwright-auth-tests
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## How to Run the Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Open the HTML report:

```bash
npx playwright show-report
```

---

## Dependencies / Prerequisites

- Node.js
- npm
- Playwright
- TypeScript

---

## Brief Project Explanation

This project uses Playwright with TypeScript to automate positive and negative login scenarios.

The framework follows the Page Object Model (POM) design pattern to separate page interactions from test logic and improve maintainability.

Implemented scenarios include:

- Successful login with valid credentials
- Login with invalid username
- Login with invalid password

The project also includes:

- Cross-browser testing (Chromium and Firefox)
- HTML reporting
- Screenshots and video capture on failure
- Trace collection for debugging

---

# Author

Julio Contreras
