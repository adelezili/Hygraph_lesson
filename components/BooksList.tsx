import { Book } from "@/types/book";
import BookCard from "@/components/BookCard";

interface BooksListProps {
  books: Book[];
}

export default function BooksList({ books }: BooksListProps) {
  return (
    <ul>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
}
