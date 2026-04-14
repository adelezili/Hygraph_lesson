import { cache } from "react";
import { fetchHygraph } from "./fetchHygraph";
import { GET_BOOKS, GET_HOMEPAGE, GET_LAYOUT, GET_BOOK } from "./queries";
import { Book } from "@/types/book";
import { GeneralLayout, Homepage } from "@/types/layout";

export async function getBooks(): Promise<Book[]> {
  const data = await fetchHygraph<{ books: Book[] }>(GET_BOOKS, {}, {
    tags: ["books"],
  });
  return data.books;
}

export const getGeneralLayout = cache(async (): Promise<GeneralLayout> => {
  const data = await fetchHygraph<{ generalLayouts: GeneralLayout[] }>(
    GET_LAYOUT,
    {},
    { tags: ["layout"] }
  );
  return data.generalLayouts[0];
});

export async function getHomepage(): Promise<Homepage> {
  const data = await fetchHygraph<{ page: Homepage }>(GET_HOMEPAGE, {}, {
    tags: ["homepage"],
  });
  return data.page;
}

export async function getBook(slug: string): Promise<Book | null> {
  const data = await fetchHygraph<{ book: Book | null }>(GET_BOOK, { slug }, {
    tags: ["books", `book-${slug}`],
  });
  return data.book;
}
