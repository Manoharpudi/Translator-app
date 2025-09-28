# React Random String & Password Generator
This is a simple and modern web application built with React that generates secure, random strings or passwords. It was created as a task to demonstrate proficiency with core React hooks: `useState`, `useCallback`, and `useEffect`.

## Key Features
-   **Custom Length:** Users can specify the desired length of the generated string.
-   **Instant Generation:** A new string is generated automatically on page load and with the click of a button.
-   **One-Click Copy:** Easily copy the generated string to the clipboard.
-   **Modern UI:** A clean, responsive "no-box" design styled with Tailwind CSS.

## Tech Stack & Hooks
-   **Framework:** React (Vite)
-   **Styling:** Tailwind CSS
-   **Core Hooks:**
    -   `useState`: To manage string length, the generated string, and the "copied" state.
    -   `useCallback`: To memoize the string generation function for performance.
    -   `useEffect`: To generate a string automatically when the application first loads.

## How to Run Locally
1.  Clone the repository:
    `git clone https://github.com/your-username/random-string-generator.git`
2.  Navigate into the project directory:
    `cd random-string-generator`
3.  Install dependencies:
    `npm install`
4.  Start the development server:
    `npm run start`
