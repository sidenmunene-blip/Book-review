const continueButton = document.querySelector("#continue");

if (continueButton) {
  continueButton.style.transition = "transform 180ms ease";

  continueButton.addEventListener("mouseenter", () => {
    continueButton.style.transform = "scale(1.2)";
  });

  continueButton.addEventListener("mouseleave", () => {
    continueButton.style.transform = "scale(1.0)";
  });

  continueButton.addEventListener("click", () => {
    window.location.href = "Home.html";
  });
}


const defaultUsers = [
  { username: "Bin", password: "Hacker" }
];

function loadUsers() {
  try {
    const savedUsers = JSON.parse(localStorage.getItem("book-review-users"));
    return Array.isArray(savedUsers) ? savedUsers : [...defaultUsers];
  } catch {
    return [...defaultUsers];
  }
}

function saveUsers() {
  try {
    localStorage.setItem("book-review-users", JSON.stringify(users));
    return true;
  } catch {
    return false;
  }
}

let users = loadUsers();

const registrationForm = document.querySelector("#registration-form");

if (registrationForm) {
  const registrationMessage = document.querySelector("#registration-message");

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = registrationForm.elements.username.value.trim();
    const password = registrationForm.elements.password.value;
    const nameIsTaken = users.some(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );

    if (nameIsTaken) {
      registrationMessage.textContent = "That username is already registered.";
      return;
    }

    users.push({ username, password });

    if (!saveUsers()) {
      users.pop();
      registrationMessage.textContent = "The browser could not save this demo account.";
      return;
    }

    registrationForm.reset();
    registrationMessage.textContent = "Registration complete. You can now sign in.";
  });
}

const signInForm = document.querySelector("#signin-form");

if (signInForm) {
  const signInMessage = document.querySelector("#signin-message");

  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = signInForm.elements.username.value.trim();
    const password = signInForm.elements.password.value;
    const matchedUser = users.find((user) =>
      user.username === username && user.password === password
    );

    if (matchedUser) {
      signInMessage.textContent = `Welcome back, ${matchedUser.username}!`;
      window.location.href = "Home.html";
    } else {
      signInMessage.textContent = "Username or password is incorrect. Try the example account above.";
    }
  });
}


const books = [
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    genre: "Fantasy · Adventure",
    image: "hobbit.jpg",
    id: "the-hobbit"
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    genre: "African fiction · Historical",
    image: "things-fall-apart.svg",
    id: "things-fall-apart"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classic · Romance",
    image: "pride-and-prejudice.svg",
    id: "pride-and-prejudice"
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    genre: "Fantasy · Fable",
    image: "the-little-prince.svg",
    id: "the-little-prince"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science fiction",
    image: "dune.svg",
    id: "dune"
  },
  {
    title: "Matilda",
    author: "Roald Dahl",
    genre: "Children’s fiction · Fantasy",
    image: "matilda.svg",
    id: "matilda"
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "Historical fiction",
    image: "the-book-thief.svg",
    id: "the-book-thief"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure · Fable",
    image: "the-alchemist.svg",
    id: "the-alchemist"
  }
];

const bookGrid = document.querySelector("#book-grid");

if (bookGrid) {
  bookGrid.innerHTML = books.map((book) => `
    <article class="book-card">
      <img src="${book.image}" alt="Illustrated cover for ${book.title}" loading="lazy">
      <h2>${book.title}</h2>
      <p class="book-author">${book.author}</p>
      <p class="book-genre">${book.genre}</p>
      <a class="review-link" href="reviews.html#${book.id}">Read review</a>
    </article>
  `).join("");


  bookGrid.querySelectorAll(".book-card").forEach((bookCard) => {
    bookCard.style.transition = "transform 180ms ease, box-shadow 180ms ease";

    bookCard.addEventListener("mouseenter", () => {
      bookCard.style.transform = "scale(1.05)";
    });

    bookCard.addEventListener("mouseleave", () => {
      bookCard.style.transform = "scale(1)";
    });
  });
}
