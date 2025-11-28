// 1. Create Book type
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// 2. Books array
const books: Book[] = [];

// 3. addBook
function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: Book = { title, author, publicationYear };
  books.push(newBook);

  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

// 4. listBooks
function listBooks(): void {
  console.log("All Books:");
  books.forEach((b) =>
    console.log(`- ${b.title} by ${b.author} (${b.publicationYear})`)
  );
}

// 5. searchBook
function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  // CASE-SENSITIVE search (sesuai test)
  const results = books.filter((b) => b.title.includes(title));

  console.log(`Search Results for "${title}":`);

  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  results.forEach((b) =>
    console.log(`- ${b.title} by ${b.author} (${b.publicationYear})`)
  );
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
