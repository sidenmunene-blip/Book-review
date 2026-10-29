# Book Review

A small book review website built with HTML, CSS, and JavaScript. It lets readers browse a bookshelf, create a demo account, and share a star rating and written review for a book.

## Features

- Browse a book collection with cover art, authors, and genres.
- Register and sign in with a username and password.
- Add a review by choosing a book, rating it from one to five stars, and writing a comment.
- View reviews grouped under their books.
- Save demo accounts and reviews in the browser with `localStorage`.
- Use the layout on mobile and desktop screens.

## Pages

- `index.html` — welcome page and link to the bookshelf.
- `Home.html` — book cards and links to each book's review section.
- `Registration.html` — create a demo account.
- `Signin.html` — sign in to an existing demo account.
- `reviews.html` — add and read book reviews.

## Run the project

The project has no build step or package dependencies. Open `index.html` in a browser, or serve the project folder with a local web server for more consistent browser storage behavior.

## Demo sign-in

- Username: `Bin`
- Password: `Hacker`

You can also create another demo account on the registration page.

## Data and limitations

- Book details are listed in the `books` array in `script.js`. Cover image files are stored in the project folder.
- Accounts use the `book-review-users` browser storage entry. Reviews use `book-review-reviews`.
- Data is saved only in the current browser's storage. It is not shared between devices or visitors, and clearing browser storage removes it.
- This is a front-end demonstration. Passwords are stored in plain text in browser storage; do not use real passwords or real accounts.
- There is no server or database, and visitors can submit reviews without signing in.

## Technologies

- HTML for page structure and forms
- CSS for styling and responsive layouts
- JavaScript for page interactions, form handling, and dynamic book/review content
- Browser `localStorage` for demo data persistence
