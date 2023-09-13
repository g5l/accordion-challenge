# Accordion Challenge

Welcome to the Accordion Challenge project. This repository contains a Next.js based web application to showcase an profile tasks widget component UI

<table>
<tr>
<td>
    <img src="https://github.com/g5l/accordion-challenge/assets/20099133/01c69d7f-7d89-4b31-bbd2-1f301d86f064" alt="desktop"/>
</td>
<td>
    <img src="https://github.com/g5l/accordion-challenge/assets/20099133/0d7a62cd-69ca-4506-82c4-e33471a6340a" alt="mobile"/>
</td>
</tr>
</table>

## Overview

* **Framework**: Next.js
* **Language**: TypeScript
* **Styling**: Styled-Components

## Prerequisites

* Node.js v14+ (v20.6.0 preferred for types)
* npm (packaged with Node.js)

## Setup & Installation

1. Clone this repository.
   ```
    git clone [repo-link]
   ```
2. Navigate into the project directory.
   ```
    cd accordion-challenge
   ```
3. Install the necessary packages.
   ```
    npm install
   ```

## Available Scripts

In the project directory, you can run:

* **Development Mode**

  ````
  npm run dev
  ````

  Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000/) to view it in the browser. The page will reload if you make edits.
* **Production Build**

  ```
  npm run build
  ```

  Builds the app for production to the `.next` folder. This optimizes React code for the best performance.
* **Start Production Server**

  ```
  npm run start
  ```

  Starts the application in production mode. This requires `build` to have been run first.
* **Lint**

  ```
  npm run lint
  ```

  Analyze your codebase using `eslint` and reports linting errors.

## Project Structure

- **api**

  The Api layer to communicate the application with external server
- **components**

  To reuse and organize better parts of the application

  Folder pattern:

  ```
    index.ts              - To export the component
    Component.tsx         - Component code
    style.tsx             - Component style
    types.ts (if needed)  - Component types
  ```
- **pages**

  Main application pages (Pages Router)
- **app**

  The app router
- **service**

  Maintain the company's rules, and it can use the API layer or other service
- **styles**

  Maintain the global style
- **types**

  Maintain the global types

## Technologies & Packages

Here's a quick overview of the main technologies and packages used:

* **Core**:
  * [Next.js](https://nextjs.org/) - A React framework.
  * [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  * [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript with static type definitions.
* **Styling**:
  * [Styled-Components](https://styled-components.com/) - Library for component-level styles in React applications.
* **Utilities**:
  * [uuid](https://www.npmjs.com/package/uuid) - Library to generate unique identifiers.
* **Linting**:
  * [ESLint](https://eslint.org/) - Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Todo list

#### Missing features

- [ ]  Create global variables to reuse it on component's style file
