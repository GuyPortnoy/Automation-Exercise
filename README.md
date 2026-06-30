# Automation-Exercise 

This project automates repetitive tasks to improve efficiency, reduce manual work, and ensure consistent execution.

## Requirements

- Playwright library
- Node.js (v18 or later recommended)
-  npm or yarn

## Installation 
Clone the repository: 
```bash git clone https://github.com/yourusername/your-repository.git cd your-repository ``` 
Install dependencies: 
```bash npm install ``` 
Install Playwright browsers: 
```bash npx playwright install```
## Running the Automation

Run the script:

```bash
node automation.js
```

Or, if using npm scripts:

```bash
npm start
```

or

```bash
npm run automate
```

## Browser Options

Run in headless mode:

```javascript
const browser = await chromium.launch({
  headless: true
});
```

Run with a visible browser:

```javascript
const browser = await chromium.launch({
  headless: false
});
```

## Error Handling

The automation includes error handling to:

- Catch unexpected exceptions
- Prevent abrupt termination
- Provide meaningful console output
- Simplify debugging

## Customization

You can easily modify the script to:

- Change target URLs
- Automate different workflows
- Fill forms
- Upload or download files
- Capture screenshots
- Generate PDFs
- Extract data from websites
- Schedule recurring automation tasks

## Troubleshooting

### Missing Playwright browsers

```bash
npx playwright install
```

### Dependency issues

```bash
npm install
```

### Node.js version

Verify your version:

```bash
node -v
```

UI problems

A1. Missing currency symbol for the payment amount.

A2. Unnecessary restriction on card number formatting.

A3. Unlabeled second address line, creating ambiguity.
 
A4. Required indicator for expiration date unclear.

A5. All fields for card holder and billing address need a better flow, this structure is very confusing.

A6. The form doesn't indicate whether it is secure.

A7. No CVV/Security Code field.

B.![Screenshot](ScreenShot 2026-06-30 at 10.14.50 PM.png)

Product solution for the most severe bug found

C. Unlabeled second address line, creating ambiguity -  To fix this issue, the second address line field should be clearly labeled as "Apt, suite, or unit" or "Optional secondary address."
