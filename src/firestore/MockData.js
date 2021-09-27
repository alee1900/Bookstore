import "./bookStyles.css";

const books = [
  {
    id: 0,
    title: "Red Queen",
    author: "Victoria Aveyard",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449778912l/22328546._SY475_.jpg",
  },
  {
    id: 1,
    title: "Red Queen",
    author: "Victoria Aveyard",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449778912l/22328546._SY475_.jpg",
  },
  {
    id: 2,
    title: "Red Queen",
    author: "Victoria Aveyard",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449778912l/22328546._SY475_.jpg",
  },
  {
    id: 3,
    title: "Red Queen",
    author: "Victoria Aveyard",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449778912l/22328546._SY475_.jpg",
  },
  {
    id: 4,
    title: "Red Queen",
    author: "Victoria Aveyard",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449778912l/22328546._SY475_.jpg",
  },
  {
    id: 5,
    title: "Red Queen",
    author: "Victoria Aveyard",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449778912l/22328546._SY475_.jpg",
  },
];

const MockData = () => {
  const items = books.map((book) => (
    <div key={book.id} id="book">
      <img src={book.cover} alt={book.title} title={book.title} />
      <div id="text">
        <p id="bookTitle">{book.title}</p>
        <p id="bookAuthor">{book.author}</p>
      </div>
    </div>
  ));
  return <div id="allBooks">{items}</div>;
};

export default MockData;
