import { fetchHygraph } from "./fetchHygraph.js";
import { GET_BOOKS, GET_HOMEPAGE, GET_LAYOUT, GET_BOOK } from "./queries.js";

export async function getBooks() {
  const data = await fetchHygraph(GET_BOOKS);
  return data.books;
}

export async function getGeneralLayout() {
  const data = await fetchHygraph(GET_LAYOUT);
  return data.generalLayouts[0];
}

export async function getHomepage() {
  const data = await fetchHygraph(GET_HOMEPAGE);
  return data.page;
}

export async function getBook(slug) {
  const data = await fetchHygraph(GET_BOOK, { slug });
  return data.book;
}
