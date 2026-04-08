import { Suspense } from "react";
import { getBooks } from "@/lib/hygraph";
import { Book } from "@/types/book";
import BookCard from "@/components/BookCard";

export default async function BooksList() {
  const books = await getBooks();

  return (
    <Suspense>
      <ul>
        {books.map((book: Book, i: number) => (
          <BookCard key={i} book={book} />
        ))}
      </ul>
    </Suspense>
  );
}
